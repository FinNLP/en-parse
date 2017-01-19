const chunk = require("./chunk/index.js");
const relate = require("./relate/index.js");


module.exports = function(tags,tokens) {
	var nodes = tags.map((tag,i)=>factory(tag,tokens[i],i));
	nodes = chunk(nodes);
	nodes = relate(nodes,10);
	return nodes;
};

function factory(tag,token,index) {
	return {
		left:[],
		right:[],
		tokens:[token],
		tags:[tag],
		index:[index,index], // [from, to] initially same index
		type:tag,
	};
}