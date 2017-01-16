const chunk = require("./chunk/index.js");
const relate = require("./relate/index.js");


module.exports = function(tags) {
	var nodes = tags.map((tag,i)=>factory(tag,i));
	nodes = chunk(nodes);
	nodes = relate(nodes,10);
	return nodes;
};


function factory(tag,index) {
	return {
		left:[],
		right:[],
		tags:[tag],
		index:[index,index], // [from, to] initially same index
		type:tag,
	};
}