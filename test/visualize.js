const parser = require("../lib/index.js");
const pos = require("en-pos");
const chalk = require("chalk");

module.exports = function(tokens,index,deep){
	var tags = pos(tokens).tags;
	var parsed = parser(tags);
	console.log(chalk.black.bgWhite(" @ Sentence:",index));
	console.log(chalk.green(" | "),chalk.bgRed("LENGTH",parsed.length));
	console.log(chalk.green(" | "),chalk.green(tokens.join(" ")));
	console.log(chalk.green(" | "),chalk.green(tokens.map((x,i)=>x+"/"+i).join(" ")));
	console.log(chalk.green(" | "),chalk.green(tags.join(" ")));
	if(!deep) recursiveConsole(parsed[0],2);
	else parsed.forEach((x)=>recursiveConsole(x,2));
};

function recursiveConsole(node,i) {
	var pads = chalk.green(" | ".repeat(i));
	var type = chalk.yellow("Type: ") + node.type;
	var tags = chalk.yellow("Tags: ") + node.tags;
	var index = chalk.yellow("Indices: ") + node.index;
	var label = chalk.yellow("Label: ") + node.label;
	console.log(pads,type);
	console.log(pads,tags);
	console.log(pads,index);
	console.log(pads,label);
	console.log(pads,chalk.bgMagenta("# LEFT NODES"));
	node.left.forEach((node)=>recursiveConsole(node,i+1));
	console.log(pads,chalk.bgMagenta("# RIGHT NODES"));
	node.right.forEach((node)=>recursiveConsole(node,i+1));
}