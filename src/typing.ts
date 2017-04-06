import {NodeInterface} from "./index";
import * as types from "./rules/types";

export default function(nodes:Array<NodeInterface>):Array<NodeInterface>{
	types.preUnique.forEach((typeRule)=>{
		nodes = typer(typeRule[0], typeRule[1], typeRule[2], nodes);
	});
	types.unique.forEach((typeRule)=>{
		nodes = typer(typeRule[0], typeRule[1], undefined, nodes);
	});
	types.postUnique.forEach((typeRule)=>{
		nodes = typer(typeRule[0], typeRule[1], typeRule[2], nodes);
	});
	return nodes;
};

const typer = function (typeId:string, typeTags:Array<string>|string, typeFunction:Function|undefined, nodes:Array<NodeInterface>):Array<NodeInterface>{
	var isUnique = typeof typeTags === 'string';
	var l = nodes.length - (isUnique?1:2);
	for(l; l >= 0; l -= 1) {
		var leftNode = nodes[l];
		if (!isUnique) {
			var rightNode = nodes[l + 1];
			var left = typeTags.indexOf(leftNode.type);
			var right = typeTags.lastIndexOf(rightNode.tags[0]);
			if (left > -1 && right > -1 && left <= right && ((!typeFunction) || typeFunction(leftNode,rightNode,l,nodes))) {
				leftNode.type = typeId;
				leftNode.index[1] = rightNode.index[1];
				leftNode.tags = leftNode.tags.concat(rightNode.tags);
				leftNode.tokens = leftNode.tokens.concat(rightNode.tokens);
				nodes.splice(l + 1, 1);
			}
		}
		else if (typeTags === leftNode.type) leftNode.type = typeId;
	}
	return nodes;
};