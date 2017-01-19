const matchNodes = require("./match.js");
const findby = require("./findby.js");
const repair = require('./repair.js');
const inflectors = require('en-inflectors');

/**
 * 
 * The dependency builder function.
 * This function will build the dependencies within
 * a loop constraints by a recursion limit.
 * 
 * @param  {Array} 	nodes          		Nodes to process
 * @param  {Number} recursionLimit 		Maximum loop limit
 * @return {Array}                		Dependency tree array
 * 
**/
module.exports = function(nodes,recursionLimit){

	/**
	 * 
	 * At first, try to find the root
	 * which is the first conjugated verb
	 * 
	**/

	var vbs = ["VP","VB","VBN"]; // conjugated verbs
	var pa = ["VBZ","VB","VBP","VBD","MD","VBN"]; // possible auxiliaries
	var oe = ["be","have","do","will","shall","may","can"];

	nodes.every((x,i)=>{
		var nx = nodes[i+1]||{tags:[],tokens:[]};
		var nx2 = nodes[i+2]||{tags:[],tokens:[]};
		var nx3 = nodes[i+3]||{tags:[],tokens:[]};
		if(~vbs.indexOf(x.type)) {
			// exceptions:
			if(~pa.indexOf(x.tags[0])) {
				if(~vbs.indexOf(nx.type) && !~oe.indexOf(inflectors.present(nx.tokens[0]))) return true;
				if(~oe.indexOf(inflectors.present(nx.tokens[0])) && ~vbs.indexOf(nx2.type) && !~oe.indexOf(inflectors.present(nx2.tokens[0]))) return true;
				else if(nx.tags[0] === "RB") {
					if(~vbs.indexOf(nx2.type) && !~oe.indexOf(inflectors.present(nx2.tokens[0]))) return true;
					if(nx2.type === "NP" && ~vbs.indexOf(nx3.type) && !~oe.indexOf(inflectors.present(nx3.tokens[0]))) return true;
				}
				else if(x.index[0]===0) {
					if(nx.type === "NP" && ~vbs.indexOf(nx2.type) && !~oe.indexOf(inflectors.present(nx2.tokens[0]))) return true;
					else if(nx.type === "NP" && nx2.tags[0] === "RB" && ~vbs.indexOf(nx3.type) && !~oe.indexOf(inflectors.present(nx3.tokens[0]))) return true;
				}
			}
			nodes[i].label = "ROOT";
			return false;
		}
		else return true;
	});

	/**
	 * 
	 * Then Apply defined grammar relations
	 * 
	**/

	var iteration = 0;
	while (iteration < recursionLimit && nodes.length > 1) {
		nodes = buildRelationships(nodes, iteration);
		iteration += 1;
	}
	return repair(nodes);
};

function buildRelationships(nodes, run) {
	for(var l = nodes.length - 2; l >= 0; l -= 1) {
		var leftNode = nodes[l];
		var rightNode = nodes[l + 1];
		var match = matchNodes(leftNode, rightNode, run);
		if(!match) continue;

		// splice the right node to the left
		if(match.direction === "<-") {
			rightNode.label = match.label;
			leftNode.right.push(rightNode);
			nodes.splice(l + 1, 1);
		}

		// splice the left node to the right
		else if(match.direction === "->") {
			if(match.label === 'NSUBJ' && findby.label('NSUBJ',rightNode.left)) match.label = 'DOBJ';
			if(match.label === "NSUBJ" && leftNode.tags[leftNode.tags.length-1]===",") continue; // don't add those ending with a ","
			leftNode.label = match.label;
			rightNode.left.push(leftNode);
			nodes.splice(l, 1);
		}
	}
	return nodes;
}