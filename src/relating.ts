import {relationships} from "./rules/relationships";
import {NodeInterface} from "./index";
import {Inflectors} from "en-inflectors";

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


function identifyRoot(nodes:Array<NodeInterface>){
	let marked = false;
	function markAsRoot(index:number){
		marked = true;
		nodes[index].label = "ROOT";
	}

	const removedADs:{index:number,node:NodeInterface}[] = [];
	const roots:{index:number,base:string,token:string}[] = [];

	for (var index = 0; index < nodes.length; index++) {
		let node = nodes[index];
		if(node.type === "AD") continue; // should not be a nominal phrase
		removedADs.push({
			index:index,
			node:node
		});
	}

	for (var index = 0; index < removedADs.length; index++) {
		let node = removedADs[index];
		// auxiliaries should not be more than 3 in length
		if((roots.length) && (index - roots[roots.length-1].index > 4)) break;
		// add verbal phrases only
		if(node.node.tags[0].startsWith("V")) roots.push({
			base:new Inflectors(node.node.tokens[0]).toPresent(),
			token:node.node.tokens[0].toLowerCase(),
			index:node.index
		});
	}

	// no verbal phrases found
	if(roots.length === 0) return nodes;
	
	// four verbal phrases
	if((!marked) && roots.length > 3) {
		// (AUX: will) + (AUX: have) + (AUX:been) + (ROOT)
		if(roots[0].base === "will" && roots[1].base === "have" && roots[2].token === "been") {
			markAsRoot(roots[3].index);
		}
	}

	// three verbal phrases
	if((!marked) && roots.length > 2) {
		// (AUX: HAVE) + (AUX: BEEN) + (ROOT)
		if(roots[0].base === "have" && roots[1].token === "been") markAsRoot(roots[2].index);
		// (AUX: WILL) + (AUX: HAVE) + (ROOT)
		else if(roots[0].base === "will" && roots[1].base === "have") markAsRoot(roots[2].index);
		// (AUX: BE) + (AUX: going to) + (ROOT)
		else if(roots[0].base === "be" && roots[1].token === "going" && nodes[roots[1].index+1].tokens[0] === "to") {
			markAsRoot(roots[2].index);
		}
	}
	

	// two verbal phrase
	if((!marked) && roots.length > 1) {
		// (AUX: DO/HAVE/BE) + (ROOT VERB)
		if(roots[0].base === "do" || roots[0].base === "be" || roots[0].base === "have") {
			markAsRoot(roots[1].index);
		}
	}

	// one verbal phrase found
	if((!marked) && roots.length > 0) markAsRoot(roots[0].index);

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
		if(rel.left.length && rel.left.indexOf(left.type) === -1) continue; 
		else if (rel.right.length && rel.right.indexOf(right.type) === -1) continue; 

		// Condition : Delay
		else if(rel.delay !== -1 && iteration <= rel.delay) continue;

		// Condition : maximum distance
		else if(rel.maxDistance !== -1 && ((right.index[0] - left.index[1])-1) > rel.maxDistance) continue;

		// Condition : direction & root
		else if(rel.direction === "<-" && right.label === "ROOT") continue;
		else if(rel.direction === "->" && left.label === "ROOT") continue;

		// condition : no two subjects
		else if(rel.label === "NSUBJ" && rel.direction === "->" && findBy.label("NSUBJ",right.left)) continue;
		else if(rel.label === "NSUBJPASS" && rel.direction === "->" && findBy.label("NSUBJPASS",right.left)) continue;

		// condition : tokens
		else if(rel.leftTokens.length && rel.leftTokens.indexOf(new Inflectors(left.tokens[0]).conjugate("VBP")) === -1) continue;
		else if(rel.rightTokens.length && rel.rightTokens.indexOf(new Inflectors(right.tokens[0]).conjugate("VBP")) === -1) continue;

		else {
			match = rel;
			break;
		};
	}

	if(!match) return false;

	return {
		direction:match.direction,
		label:match.label
	};
};

/**
 * 
 * Little two abstraction functions
 * to find specific nodes in an array
 * 
**/
export const findBy = {
	type: function(type:string,nodes:Array<NodeInterface>):boolean {
		return !!nodes.find((node)=>node.type === type);
	},
	label: function(label:string,nodes:Array<NodeInterface>):boolean {
		return !!nodes.find((node)=>node.label === label);
	},
};