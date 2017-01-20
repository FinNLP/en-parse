const cases = require("./cases.js");
const visualize = require('./visualize.js');
const parser = require("../lib/index.js");
const pos = require("en-pos");

describe('One root for all sentences', function () {
	cases.forEach((sample,index)=>{
		it('',function () {
			this.test.title = sample[0].join(" ");
			var tags = pos(sample[0]).tags;
			var parsed = parser(tags,sample[0]);
			if(parsed.length>1) {
				visualize(sample[0],index+2,true);
				throw new Error("Sentence parsing gave two roots");
			}
		});
	});
});
return;
describe('Root is correct:', function () {
	cases.forEach((sample,index)=>{
		it('',function () {
			var tags = pos(sample[0]).tags;
			var parsed = parser(tags);
			this.test.title = sample[0].join(" ") + ` (${sample[1]}===${parsed[0].index})`;
			if(parsed[0].index[0]>sample[1] || parsed[0].index[1]<sample[1]) {
				visualize(sample[0],index,true);
				throw new Error(`Expected: ${sample[1]}, Result: ${parsed[0].index}`);
			}
		});
	});
});