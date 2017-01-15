const chunks = require("./chunks.js");
const relationships = require("./relationships.js");
const ignoreList = require('./ignore.js');

function buildChunk(chunkId, chunkTags, nodes) {
	var isUnique = typeof chunkTags === 'string';
	var l = nodes.length - (isUnique?1:2);

	for(l; l >= 0; l -= 1) {
		var leftNode = nodes[l];
		if (!isUnique) {
			var rightNode = nodes[l + 1];
			var left = chunkTags.indexOf(leftNode.type);
			var right = chunkTags.indexOf(rightNode.tags[0]);
			if (left > -1 && right > -1 && left <= right) {
				leftNode.type = chunkId;
				leftNode.index[1] = rightNode.index[1];
				leftNode.tags = leftNode.tags.concat(rightNode.tags);
				nodes.splice(l + 1, 1);
			}
		}
		else if (chunkTags === leftNode.type) leftNode.type = chunkId;
	}

	return nodes;
}

function buildChunks(nodes) {
	chunks.forEach((chunk)=>{
		nodes = buildChunk(chunk[0], chunk[1], nodes);
	});
	return nodes;
}

function matchNodes(leftType, rightType, run) {
	var match = relationships.find((relationship)=>{
		// Some rules require few recursions before applying
		if (relationship.length > 4 && run < relationship[4]) return false;
		return relationship[0] === leftType && relationship[1] === rightType;
	});

	if(!match) return false;

	return {
		direction:match[2],
		label:match[3]
	};
}

/**
 * Building relationships
 * 
 * 						Left node
 * 							|	
 *  []===[]====[]=====[]===[]===[]
 *    							|
 *          				Right node 
 *
 *
 * 
 * 				 Left node 	
 * 			   		|
 *  []===[]==[]====[]===[]===[]
 *    					|
 *          			Right node
 *
 * .. and so on
 * 
**/
function buildRelationships(nodes, run) {
	for(var l = nodes.length - 2; l >= 0; l -= 1) {
		var leftNode = nodes[l];
		var rightNode = nodes[l + 1];
		var match = matchNodes(leftNode.type, rightNode.type, run);
		if(!match) continue;

		// splice the right node to the left
		if (match.direction === "<-") {
			leftNode.right.push(rightNode);
			nodes.splice(l + 1, 1);
			rightNode.label = match.label;
		}

		// splice the left node to the right
		else if (match.direction === "->") {
			if (match.label === 'NSUBJ' && findByLabel('NSUBJ', rightNode.left)) continue;
			rightNode.left.push(leftNode);
			nodes.splice(l, 1);
			leftNode.label = match.label;
		}
	}
	return nodes;
}

function repair(nodes) {

	// If verb phrase is the root
	// no subject,
	// and one right NP,
	// then this NP become NSUBJ rather than DOBJ
	if (nodes[0].type === 'VP' && (!findByLabel('NSUBJ', nodes[0].left)) && (!findByLabel('NSUBJ', nodes[0].right))) {
		if (findByLabel('DOBJ', nodes[0].right)) res.label = 'NSUBJ';
	}

	// If nodes last is punc and index is 1,
	// set its parent to 0
	var l = nodes.length;
	if (l === 2 && nodes[1].type === 'PUNCT') {
		nodes[1].label = 'PUNCT';
		nodes[0].right.push(nodes[1]);
		nodes.splice(1, 1);
	}

	// sort
	nodes = sort(nodes);

	return nodes;

}

function sort(nodes, tags, sentence) {
	return nodes.map((node)=>{
		node.left.sort((a,b)=>a.index[0]-b.index[0]);
		node.right.sort((a,b)=>a.index[0]-b.index[0]);
		node.left = sort(node.left);
		node.right = sort(node.right);
		return node;
	});
}

function findByType(type, nodes) {
	for (var i = 0, l = nodes.length; i < l; i += 1) {
		if (nodes[i].type === type) {
			return nodes[i];
		}
	}
	return null;
}

function findByLabel(is, nodes) {
	for (var i = 0, l = nodes.length; i < l; i += 1) {
		if (nodes[i].label === is) return nodes[i];
	}
	return null;
}

function createNode(type, from, to, tags) {
	return {
		left:[],
		right:[],
		tags:tags||[type],
		index:[from,to],
		type:type,
	};
}

function ignore(nodes){
	return nodes.filter((node)=>(!~ignoreList.indexOf(node.tags[0])))
}

module.exports = function(tags) {

	// First create a node for every token
	// of the sentence
	
	var nodes = tags.map((tag,i)=>createNode(tag, i, i));

	nodes = ignore(nodes);


	// First we create the chunks to assign
	// a partial structure of the sentence.
	// In compendium, chunks are one node.

	// The following will aggregate the nodes
	// that match the chunks signatures.

	// The nodes array will be reduced so it
	// contains only the chunks (and the nodes)
	// that didn't match any chunk.
	
	nodes = buildChunks(nodes);

	// We now run the parser that
	// build the relationships until
	// we have only one node (parsing successful)
	// or we reach the recursion limit.
	//
	// The parser will populate the left and right
	// properties of each node with all their subnodes.
	// It should remain only one node, that is the ROOT.
		
	var stop = 0;
	while (stop < 1 && nodes.length > 1) {
		nodes = buildRelationships(nodes, stop);
		stop += 1;
	}

	// At last we repair the parsing for a few
	// corner case and make it usable for the user
	nodes = repair(nodes);

	return nodes;

	// proposed fix:
	return nodes.map((x,i,arr)=>{
		if(!i) return x; // the master
		arr[0].right.push(x);
	}).filter(x=>x)[0];
};