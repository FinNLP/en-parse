const findby = require("./findby.js");

/**
 * 
 * This is the final step in the dependency parsing.
 * it will try to fix some edge cases then sort
 * the nodes and their children recursively
 * according to their indices.
 * 
 * @param  {Array} 	nodes 	Nodes array
 * @return {Array}       	Repaired nodes array
 * 
**/

module.exports = function (nodes) {

	/**
	 * If verb phrase is the root, no subject,
	 * and one right NP,
	 * then this NP become NSUBJ rather than DOBJ
	**/
	if (nodes[0].type === 'VP' && (!findby.label('NSUBJ', nodes[0].left)) && (!findby.label('NSUBJ', nodes[0].right))) {
		if (findby.label('DOBJ', nodes[0].right)) nodes[0].label = 'NSUBJ';
	}

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
	nodes = sort(nodes);
	return nodes;
};

function sort(nodes) {
	return nodes.map((node)=>{
		node.left.sort((a,b)=>a.index[0]-b.index[0]);
		node.right.sort((a,b)=>a.index[0]-b.index[0]);
		node.left = sort(node.left);
		node.right = sort(node.right);
		return node;
	});
}