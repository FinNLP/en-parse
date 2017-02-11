import * as coordinating from "./coordinating";
import relating from "./relating";
import typing from "./typing";
import repairing from "./repairing";

/**
 * 
 * Sentence stoppers:
 *
 * 1. ,
 * 2. and (token)
 * 3. :
 * 4. "
 * 5. ( )
 * 
**/

export const parse = function(tags:Array<string>,tokens:Array<string>) {

	let nodes = tags.map((tag,i)=>nodeFactory(tag,tokens[i],i));
	
	let cnodes = coordinating.split(nodes);
	cnodes.subSentences = cnodes.subSentences.map((subsentence)=>{
		subsentence = typing(subsentence);
		subsentence = relating(subsentence,10);					
		subsentence = repairing(subsentence);
		// TODO: MWE
		return subsentence;
	});

	return coordinating.join(cnodes);
};

export interface NodeInterface {
	left:Array<NodeInterface>,
	right:Array<NodeInterface>,
	tokens:Array<string>,
	tags:Array<string>,
	index:Array<number>,
	type:string,
	label:string
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