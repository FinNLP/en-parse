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
module.exports = function (leftType, rightType, iteration) {
	var match = relationships.find((relationship)=>{
		// Some rules require few recursions before applying
		if (iteration < relationship[4]) return null;
		return relationship[0] === leftType && relationship[1] === rightType;
	});

	if(!match) return null;

	return {
		direction:match[2],
		label:match[3]
	};
};