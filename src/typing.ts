import {NodeInterface} from "./index";
import {single,multiple} from "./rules/types";

export default function(nodes:NodeInterface[]):NodeInterface[]{
	// single
	nodes = singleTyping(nodes);
	// multiple
	nodes = multipleTyping(nodes);
	return nodes;
};

function singleTyping (nodes:NodeInterface[]):NodeInterface[]{
	for (var index = 0; index < nodes.length; index++) {
		let newType = single[nodes[index].type];
		if(newType) nodes[index].type = newType;
	}
	return nodes;
}

function multipleTyping(nodes:NodeInterface[]):NodeInterface[]{
	let nodesTypes = nodes.map(x=>"#"+x.type).join("-") + "-";
	console.log(nodesTypes);
	for (var index = 0; index < multiple.length; index++) {
		var rule = multiple[index];
		let result:RegExpExecArray|null;
		while(result = rule.regex.exec(nodesTypes)) {
			let match = result[0];
			let startingIndex = result.index;
			let mostLeftIndex = getMostLeftIndex(nodesTypes,startingIndex);
			let mostRightIndex = getMostRightIndex(mostLeftIndex,match);
			let count = mostRightIndex - mostLeftIndex + 1;
			console.log(match,mostLeftIndex,mostRightIndex);
			nodes[mostLeftIndex].type = rule.type;
			const dyingNodes:{index:number,node:NodeInterface}[] = [];
			for (let index = 0; index < nodes.length; index++) {
				let node = nodes[index];
				if(index <= mostRightIndex && index > mostLeftIndex) dyingNodes.push({index,node});
			}
			for (var index = 0; index < dyingNodes.length; index++) {
				var dyingNode = dyingNodes[index];
				nodes[mostLeftIndex].index[1] = dyingNode.node.index[1];
				nodes[mostLeftIndex].tags = nodes[mostLeftIndex].tags.concat(dyingNode.node.tags);
				nodes[mostLeftIndex].tokens = nodes[mostLeftIndex].tokens.concat(dyingNode.node.tokens);
			}
			if(dyingNodes.length) nodes.splice(dyingNodes[0].index,dyingNodes.length);
			nodesTypes = nodes.map(x=>"#"+x.type).join("-") + "-";
		}
	}
	return nodes;
}

function getMostLeftIndex(original:string,startingIndex:number){
	return original.substr(0,startingIndex).split("-").length - 1;
}


function getMostRightIndex(mostLeftIndex:number,match:string){
	return mostLeftIndex + match.split("-").length - 2;
}