const relationships = require("../rules/relationships.js");
const inflectors = require('en-inflectors');
const findby = require('./findby.js');

/**
 * 
 * This function takes a "left node" and a "right node"
 * and match their types against the rules list and
 * returns the label and the direction for the
 * matched rule (if any).
 * 
 * @param  {String} leftType  	Left node type
 * @param  {String} rightType 	Right node type
 * @param  {Number} iteration	Iteration
 * @return {Object}           	Object that has the label and direction keys
 * 
**/
module.exports = function (left, right, iteration) {
	var match = relationships.find((relationship)=>{
		// condition 1 : Type
		if(relationship[0][0] !== null && relationship[0][0] !== left.type) return null;
		if(relationship[0][1] !== null && relationship[0][1] !== right.type) return null;
		// Condition 2 : Delay
		if(iteration <= relationship[3]) return null;
		// Condition 3 : direction & root
		if(relationship[4] === "<-" && right.label === "ROOT") return null;
		if(relationship[4] === "->" && left.label === "ROOT") return null;
		// Condition 4 : maximum distance
		if(relationship[2] !== null && ((right.index[0] - left.index[1])-1) > relationship[2]) return null;
		// condition 5 : tokens
		if(relationship[1][0] !== null && !~left.tokens.map(x=>inflectors.present(x)).indexOf(relationship[1][0])) return null;
		if(relationship[1][1] !== null && !~right.tokens.map(x=>inflectors.present(x)).indexOf(relationship[1][1])) return null;
		// condition 6 : no two subjects
		if(relationship[5]==="NSUBJ" && relationship[4]==="->" && findby.label('NSUBJ',right.left)) return null;
		return true;
	});

	if(!match) return null;

	return {
		direction:match[4],
		label:match[5]
	};
};