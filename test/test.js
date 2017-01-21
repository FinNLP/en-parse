const cases = require("./cases.js");
const visualize = require('./visualize.js');
const parser = require("../lib/index.js");
const pos = require("en-pos");


describe('One root for all sentences', function () {
	cases.forEach((sample,index)=>{
		it('',function () {
			this.test.title = sample.join(" ");
			var tags = pos(sample).tags;
			var parsed = parser(tags,sample);
			if(parsed.length>1) {
				visualize(sample,index+2,true);
				throw new Error("Sentence parsing gave two roots");
			}
		});
	});
});

const expected = require('./results.json');
var isEqual = require('lodash.isequal');

describe('Expected parse', function () {
	cases.forEach((sample,index)=>{
		it('',function () {
			this.test.title = sample.join(" ");
			var tags = pos(sample).tags;
			var parsed = parser(tags,sample);
			if(!isEqual(parsed,expected[index])) {
				visualize(sample,index+2,true);
				throw new Error(`Not as expected`);
			}
		});
	});
});