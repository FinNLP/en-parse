const repairs = require('../rules/repairs.js');

/**
 * 
 * This is the final step in the dependency parsing.
 * it will try to apply the repair functions
 * defined in the ../rules/repairs.js
 * recursively.
 * 
 * @param  {Array} 	nodes 	Nodes array
 * @return {Array}       	Repaired nodes array
 * 
**/
module.exports = function (nodes) {
	repairs.forEach((repair)=>{
		nodes = applyRepair(nodes,repair);
	});
	return nodes;
};

function applyRepair(nodes,repair) {
	return repair(nodes).map((node)=>{
		node.left = repair(node.left);
		node.right = repair(node.right);
		return node;
	});
}