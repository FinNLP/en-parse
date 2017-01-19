const findby = require('../relate/findby.js');
module.exports = [

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
			if(nodes[CCOMPi].left.find(x=>x.label==="ADVMARK")) nodes[CCOMPi].label = "ADVCL";
			else if(!nodes[CCOMPi].right.length) nodes[CCOMPi].label = "XCOMP";
			else {
				var hasMod = nodes[CCOMPi].right.filter(x=>x.type.endsWith("MOD"));
				var hasSubj = nodes[CCOMPi].right.filter(x=>x.type.endsWith("SUBJ"));
				var hasObj = nodes[CCOMPi].right.filter(x=>x.type.endsWith("OBJ"));
				if(!(hasMod || hasSubj || hasObj)) nodes[CCOMPi].label = "XCOMP";
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


];

return;


[
	function(nodes){
		if(nodes.length) {
			var hasAUX = nodes.findIndex(x=>~x.left.findIndex(x=>x.label==="AUX"));
			if(~hasAUX) {
				var hasADVMOD = nodes.findIndex(x=>~x.left.findIndex(x=>x.label==="ADVMOD"));
				if(~hasADVMOD) {
					var AUXi = nodes[hasADVMOD].left.findIndex(x=>x.label==="AUX");
					if(nodes[hasADVMOD].left[AUXi]) {
						var AUXhasObjOrSubj = (~nodes[hasADVMOD].left[AUXi].left.findIndex(x=>x.label === "NSUBJ")) || (~nodes[hasADVMOD].left[AUXi].right.findIndex(x=>x.label === "DOBJ" || x.label === "IOBJ"));
						if(AUXhasObjOrSubj) {
							nodes[hasADVMOD].left[AUXi].label = "VP";
							nodes[hasADVMOD].left[AUXi].fixed = true;
							nodes.push(nodes[hasADVMOD].left[AUXi]);
							nodes[hasADVMOD].left.splice(AUXi,1);
							hasADVMOD = nodes.findIndex(x=>~x.left.findIndex(x=>x.label==="ADVMOD"));
							nodes[hasADVMOD].label = "ADVCL";
							var fixed = nodes.findIndex(x=>x.fixed);
							nodes[fixed].right.push(nodes[hasADVMOD]);
							nodes.splice(hasADVMOD,1);
						}
					}
				}
			}
		}
		return nodes;
	},


	function(nodes){
		if(nodes.length) {
			var hasCCOMPi = nodes.findIndex(node=>~node.right.findIndex(x=>x.label === "CCOMP"));
			if(~hasCCOMPi) {
				var CCOMPi = nodes[hasCCOMPi].right.findIndex(x=>x.label==="CCOMP");
				if(~CCOMPi) {
					var AUXi = nodes[hasCCOMPi].right[CCOMPi].left.findIndex(x=>x.label==="AUX");
					if(~AUXi) {
						var DOBJi = nodes[hasCCOMPi].right[CCOMPi].left[AUXi].right.findIndex(x=>x.label === "DOBJ");
						var NSUBJi = nodes[hasCCOMPi].right[CCOMPi].left[AUXi].right.findIndex(x=>x.label === "NSUBJ");
						if((~DOBJi)||(~NSUBJi)) {
							nodes[hasCCOMPi].right[CCOMPi].left[AUXi].label = "VB";
							nodes[hasCCOMPi].right[CCOMPi].left[AUXi].fixed = true;
							nodes[hasCCOMPi].right.push(nodes[hasCCOMPi].right[CCOMPi].left[AUXi]);
							nodes[hasCCOMPi].right[CCOMPi].left.splice(AUXi,1);
							var newVBi = nodes[hasCCOMPi].right.findIndex(x=>x.fixed);
							if(~newVBi) {
								var CCOMPiNewParent = nodes[hasCCOMPi].right[newVBi].right.findIndex(x=>x.label==="ADVMOD");
								if(~CCOMPiNewParent) {
									nodes[hasCCOMPi].right[CCOMPi].label = "PREP";
									nodes[hasCCOMPi].right[newVBi].right[CCOMPiNewParent].right.push(nodes[hasCCOMPi].right[CCOMPi]);
									nodes[hasCCOMPi].right.splice(CCOMPi,1);
								}
							}
						}
					}
				}
			}
		}
		return nodes;
	},

	function(nodes){
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

	function(nodes){
		/**
		 * If nodes last is punc and index is 1,
		 * then set its parent to 0
		**/
		var l = nodes.length;
		if (l === 2 && nodes[1].type === 'PUNCT') {
			nodes[1].label = 'PUNCT';
			nodes[0].right.push(nodes[1]);
			nodes.splice(1, 1);
		}
		return nodes;
	},

	function(nodes){
		/**
		 * If it's only two, one is NP and the other is VAUX
		 * Then it's not AUX and the NP is subject
		**/
		var l = nodes.length;
		if(l === 2 && nodes[0].type === "NP" && nodes[1].type === "VAUX") {
			nodes[1].type = 'VP';
			nodes[0].label = "NSUBJ";
			nodes[1].left.push(nodes[0]);
			nodes.splice(0,1);
		}
		return nodes;
	},

	function(nodes){
		var l = nodes.length;
		if(l === 1 && nodes[0].type === "VBN") {
			// no subject
			if(!(nodes[0].left.find((x)=>x.label === "NSUBJPASS") || nodes[0].left.find((x)=>x.label === "NSUBJPASS"))) {
				// it's AUXPASS has a subject! Bad!
				var AUXi = nodes[0].left.findIndex((x)=>x.label === "AUXPASS");
				if(~AUXi) {
					var AUXSUBJi = nodes[0].left[AUXi].left.findIndex((x)=>x.label === "NSUBJ");
					if(~AUXSUBJi) {
						nodes[0].left[AUXi].left[AUXSUBJi].label = "NSUBJPASS";
						nodes[0].left.push(nodes[0].left[AUXi].left[AUXSUBJi]);
						nodes[0].left[AUXi].left.splice(AUXSUBJi,1);
					}
				}
			}
		}
		return nodes;
	},

	function(nodes){
		return nodes.map((node)=>{
			node.left.sort((a,b)=>a.index[0]-b.index[0]);
			node.right.sort((a,b)=>a.index[0]-b.index[0]);
			return node;
		});
	},
];