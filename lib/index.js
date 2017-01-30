const chunk = require("./chunk/index.js");
const relate = require("./relate/index.js");
const repair = require('./repair/index.js');

module.exports = function(tags,tokens,o) {
	/** START */														if(global.b) global.b[0] = new Date().getTime();
	var nodes = tags.map((tag,i)=>factory(tag,tokens[i],i));			if(global.b) global.b[1] = new Date().getTime();
	nodes = chunk(nodes);												if(global.b) global.b[2] = new Date().getTime();
	nodes = relate(nodes,10);											if(global.b) global.b[3] = new Date().getTime();
	nodes = repair(nodes);												if(global.b) global.b[4] = new Date().getTime();
	if(!o) nodes = toArray(nodes[0]);									if(global.b) global.b[5] = new Date().getTime();
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

function toArray(jsonTree,parent,arr){
	if(!arr) arr = [];
	if(parent === undefined) parent = -1;
	var length = jsonTree.index[1] - jsonTree.index[0] + 1;
	while(length){
		var pos = jsonTree.index[0] + length - 1;
		var thisLabel = jsonTree.label;
		var thisParent = parent;
		if(pos !== jsonTree.index[1]) {
			thisLabel = "MWE";
			thisParent = jsonTree.index[1];
		}
		arr[pos] = {
			label:thisLabel,
			type:jsonTree.type,
			parent:thisParent,
		};
		length--;
	}
	jsonTree.left.forEach((x)=>arr = toArray(x,jsonTree.index[1],arr));
	jsonTree.right.forEach((x)=>arr = toArray(x,jsonTree.index[1],arr));
	return arr;
}