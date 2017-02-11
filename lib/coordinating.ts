import {NodeInterface} from "./index";

const coordinators = ["CC",",",":","\"",")","("];

export interface CoordinationParseResult {
	raw:Array<NodeInterface>,
	subSentences:Array<Array<NodeInterface>>,
}

export const split = function(nodes:Array<NodeInterface>):CoordinationParseResult{
	let subSentences:Array<Array<NodeInterface>> = [];
	let current = 0;
	for (var i = 0; i < nodes.length; i++) {
		let node = nodes[i];
		if(~coordinators.indexOf(node.tags[0])) {
			incCurrent();
			subSentences[current].push(node);
			incCurrent();
		}
		else {
			ensureArr();
			subSentences[current].push(node);
		}
	}
	return {subSentences,raw:nodes}

	function incCurrent(){
		current++;
		ensureArr();
	}
	function ensureArr(){
		if(!Array.isArray(subSentences[current])) subSentences[current] = [];		
	}
}


export const join = function (parseResult:CoordinationParseResult):Array<NodeInterface>{

	for (var i = 0; i < parseResult.subSentences.length; i++) {

		let sm2 = parseResult.subSentences[i-2];
		let sm1 = parseResult.subSentences[i-1];
		let s0 = parseResult.subSentences[i];
		let sp1 = parseResult.subSentences[i+1];
		let sp2 = parseResult.subSentences[i+2];


		if(!((sp2&&sp1)||(sp2&&s0)||(s0&&sp1))) continue;
		
		if(s0 && sp1 && sp2) {
			if((sp1[0].tags[0] === ",") && (sp2[0].tags[0] === "VBG")) {
				console.log("Clausal but wait");
			}
			if(s0[0].tags[0] === "VBG" && sp1[0].tags[0] === "," && (sp2[0].type === "VP" || sp2[0].type === "VB" || sp2[0].type === "VBN")) {
				console.log("Clausal do it");
				parseResult.subSentences.splice(i,2);
				if((sm1 && sm2) && sm2[0].type === "NP" && sm1[0].type === "PUNCT") {
					parseResult.subSentences.splice(i-2,2);
				}
			}
		}

		if(s0 && sp1 && sm1) {
			if(s0[0].tags[0] === "," && ~["VP","VB","VBN"].indexOf(sp1[0].type) && sm1[0].left.some(x=>x.label === "ADVMARK" || x.label === "COMPMARK")) {
				console.log("ADVCL using something like while");
				parseResult.subSentences.splice(i-1,1);
				parseResult.subSentences.splice(i-1,1);
			}

			if(s0[0].tags[0] === "," && ~["VP","VB","VBN"].indexOf(sp1[0].type) && (sm1[0].left.length === 0 && sm1[0].right.length === 0 && sm1[0].tags.length === 1 && ~["WRB","WP","UH"].indexOf(sm1[0].tags[0]))) {
				console.log("UGH!");
				parseResult.subSentences.splice(i-1,1);
				parseResult.subSentences.splice(i-1,1);
			}
		}

	}



	console.log(JSON.stringify(parseResult.subSentences.map(x=>x[0].tokens)));
	console.log(JSON.stringify(parseResult.subSentences));
	return parseResult.subSentences[0];
}




/*
	rules should be based on:
		- Left Root Type
		- Right Root Type
		- coordinator tag
		- length
		- first-tag
		- leftLeftTypes
		- leftRightTypes
		- rightLeftTypes
		- rightRightTypes
	================================
	- Left Root Type			:			VP VB VBN
	- Right Root Type			:			VP VB VBN
	- coordinator tag			:			,
	- leftLeftTypes				:			ADVMARK ADVMARK		
		DIRECTION: 	<-
		C-Label:	PUNCT
		S-Label:	ADVCL
	--------------------------------------------------------------------------
	- coordinator tag			: 		,
	- left tag					:		WRB WP UH
	- left length				:		1
		DIRECTION: ->
		C-Label:  PUNCT
		S-Label:  INTERJ
	---------------------------------------------------------------------------
	











*/