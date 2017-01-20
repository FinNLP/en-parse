const findby = require('../relate/findby.js');

/**
 * 
 * Recursive generic repairs
 * 
**/
module.exports.recursive = [

	/**
	 * 
	 * Repairs needs to be refractored to map/reduce
	 * 
	**/

	// AUX should not have dependencies
	(nodes)=>{
		return nodes.map((node)=>{
			var nonEmptyAUXi = node.left.findIndex(x=>x.label.startsWith("AUX")&&(x.left.length||x.right.length));
			if(!~nonEmptyAUXi) return node;
			node.left[nonEmptyAUXi].left.forEach(x=>node.left.push(x));
			node.left[nonEmptyAUXi].right.forEach(x=>node.left.push(x));
			node.left[nonEmptyAUXi].left = [];
			node.left[nonEmptyAUXi].right = [];
			return node;	
		});
	},

	// AMOD to: CSUBJ
	(nodes)=>{
		// if it has a COP and the verb has W 
		var VERBi = nodes.findIndex(x=>x.type.startsWith("V"));
		if(~VERBi) {
			var AMODi = nodes[VERBi].right.findIndex(x=>x.label === "AMOD");
			if(~AMODi && ~VERBi) {
				var hasCOP = nodes[VERBi].right[AMODi].left.find(x=>x.label === "COP");
				var hasW = nodes[VERBi].left.find(x=>x.type.startsWith("W"));
				if(hasCOP&&hasW) nodes[VERBi].right[AMODi].label = "CSUBJ";
			}
		}

		return nodes;
	},

	// CCOMP to: XCOMP
	// CCOMP to: ADVCL
	(nodes)=>{
		var CCOMPi = nodes.findIndex(x=>x.label==="CCOMP");
		if(~CCOMPi) {
			if(nodes[CCOMPi].left.find(x=>x.label==="ADVMARK"||x.label==="ADVMOD")) nodes[CCOMPi].label = "ADVCL";
			else if(!nodes[CCOMPi].right.length) nodes[CCOMPi].label = "XCOMP";
			else {
				var mods = nodes[CCOMPi].right.filter(x=>x.type.endsWith("MOD"));
				var subjs = nodes[CCOMPi].right.filter(x=>x.type.endsWith("SUBJ"));
				var objs = nodes[CCOMPi].right.filter(x=>x.type.endsWith("OBJ"));
				if(!(mods.length || subjs.length || objs.length)) nodes[CCOMPi].label = "XCOMP";
				else if(objs[0].type === "WDT" || objs[0].type === "WP") nodes[CCOMPi].label = "XCOMP";
			}
		}
		return nodes;
	},

	// OBJ to: NSUBJ
	// ATTR to: NSUBJ
	(nodes)=>{
		var hasEXPLi = nodes.findIndex(x=>x.left.find(x=>x.label==="EXPL"));
		if(~hasEXPLi) {
			var ATTRorOBJi = nodes[hasEXPLi].right.findIndex(x=>x.label.endsWith("OBJ")||x.label === "ATTR");
			if(~ATTRorOBJi) nodes[hasEXPLi].right[ATTRorOBJi].label = "NSUBJ";
		}
		return nodes;
	},

	// DOBJ to: IOBJ
	// DOBJ to: OBL
	(nodes)=>{
		if(nodes.length) {
			var verbPhrasei =  nodes.findIndex(x=>x.type==="VP"||x.type==="VB");
			if(~verbPhrasei) {
				var directObjectsCount = nodes[verbPhrasei].right.filter(x=>x.label.endsWith("OBJ")).length;
				if(directObjectsCount>0) {
					nodes[verbPhrasei].right = nodes[verbPhrasei].right.sort((a,b)=>a.index[0]-b.index[0]);
					nodes[verbPhrasei].right = nodes[verbPhrasei].right.map((x,i,arr)=>{
						if(x.label !== "DOBJ") return x;
						else if(x.left.find(x=>x.label === "CASE")) {
							x.label = "OBL";
							return x;
						}
						else if(i === arr.findIndex(x=>x.label==="DOBJ")) return x;
						else {
							x.label = "IOBJ";
							return x;
						}
					});
				}
			}
		}
		return nodes;
	},

	// X to: NMOD
	(nodes)=>{
		return nodes.reduce((n,x)=>{
			var CASE = x.left.find(x=>x.label==="CASE");
			if(!CASE || CASE.tokens[0] !== "of") n.push(x);
			else {
				x.label = "NMOD";
				var newParent = n.findIndex(x=>x.label.endsWith("SUBJ")||x.label.endsWith("OBL")||x.label.endsWith("OBJ"));
				if(~newParent) n[newParent].right.push(x);
				else n.push(x);
			}
			return n;
		},[]);
	},

	// DOBJ to: NSUBJ
	(nodes)=>{
		/**
		 * If verb phrase is the root, no subject,
		 * and one right NP,
		 * then this NP become NSUBJ rather than DOBJ
		**/
		if (nodes[0] && nodes[0].type === 'VP' && (!findby.label('NSUBJ', nodes[0].left)) && (!findby.label('NSUBJ', nodes[0].right))) {
			if (findby.label('DOBJ', nodes[0].right)) nodes[0].label = 'NSUBJ';
		}
		return nodes;
	},

	(nodes)=>{
		return nodes.map((node)=>{
			node.left.sort((a,b)=>a.index[0]-b.index[0]);
			node.right.sort((a,b)=>a.index[0]-b.index[0]);
			return node;
		});
	},
];


