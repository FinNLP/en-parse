const parser = require("../../dist/index.js").tree;
const pos = require("en-pos");
const chalk = require("chalk");




module.exports = function(tokens,index,deep){
	var tags = new pos.Tag(tokens).initial().smooth().tags;
	var parsed = parser(tags,tokens);
	console.log(JSON.stringify(parsed));
	console.log(chalk.red(" @ Sentence:",index));
	console.log(chalk.red("LENGTH",parsed.length));
	console.log(chalk.green(tokens.join(" ")));
	console.log(chalk.green(tokens.map((x,i)=>x+"/"+i).join(" ")));
	console.log(chalk.green(tags.join(" ")));
	if(!deep) recursiveConsole(parsed[0],0,tokens);
	else parsed.forEach((x)=>recursiveConsole(x,0,tokens));
};

function recursiveConsole(node,i,tokens) {
	var pads = chalk.green("	 | ".repeat(i));
	var type = chalk.yellow("Tag/Type: ") + node.tags + "/" + node.type;
	var indexes = chalk.yellow("Indexes: ") + node.index.join(":");
	var vtokens = chalk.red("	@ Node: ",getTokens(node.index,tokens));
	var label = chalk.yellow("Label: ") + node.label;
	console.log(pads,vtokens);
	console.log(pads,"	",type);
	console.log(pads,"	",indexes);
	console.log(pads,"	",label);
	if(node.left.length) console.log(pads,"	",chalk.green("# LEFT NODES"));
	node.left.forEach((node)=>recursiveConsole(node,i+1,tokens));
	if(node.right.length) console.log(pads,"	",chalk.green("# RIGHT NODES"));
	if(node.right.length) node.right.forEach((node)=>recursiveConsole(node,i+1,tokens));
}

function getTokens(indices,tokens){
	return tokens.filter((x,i)=>i>=indices[0]&&i<=indices[1]).join(" ");
}