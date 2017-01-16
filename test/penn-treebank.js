const parser = require("../lib/index.js");
const wsj = require("./wsj.js");

var tested = 0;
var correct = 0;
var wrong = 0;

wsj.forEach((sample)=>{
	tested = tested + 1;
	var parsed = parser(sample);
	if(parsed.length === 1) correct = correct + 1;
	else wrong = wrong + 1;
});

console.log(Math.round((correct/tested)*100*1000)/1000+"%");