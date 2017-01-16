/**
 * 
 * Little abstraction functions
 * for finding a node by it's type or label
 * 
**/

module.exports.type = function(type, nodes) {
	return nodes.find((node)=>node.type === type);
};

module.exports.label = function (label, nodes) {
	return nodes.find((node)=>node.label === label);
};