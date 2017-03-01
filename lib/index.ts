import relating from "./relating";
import repairing from "./repairing";
import typing from "./typing";

export const parse = function(tags:Array<string>,tokens:Array<string>,o?:true):ResultNode[] {
	let nodes = tags.map((tag,i)=>nodeFactory(tag,tokens[i],i));
	nodes = typing(nodes);
	nodes = relating(nodes,10);
	nodes = repairing(nodes);
	if(o) return nodes;
	return toArray(nodes[0]);
};

export interface NodeInterface {
	left:Array<NodeInterface>,
	right:Array<NodeInterface>,
	tokens:Array<string>,
	tags:Array<string>,
	index:Array<number>,
	type:string,
	label:string,
}

function nodeFactory(tag:string,token:string,index:number):NodeInterface {
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

export interface ResultNode {
	label:string,
	type:string,
	parent:number
}

function toArray(jsonTree:NodeInterface,parent?:number,arr?:ResultNode[]):ResultNode[]{
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


export default parse;