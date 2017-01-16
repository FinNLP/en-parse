const matchNodes = require("./match.js");
const findby = require("./findby.js");
const repair = require('./repair.js');

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
		var match = matchNodes(leftNode.type, rightNode.type, run);
		if(!match) continue;

		// splice the right node to the left
		if (match.direction === "<-") {
			rightNode.label = match.label;
			leftNode.right.push(rightNode);
			nodes.splice(l + 1, 1);
		}

		// splice the left node to the right
		else if (match.direction === "->") {
			if (match.label === 'NSUBJ' && findby.label('NSUBJ',rightNode.left)) continue;
			leftNode.label = match.label;
			rightNode.left.push(leftNode);
			nodes.splice(l, 1);
		}
	}
	return nodes;
}