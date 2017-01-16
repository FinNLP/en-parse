const chunks = require("../rules/chunks.js");
const ignore = require('./ignore.js');
const chunker = require("./chunker.js");

/**
 * 1. 	Strips off the irrelevant tags
 * 2. 	Takes the nodes and applies all the chunks
 * 		one by one on them
 * 
 * @param  {Array} nodes 	Nodes to apply the chunking to
 * @return {Array}       	Chunked nodes
 * 
**/
module.exports = function(nodes){
	nodes = ignore(nodes);
	chunks.forEach((chunk)=>{
		nodes = chunker(chunk[0], chunk[1], chunk[2], nodes);
	});
	return nodes;
};