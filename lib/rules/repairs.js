const findby = require('../relate/findby.js');
module.exports = [

	(nodes)=>{
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

	(nodes)=>{
		if(nodes.length) {
			var verbPhrasei =  nodes.findIndex(x=>x.type==="VP"||x.type==="VB");
			if(~verbPhrasei) {
				var directObjectsCount = nodes[verbPhrasei].right.filter(x=>x.label === "DOBJ").length;
				if(directObjectsCount>1) {
					nodes[verbPhrasei].right = nodes[verbPhrasei].right.sort((a,b)=>a.index[0]-b.index[0]);
					nodes[verbPhrasei].right = nodes[verbPhrasei].right.map((x,i,arr)=>{
						if(x.label !== "DOBJ") return x;
						else if(i === arr.findIndex(x=>x.label==="DOBJ")) return x;
						else if(x.left.find(x=>x.label === "DATIVE")) {
							x.label = "NMOD";
							return x;
						}
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

	// nominal modifiers Example (he was active in his community)
	// I'm back online after a year without the internet <- investiage false positive
	(nodes)=>{
		if(nodes.length) {
			var OBJi = nodes.findIndex(x=>x.label === "DOBJ" || x.label === "IOBJ");
			if(~OBJi) {
				var hasIn = nodes[OBJi].left.find(x=>x.tags[0] === "IN");
				if(hasIn) nodes[OBJi].label = "NMOD";
			}
		}
		return nodes;
	},

	(nodes)=>{
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

	(nodes)=>{
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

	(nodes)=>{
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

	(nodes)=>{
		return nodes.map((node)=>{
			node.left.sort((a,b)=>a.index[0]-b.index[0]);
			node.right.sort((a,b)=>a.index[0]-b.index[0]);
			return node;
		});
	}

];