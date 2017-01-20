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
	
	repairs.recursive.forEach((repair)=>{
		nodes = applyRecursive(nodes,repair);
	});
	
	repairs.dep.forEach((repair)=>{
		nodes = repair(nodes);
	});
	
	return nodes;
};

function applyRecursive(nodes,repair) {
	return repair(nodes).map((node)=>{
		node.left = applyRecursive(node.left,repair);
		node.right = applyRecursive(node.right,repair);
		return node;
	});
}