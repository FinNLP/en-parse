const cases = require('./cases.json');
const parser = require("../lib/index.js");
const pos = require("en-pos");
const fs = require('fs');

const results = [];
cases.forEach((sample)=>results.push(parser(pos(sample).tags,sample)));
fs.writeFileSync("test/results.json",JSON.stringify(results,null,4));
