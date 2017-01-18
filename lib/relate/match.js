const relationships = require("../rules/relationships.js");

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
		if(relationship[0] !== left.type) return null;
		if(relationship[1] !== right.type) return null;
		// some relationships require few recursions before applying
		if(iteration <= relationship[4]) return null;
		// The root should not be a dependency of other word
		if(relationship[2] === "<-" && right.label === "ROOT") return null;
		if(relationship[2] === "->" && left.label === "ROOT") return null;
		return true;
	});

	if(!match) return null;

	return {
		direction:match[2],
		label:match[3]
	};
};