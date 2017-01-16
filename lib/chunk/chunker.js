/**
 * 
 * Applies a chunk identifier to the node
 * @param  {String} 		chunkId   	The label of the chunk (VP for example)
 * @param  {Array|String} 	chunkTags 	The conditional tags for the chunk
 * @param  {Array} 			nodes     	Nodes to apply the rules to
 * @return {Array}           			Chunked nodes
 * 
**/
module.exports = function (chunkId, chunkTags, chunkFunction, nodes){
	var isUnique = typeof chunkTags === 'string';
	var l = nodes.length - (isUnique?1:2);
	for(l; l >= 0; l -= 1) {
		var leftNode = nodes[l];
		if (!isUnique) {
			var rightNode = nodes[l + 1];
			var left = chunkTags.indexOf(leftNode.type);
			var right = chunkTags.indexOf(rightNode.tags[0]);
			if (left > -1 && right > -1 && left <= right && ((!chunkFunction) || chunkFunction(leftNode,rightNode,l,nodes))) {
				leftNode.type = chunkId;
				leftNode.index[1] = rightNode.index[1];
				leftNode.tags = leftNode.tags.concat(rightNode.tags);
				nodes.splice(l + 1, 1);
			}
		}
		else if (chunkTags === leftNode.type) leftNode.type = chunkId;
	}
	return nodes;
};