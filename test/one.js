const visualize = require("./visualize.js");
const cases = require('./manual_cases.js');
const index = process.argv[2] || 0;
const target = cases[index];
visualize(target,index,true);
