const parser = require("../lib/index.js");
const wsj = require("./wsj.js");
const chalk = require('chalk');

var tested = 0;
var correct = 0;
var wrong = 0;
var t0 = new Date().getTime();
wsj.forEach((sample)=>{
	tested = tested + 1;
	var parsed = parser(sample);
	if(parsed.length === 1) correct = correct + 1;
	else wrong = wrong + 1;
});
var time = (new Date().getTime() - t0);
var timePerSentence = Math.round((time / wsj.length)*100)/100;
var oneRoot = Math.round((correct/tested)*100*1000)/1000;
var moreThanOneRoot = Math.round((wrong/tested)*100*1000)/1000;

console.log("	",chalk.magenta("---------------------"));
console.log("	",chalk.black.bgMagenta("# Benchmark  "));
console.log("	","	",chalk.magenta("Overall time:"),time,"milliseconds");
console.log("	","	",chalk.magenta("Per sentence"),timePerSentence,"milliseconds");

console.log("	",chalk.yellow("---------------------"));
console.log("	",chalk.black.bgYellow("# Roots  "));
console.log("	","	",chalk.yellow("one root"),oneRoot,"%");
console.log("	","	",chalk.yellow("multiple roots"),moreThanOneRoot,"%");