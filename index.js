const parser = require("./parser.js");
// the company's services are great
console.log(parser(["PRP","VBP","(","DT",")"])[0].right);