global.d = [0,0,1,0,0,5,0,0,0,1,0,0,0,-1,0,0,0,0,0,0,0,1,1,0,0,-1,0,4,0,9,0,0,9,0];
global.s = [5,2,5,5,5,5,2,5,5,5,3,5,5,5,5,5,5,0,5,1,1,5,4,4,5,0,5,4,5,5,5,5,5,5];

const lib = require('./lib/index.js');
const source = require('./training-data.json');

console.log(source.reduce((a,s)=>{
	a = a + s.tokens.length;
	return a;
},0));

function modifyBatch() {
	var correct = 0;
	global.d.forEach((v,gi)=>{
		const results = [	
			test("d",gi,-1)-1,
			test("d",gi,0),
			test("d",gi,1),
			test("d",gi,2),
			test("d",gi,3),
			test("d",gi,4),
			test("d",gi,5),
			test("d",gi,6),
			test("d",gi,7),
			test("d",gi,8),
			test("d",gi,9)
		];
		correct = Math.max.apply(null,results);
		global.d[gi] = results.indexOf(correct) - 1;
	});

	global.s.forEach((v,gi)=>{
		const results = [	
			test("s",gi,0),
			test("s",gi,1),
			test("s",gi,2),
			test("s",gi,3),
			test("s",gi,4),
			test("s",gi,5),
		];
		correct = Math.max.apply(null,results);
		global.s[gi] = results.lastIndexOf(correct);
	});

	return {
		c:correct,
		d:global.d,
		s:global.s
	};
}

function test (ns,gi,v){
	global[ns][gi] = v;
	var correct = 0;
	for (var i = source.length - 1; i >= 0; i--) {
		var sentence = source[i];
		var resultingParents = lib(sentence.tags,sentence.tokens).map(x=>x.parent);
		for (var ii = resultingParents.length - 1; ii >= 0; ii--) {
			if(resultingParents[ii]===sentence.parents[ii]) correct++;
		}
	}
	var str = "	"+correct+"	"+JSON.stringify([global.d,global.s])+"	"+new Date().toLocaleString();
	console.log(str);
	appendR(str);
	return correct;
}


var pastCorrect = 0;
while (1) {

	var result = modifyBatch();
	var json = JSON.stringify(result);
	console.log(json);
	appendR(json);
	if(pastCorrect === result.c) process.exit(0);
	else pastCorrect = result.c;
}

function appendR(data){
	require("fs").writeFileSync(
		"./results.json",
		require("fs").readFileSync("./results.json")+"\n\n"+data
	);
}