const visualize = require("./visualize.js");
const cases = require('./cases.json');
const index = process.argv[2] || 2;
const target = cases[index-2];
visualize(target,index,true);
