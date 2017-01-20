const chunk = require("./chunk/index.js");
const relate = require("./relate/index.js");
const repair = require('./repair/index.js');

module.exports = function(tags,tokens) {
	/** START */														if(global.b) global.b[0] = new Date().getTime();
	var nodes = tags.map((tag,i)=>factory(tag,tokens[i],i));			if(global.b) global.b[1] = new Date().getTime();
	nodes = chunk(nodes);												if(global.b) global.b[2] = new Date().getTime();
	nodes = relate(nodes,10);											if(global.b) global.b[3] = new Date().getTime();
	nodes = repair(nodes);												if(global.b) global.b[4] = new Date().getTime();
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
		label:""
	};
}