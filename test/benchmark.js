const cases = require('./cases.js');
const parser = require("../lib/index.js");
const pos = require("en-pos");

global.b = [];

const results = {
	factory:0,
	chunking:0,
	relating:0,
	repairing:0,
	toArr:0
};


cases.forEach((sample)=>{
	var tags = pos(sample).tags;
	var parsed = parser(tags,sample);
	results.factory = results.factory + global.b[1] - global.b[0];
	results.chunking = results.chunking + global.b[2] - global.b[1];
	results.relating = results.relating + global.b[3] - global.b[2];
	results.repairing = results.repairing + global.b[4] - global.b[3];
	results.toArr = results.toArr + global.b[5] - global.b[4];
});

console.log(results);