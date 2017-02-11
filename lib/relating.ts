import inflectors = require('en-inflectors');
import {relationships} from "./rules/relationships";
import {RelationshipInterface} from "./rules/relationships";
import {NodeInterface} from "./index";

/**
 * 
 * The dependency builder function.
 * For each sentence:
 * 		1. Call the root identifier (which might fail to identify in some cases)
 * 		2. Call the relationships builder
 * 
**/
export default function(nodes:NodeInterface[],recursionLimit:number){

	// identify root
	nodes = identifyRoot(nodes);

	// build relationships
	nodes = buildRelationships(nodes, recursionLimit);

	return nodes;
};

/**
 * Root identifier:
 * This function tries to identify the root of the verb
 * base on the following constraints:
 * 
 * 		- Possible root types are: VB VP VBN
 * 		- The root is the 1st non auxiliary verb in a sentence
 * 		- The auxiliary verb is:
 * 			- A verb that is followed directly by a possible root type
 * 			- A verb that is followed directly by an RB then a possible root type
 * 			- A verb that is followed directly by an NP then an RB then a possible root type
 * 			- A verb that comes at index 0 of the nodes and
 * 				- followed directly by an NP then a possible root type
 * 				- followed directly by an NP then an RB then a possible root type
 * 
**/
function identifyRoot(nodes:Array<NodeInterface>){
	let vbs = ["VP","VB","VBN"]; // conjugated verbs
	let pa = ["VBZ","VB","VBP","VBD","MD","VBN"]; // possible auxiliaries
	let oe = ["be","have","do","will","shall","may","can"];
	for (let i = 0; i < nodes.length; i++) {
		let node = nodes[i];
		let nx1:NodeInterface|undefined = nodes[i+1];
		let nx2:NodeInterface|undefined = nodes[i+2];
		let nx3:NodeInterface|undefined = nodes[i+3];

		if(!~vbs.indexOf(node.type)) continue; // not a conjugated verb
		// see if it's an auxiliary
		if(~pa.indexOf(node.tags[0]) && nx1) {
			// next tag is a conjugated verb? then it's an auxiliary
			if(~vbs.indexOf(nx1.type)) continue;
			// next tag is an RB and the next2 tag is a conjugated verb? then it's an auxiliary
			else if(nx1.tags[0] === "RB" && nx2) {
				if(~vbs.indexOf(nx2.type)) continue;
				else if(nx3 && nx2.type === "NP" && ~vbs.indexOf(nx3.type)) continue;
			}
			// it's the first one, followed by NP then VB
			// or it's the first one followed by NP RB VB
			else if(nx2 && node.index[0] === 0) {
				if(nx1.type === "NP" && ~vbs.indexOf(nx2.type)) continue;
				else if(nx3 && nx1.type === "NP" && nx2.tags[0] === "RB" && ~vbs.indexOf(nx3.type)) continue;
			}
			else if (nx2 && ~oe.indexOf(new inflectors.Inflectors(nx1.tokens[0]).conjugate("VBP")) && ~vbs.indexOf(nx2.type)) continue;
		}
		nodes[i].label = "ROOT";
		break;
	}
	return nodes;
}


/**
 *
 * Relationships builder:
 *
 * Loops through the nodes and matches the left with the right node
 * and it does the above until the number of nodes is 1
 * or when it reaches the recursion limit
 * 
 * If a relationship found between the left and the right nodes
 * then it pushes one of them into the children of the other
 * 
**/
function buildRelationships(nodes:Array<NodeInterface>, recursionLimit:number):Array<NodeInterface> {

	let iteration = 0;
	while (iteration < recursionLimit && nodes.length > 1) {

		// loop through nodes
		for(var l = nodes.length - 2; l >= 0; l--) {
			var leftNode = nodes[l];
			var rightNode = nodes[l + 1];
			var match = matchNodes(leftNode, rightNode, iteration);
			if(!match) continue;

			// splice the right node to the left
			if(match.direction === "<-") {
				rightNode.label = match.label;
				leftNode.right.push(rightNode);
				nodes.splice(l + 1, 1);
			}
			
			// splice the left node to the right
			else if(match.direction === "->") {
				leftNode.label = match.label;
				rightNode.left.push(leftNode);
				nodes.splice(l, 1);
			}
		}

		iteration += 1;
	}

	return nodes;
}



export interface MatchResult {
	direction:string,
	label:string
}

/**
 * Relationship Matcher:
 * 
 * This function takes a "left node" and a "right node"
 * and match their types against the rules list and
 * returns the label and the direction for the
 * matched rule (if any).
 * 
**/
function matchNodes (left:NodeInterface, right:NodeInterface, iteration:number):MatchResult|false {

	let match = null;

	for (let i = 0; i < relationships.length; i++) {
		let rel = relationships[i];
		// condition : Type
		if(rel[0][0] !== "" && rel[0][0] !== left.type) continue;
		else if(rel[0][1] !== "" && rel[0][1] !== right.type) continue;
		// Condition : Delay
		else if(rel[3] !== -1 && iteration <= rel[3]) continue;
		// Condition : maximum distance
		else if(rel[2] !== -1 && ((right.index[0] - left.index[1])-1) > rel[2]) continue;
		// Condition : direction & root
		else if(rel[4] === "<-" && right.label === "ROOT") continue;
		else if(rel[4] === "->" && left.label === "ROOT") continue;
		// condition : no two subjects
		else if(rel[5]==="NSUBJ" && rel[4]==="->" && findby.label('NSUBJ',right.left)) continue;
		// condition : tokens
		else if(rel[1][0]!=="" && !~left.tokens.map(x=>new inflectors.Inflectors(x).conjugate("VBP")).indexOf(rel[1][0])) continue;
		else if(rel[1][1]!=="" && !~right.tokens.map(x=>new inflectors.Inflectors(x).conjugate("VBP")).indexOf(rel[1][1])) continue;
		else {
			match = rel;
			break;
		};
	}

	if(!match) return false;

	return {
		direction:match[4],
		label:match[5]
	};
};

/**
 * 
 * Little two abstraction functions
 * to find specific nodes in an array
 * 
**/
export const findby = {
	type: function(type:string,nodes:Array<NodeInterface>):boolean {
		return !!nodes.find((node)=>node.type === type);
	},
	label: function(label:string,nodes:Array<NodeInterface>):boolean {
		return !!nodes.find((node)=>node.label === label);
	},
};