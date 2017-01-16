const ignoreList = ["\"", "(", ")"];

/**
 * Ignores any tags that are irrelevant to the dependency parsing
 * 
 * @param  {Array} nodes 	Array of nodes
 * @return {Array}       	Array of nodes with the ignorable tags stripped off
 * 
**/
module.exports = function(nodes){
	return nodes.filter((node)=>(!~ignoreList.indexOf(node.tags[0])));
};