/**
 * 
 * Unknown dependencies repairs
 * 
**/
module.exports.dep = [
	// PUNCs
	function(nodes){
		var l = nodes.length;
		if (l === 2 && nodes[1].type === 'PUNCT') {
			nodes[1].label = 'PUNCT';
			nodes[0].right.push(nodes[1]);
			nodes.splice(1, 1);
		}
		return nodes;
	},

	// Last shot at root identification
	function(nodes){
		if(nodes.find(x=>x.label==="ROOT")) return nodes;
		else if(nodes.length === 1) {
			nodes[0].label = "ROOT";
			return nodes;
		}
		else {
			/**
			 * The root is either identified by the relater
			 * if not then it's the node that has the most dependencies
			 * if two nodes have equal number of dependencies then it's the first
			**/
			var rootIndex = nodes.map((x,index)=>{
				return {
					depCount:x.left.length+x.right.length,
					index:index
				};
			}).sort((a,b)=>b.depCount-a.depCount)[0].index;
			nodes[rootIndex].label = "ROOT";
			return nodes;
		}
	},

	// Mistakingly labeled root making right verbs unable to take it
	// a clausal complement
	function(nodes){
		if(nodes.length === 1) return nodes;
		else if(nodes.filter(x=>x.type.startsWith("V")).length !== nodes.length) return nodes;
		else if(nodes.findIndex(x=>x.label==="ROOT") === 0) return nodes;
		else return nodes.reduce((newArr,node,index)=>{
			if(index === 0) {
				node.label = "ROOT";
				newArr.push(node);
			}
			else {
				if(node.right.find(x=>x.label.endsWith("OBJ"))) node.label = "CCOMP";
				else node.label = "XCOMP";
				newArr[0].right.push(node);
			}
			return newArr;
		},[]);
	},

	// DEVELOPMENT NOTICE:
	// COMMENT THIS ONE OUT AND DEBUG THE ORPHANS
	// THEN WRITE REPAIRS ABOVE IT
	// unknown dependency
	function(nodes){
		var rootIndex = nodes.findIndex(x=>x.label==="ROOT");
		var rooti = nodes[rootIndex].index[0];
		nodes.forEach((item,index)=>{
			if(item.label !== "ROOT") {
				item.label = "DEP";
				if(item.index[0]<rooti) nodes[rootIndex].left.push(item);
				else nodes[rootIndex].right.push(item);
			}
		});
		return [nodes.find(x=>x.label==="ROOT")];
	}
];