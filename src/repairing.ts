import {NodeInterface} from "./index";
import * as repairs from "./rules/repairs";

/**
 * 
 * This is the final step in the dependency parsing.
 * it will try to apply the repair functions
 * defined in the ../rules/repairs.ts
 * recursively.
 * 
**/

export default function (nodes:Array<NodeInterface>):Array<NodeInterface>{
	
	repairs.recursive.forEach((repair)=>{
		nodes = applyRecursive(nodes,repair);
	});
	
	repairs.dep.forEach((repair)=>{
		nodes = repair(nodes);
	});
	
	return nodes;
};

function applyRecursive(nodes:Array<NodeInterface>,repair:Function):Array<NodeInterface>{
	return repair(nodes).map((node:NodeInterface)=>{
		node.left = applyRecursive(node.left,repair);
		node.right = applyRecursive(node.right,repair);
		return node;
	});
}