export interface RelationshipInterface {
	0:Array<string>,
	1:Array<string>,
	2:number,	
	3:number,	
	4:string,	
	5:string	
}



export const relationships:Array<RelationshipInterface> =  [

/**

	About the relationships
		The relationships here tries to be compliant with the the universal dependencies (http://universaldependencies.org/u/dep/)
		However, there are few exceptions. For example, the ATTR is not part of the UDP yet it proved very useful for my purposes
		Other differences are due to chunking, which the UDP doesn't take in consideration in it's current form, although it's
		proposed it have it.

	Examples?
		Each relationship has a commented number beside it which refers to the example
		that can be run via 
			node test/one (n)
		where (n) is one of the commented numbers

	Table:
		0- Left: the left node type
		0- Right: the right node type
		1- Tokens: conditional token (used with verbs, pass the infinitive form like: "be")
		2- max distance (Machine learned): conditional distance between the two nodes
		3- delay (Machine learned): delay detection for this relationship
			-1 : hungry
			0 : regular
			1 2 3 .. : delayed
			8<: canceled
		4- direction:
			-> left embedded in right
			<- right embedded in left
		5- new label:
			The label of this relationship
**/


/**
 * 
 *  (A) CORE ARGUMENTS
 *  	(1) Nominal Arguments
 *  		1. NSUBJ 		Nominal Subject 		http://universaldependencies.org/u/dep/nsubj.html
 *  		2. DOBJ			Direct Object 			http://universaldependencies.org/u/dep/obj.html
 *  		3. IOBJ 		Indirect Object 		http://universaldependencies.org/u/dep/iobj.html
 *    		4. NSUBJPASS 	Nominal Subject (Passive)
 *    		5. ATTR
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["NP",	"VP"], 		["",""], 			-1, 			0,			"->",		"NSUBJ"	],
	[	["NP",	"VB"], 		["",""], 			-1, 			0,			"->",		"NSUBJ"	],
	[	["WDT",	"VP"], 		["",""], 			-1, 			0,			"->",		"NSUBJ"	],
	[	["WDT",	"VB"], 		["",""], 			-1, 			0,			"->",		"NSUBJ"	],
	[	["WP",	"VP"], 		["",""], 			-1, 			0,			"->",		"NSUBJ"	],
	[	["WP",	"VB"], 		["",""], 			-1, 			0,			"->",		"NSUBJ"	],
	[	["NP",	"VBN"],		["",""],			2,				0,			"->",		"NSUBJPASS"],
	[	["WP",	"VBN"], 	["",""], 			-1, 			1,			"->",		"DOBJ"	],
	[	["VP",	"NP"], 		["",""], 			-1, 			0,			"<-",		"DOBJ"	],
	[	["VB",	"NP"], 		["",""], 			-1, 			0,			"<-",		"DOBJ"	],
	[	["WDT",	"VP"], 		["",""], 			-1, 			1,			"->",		"DOBJ"	],
	[	["WDT",	"VB"], 		["",""], 			-1, 			1,			"->",		"DOBJ"	],
	[	["WDT",	"VBN"], 	["",""], 			-1, 			1,			"->",		"DOBJ"	],
	[	["WP",	"VP"], 		["",""], 			-1, 			1,			"->",		"DOBJ"	],
	[	["WP",	"VB"], 		["",""], 			-1, 			1,			"->",		"DOBJ"	],
	[	["VP",	"NP"], 		["be",""], 			-1, 			0,			"<-",		"ATTR"],
	[	["VB",	"NP"], 		["be",""], 			-1, 			0,			"<-",		"ATTR"],
	[	["VBN",	"NP"], 		["be",""], 			-1, 			0,			"<-",		"ATTR"],
	// IDOBJs will be marked in repairs when we detect more than 1 object 					


/**
 * 	(A) CORE ARGUEMNTS
 *  	(2) Clausal Arguments
 *  		1. CCOMP	Clausal complement 			http://universaldependencies.org/u/dep/ccomp.html
 *  		2. XCOMP 	Open Clausal complement 	http://universaldependencies.org/u/dep/xcomp.html
 * 
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["VP",	"VP"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	[	["VP",	"VB"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	[	["VB",	"VP"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	[	["VB",	"VB"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	[	["VP",	"VBN"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	[	["VB",	"VBN"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	[	["VBN",	"VB"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	[	["VBN",	"VP"],		["",""],			-1,				5,			"<-",		"CCOMP"],
	// XCOMP is a repair from CCOMP 														

/**
 * 	(B) NON-CORE Dependants
 * 		(1) Nominals
 * 			1. OBL 			Oblique Nominal 		http://universaldependencies.org/u/dep/obl.html
 * 			2. VOCATIVE		Vocative 				http://universaldependencies.org/u/dep/vocative.html ?? 21 22 23 24
 * 			3. EXPL 		Expletive				http://universaldependencies.org/u/dep/expl.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["EX",	"VP"],		["",""],			2,				0,			"->",		"EXPL"],
	[	["EX",	"VB"],		["",""],			2,				0,			"->",		"EXPL"],
	[	["EX",	"VBN"],		["",""],			2,				0,			"->",		"EXPL"],
	[	["VP",	"EX"],		["",""],			-1,				0,			"<-",		"EXPL"],
	[	["VB",	"EX"],		["",""],			-1,				0,			"<-",		"EXPL"],
	[	["VBN",	"EX"],		["",""],			-1,				0,			"<-",		"EXPL"],
	// OBL is a repair from DOBJ when it has a CASE 										


/**
 * 	(B) NON-CORE Dependants
 * 		(2) Clauses
 * 			1. ADVCL	Adverbial Clause Modifier 		http://universaldependencies.org/u/dep/advcl.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	// ADVCL is a repair from CCOMP 														



/**
 * 	(B) NON-CORE Dependants
 * 		(3) Modifiers
 * 			1. ADVMOD 		Adverbal Modifier 		http://universaldependencies.org/u/dep/advmod.html
 * 			2. DISCOURSE	Discourse Element		http://universaldependencies.org/u/dep/discourse.html
 * 			3. VPRT			Verbal Particle			*
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["VP",	"JJR"],		["",""],			-1,				0,			"<-",		"ADVMOD"],
	[	["VP",	"ADV"],		["",""],			-1,				0,			"<-",		"ADVMOD"],
	[	["VB",	"JJR"],		["",""],			-1,				0,			"<-",		"ADVMOD"],
	[	["VB",	"ADV"],		["",""],			-1,				0,			"<-",		"ADVMOD"],
	[	["VBN",	"JJR"],		["",""],			-1,				0,			"<-",		"ADVMOD"],
	[	["VBN",	"ADV"],		["",""],			-1,				0,			"<-",		"ADVMOD"],
	[	["JJR",	"VP"],		["",""],			3,				0,			"->",		"ADVMOD"],
	[	["ADV",	"VP"],		["",""],			3,				0,			"->",		"ADVMOD"],
	[	["JJR",	"VB"],		["",""],			3,				0,			"->",		"ADVMOD"],
	[	["ADV",	"VB"],		["",""],			3,				0,			"->",		"ADVMOD"],
	[	["JJR",	"VBN"],		["",""],			3,				0,			"->",		"ADVMOD"],
	[	["ADV",	"VBN"],		["",""],			3,				0,			"->",		"ADVMOD"],
	[	["ADV", "NP"],		["",""],			3,				0,			"->",		"ADVMOD"],
	[	["JJR", "PP"],		["",""],			-1,				1,			"<-",		"ADVMOD"],
	[	["VB",	"PP"],		["",""],			-1,				1,			"<-",		"ADVMOD"],
	[	["VP",	"PP"],		["",""],			-1,				1,			"<-",		"ADVMOD"],
	[	["VBN",	"PP"],		["",""],			-1,				1,			"<-",		"ADVMOD"],
	[	["VP",	"EM"],		["",""],			-1,				0,			"<-",		"DISCOURSE"],
	[	["VB",	"EM"],		["",""],			-1,				0,			"<-",		"DISCOURSE"],
	[	["VBN",	"EM"],		["",""],			-1,				0,			"<-",		"DISCOURSE"],
	[	["EM",	"VP"],		["",""],			-1,				0,			"->",		"DISCOURSE"],
	[	["EM",	"VB"],		["",""],			-1,				0,			"->",		"DISCOURSE"],
	[	["EM",	"VBN"],		["",""],			-1,				0,			"->",		"DISCOURSE"],
	[	["NP",	"EM"],		["",""],			-1,				0,			"<-",		"DISCOURSE"],
	[	["EM",	"NP"],		["",""],			-1,				0,			"->",		"DISCOURSE"],
	[	["VP",	"PRT"],		["",""],			5,				-1,			"<-",		"VPRT"],
	[	["VB",	"PRT"],		["",""],			5,				-1,			"<-",		"VPRT"],
	[	["VBN",	"PRT"],		["",""],			5,				-1,			"<-",		"VPRT"],
	[	["PRT",	"VP"],		["",""],			-1,				0,			"->",		"VPRT"],
	[	["PRT",	"VB"],		["",""],			-1,				0,			"->",		"VPRT"],
	[	["PRT",	"VBN"],		["",""],			-1,				0,			"->",		"VPRT"],
	[	["NP",	"PRT"],		["",""],			5,				-1,			"<-",		"VPRT"],
	[	["PRT",	"NP"],		["",""],			-1,				0,			"->",		"VPRT"],


/**
 * 	(B) NON-CORE Dependants
 * 		(4) Function words
 * 			1. AUX 			Auxiliary 				http://universaldependencies.org/u/dep/aux_.html
 * 			2. AUXPASS
 * 			3. COP 			Copula					http://universaldependencies.org/u/dep/cop.html
 * 			4. COMPMARK 	Complement Marker 		http://universaldependencies.org/u/dep/mark.html
 * 			5. ADVMARK		Adverbal Marker 		http://universaldependencies.org/u/dep/mark.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["MD",	"VP"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["MD",	"VB"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["MD",	"VBN"], 	["",""], 			-1, 			0,			"->",		"AUX"],
	[	["TO",	"VB"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["TO",	"VP"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["TO",	"VBN"], 	["",""], 			-1, 			0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["be",""], 			0, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["be",""], 			0, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["be",""], 			0, 				0,			"->",		"AUX"],
	[	["VBN",	"VP"], 		["be",""], 			0, 				0,			"->",		"AUX"],
	[	["VBN",	"VB"], 		["be",""], 			0, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["be",""], 			0, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["can",""], 		0, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["can",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["can",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VP"], 		["can",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VB"], 		["can",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["can",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["do",""], 			0, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["do",""], 			0, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["do",""], 			0, 				0,			"->",		"AUX"],
	[	["VBN",	"VP"], 		["do",""], 			0, 				0,			"->",		"AUX"],
	[	["VBN",	"VB"], 		["do",""], 			0, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["do",""], 			0, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["have",""], 		0, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["have",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["have",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VP"], 		["have",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VB"], 		["have",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["have",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["may",""], 		0, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["may",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["may",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VP"], 		["may",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VB"], 		["may",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["may",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["will",""], 		0, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["will",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["will",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VP"], 		["will",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VB"], 		["will",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["will",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["shall",""], 		0, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["shall",""], 		0, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["shall",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VP"], 		["shall",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VB"], 		["shall",""], 		0, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["shall",""], 		0, 				0,			"->",		"AUX"],
	// Interrogatory auxiliaries
	[	["MD",	"VP"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["MD",	"VB"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["MD",	"VBN"], 	["",""], 			-1, 			0,			"->",		"AUX"],
	[	["TO",	"VB"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["TO",	"VP"], 		["",""], 			-1, 			0,			"->",		"AUX"],
	[	["TO",	"VBN"], 	["",""], 			-1, 			0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["be",""], 			1, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["be",""], 			1, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["be",""], 			1, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["be",""], 			1, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["can",""], 		1, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["can",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["can",""], 		1, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["can",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["do",""], 			1, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["do",""], 			1, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["do",""], 			1, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["do",""], 			1, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["have",""], 		1, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["have",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["have",""], 		1, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["have",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["may",""], 		1, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["may",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["may",""], 		1, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["may",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["will",""], 		1, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["will",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["will",""], 		1, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["will",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VP"], 		["shall",""], 		1, 				0,			"->",		"AUX"],
	[	["VB",	"VP"], 		["shall",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VB"], 		["shall",""], 		1, 				0,			"->",		"AUX"],
	[	["VBN",	"VBN"], 	["shall",""], 		1, 				0,			"->",		"AUX"],
	[	["VP",	"VBN"], 	["be",""], 			1, 				0,			"->",		"AUXPASS"],
	[	["VP",	"VBN"], 	["can",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VP",	"VBN"], 	["do",""], 			1, 				0,			"->",		"AUXPASS"],
	[	["VP",	"VBN"], 	["have",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VP",	"VBN"], 	["may",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VP",	"VBN"], 	["will",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VP",	"VBN"], 	["shall",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VB",	"VBN"], 	["be",""], 			1, 				0,			"->",		"AUXPASS"],
	[	["VB",	"VBN"], 	["can",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VB",	"VBN"], 	["do",""], 			1, 				0,			"->",		"AUXPASS"],
	[	["VB",	"VBN"], 	["have",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VB",	"VBN"], 	["may",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VB",	"VBN"], 	["will",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["VB",	"VBN"], 	["shall",""], 		1, 				0,			"->",		"AUXPASS"],
	[	["PP",	"VB"], 		["that",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["because",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["by",	""], 		-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["despite",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["although",""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["if",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["of",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["though",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["unless",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["whereas",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["whether",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["for",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["that",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["because",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["by",	""], 		-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["despite",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["although",""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["if",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["of",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["though",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["unless",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["whereas",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["whether",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VP"], 		["for",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["that",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["because",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["by",	""], 		-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["despite",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["although",""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["if",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["of",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["though",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["unless",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["whereas",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["whether",	""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VBN"], 	["for",		""], 	-1, 			1,			"->",		"COMPMARK"],
	[	["PP",	"VB"], 		["",""], 			4, 				1,			"->",		"ADVMARK"],
	[	["PP",	"VP"], 		["",""], 			4, 				1,			"->",		"ADVMARK"],
	[	["PP",	"VBN"], 	["",""], 			4, 				1,			"->",		"ADVMARK"],
	[	["ADV",	"VB"], 		["",""], 			4, 				1,			"->",		"ADVMARK"],
	[	["ADV",	"VP"], 		["",""], 			4, 				1,			"->",		"ADVMARK"],
	[	["ADV",	"VBN"], 	["",""], 			4, 				1,			"->",		"ADVMARK"],
	[	["VP","ADJ"],		["be",""],			4,				0,			"->",		"COP"],
	[	["VB","ADJ"],		["be",""],			4,				0,			"->",		"COP"],
	[	["VBN","ADJ"],		["be",""],			4,				0,			"->",		"COP"],


/**
 *
 * 	(C) Nominal Dependants
 * 		(1) Nominals
 *  		1. NMOD 		Nominal Modifier 	http://universaldependencies.org/u/dep/nmod.html
 *  		2. NUMMOD 		Numeric Modifier 	http://universaldependencies.org/u/dep/nummod.html
 * 
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["ADJ",	"CD"], 		["",""], 			-1, 			0,			"<-",		"NUMMOD"],
	[	["ADJP","CD"], 		["",""], 			-1, 			0,			"<-",		"NUMMOD"],
	[	["VP",	"CD"], 		["",""], 			-1, 			0,			"<-",		"NUMMOD"],
	[	["VBN",	"CD"], 		["",""], 			-1, 			0,			"<-",		"NUMMOD"],
	[	["VB",	"CD"], 		["",""], 			-1, 			0,			"<-",		"NUMMOD"],
	[	["CD",	"VP"], 		["",""], 			0, 				-1,			"->",		"NUMMOD"],
	[	["CD",	"VB"], 		["",""], 			0, 				-1,			"->",		"NUMMOD"],
	[	["CD",	"VBN"], 	["",""], 			0, 				-1,			"->",		"NUMMOD"],
	[	["CD",	"NP"], 		["",""], 			0, 				-1,			"->",		"NUMMOD"],
	[	["NP",	"CD"], 		["",""], 			-1, 			0,			"<-",		"NUMMOD"],
	[	["ADV",	"NP"],		["",""],			-1,				0,			"<-",		"NMOD"	],
	[	["VB",	"TO"],		["",""],			-1,				0,			"<-",		"NMOD"	],
	[	["VBN",	"TO"],		["",""],			-1,				0,			"<-",		"NMOD"	],
	[	["VP",	"TO"],		["",""],			-1,				0,			"<-",		"NMOD"	],
	[	["NP",	"VP"], 		["",""], 			4, 				4,			"->",		"NMOD"	],
	[	["NP",	"VB"], 		["",""], 			4, 				4,			"->",		"NMOD"	],
	[	["NP",	"VBN"], 	["",""], 			4, 				4,			"->",		"NMOD"	],
	[	["VBN",	"NP"],		["",""],			-1,				0,			"<-",		"NMOD"	],
	// NMOD is also repaired from NPs who have "of" as case dependency.

/**
 *
 * 	(C) Nominal Dependants
 * 		(2) Clauses
 *  		1. ACL
 * 
**/
	[	["NP",	"PP"], 		["",""], 			4, 				4,			"<-",		"ACL"],


/**
 *
 * 	(C) Nominal Dependants
 * 		(2) Modifiers
 *  		1. AMOD 	Adjectival Modifier 	http://universaldependencies.org/u/dep/amod.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["VP",	"ADJ"], 	["",""], 			-1, 			0,			"<-",		"AMOD"],
	[	["VB",	"ADJ"], 	["",""], 			-1, 			0,			"<-",		"AMOD"],
	[	["VBN",	"ADJ"], 	["",""], 			-1, 			0,			"<-",		"AMOD"],
	[	["VP",	"ADJP"], 	["",""], 			-1, 			0,			"<-",		"AMOD"],
	[	["VB",	"ADJP"], 	["",""], 			-1, 			0,			"<-",		"AMOD"],
	[	["VBN",	"ADJP"], 	["",""], 			-1, 			0,			"<-",		"AMOD"],
	[	["ADJ",	"VP"], 		["",""], 			-1, 			9,			"->",		"AMOD"],
	[	["ADJ",	"VB"], 		["",""], 			-1, 			9,			"->",		"AMOD"],
	[	["ADJ",	"VBN"], 	["",""], 			-1, 			9,			"->",		"AMOD"],
	[	["ADJP","VP"], 		["",""], 			-1, 			9,			"->",		"AMOD"],
	[	["ADJP","VB"], 		["",""], 			-1, 			9,			"->",		"AMOD"],
	[	["ADJP","VBN"], 	["",""], 			-1, 			9,			"->",		"AMOD"],


/**
 *
 * 	(C) Nominal Dependants
 * 		(2) Function words
 *  		1. DET
 *  		2. CASE
 *
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["WDT",	"NP"], 		["",""], 			-1, 			0,			"->",		"DET"],
	[	["WP",	"NP"], 		["",""], 			-1, 			0,			"->",		"DET"],
	[	["TO",	"NP"],		["",""],			-1,				0,			"->",		"CASE"],
	[	["PP",	"NP"], 		["",""], 			-1, 			0,			"->",		"CASE"],

/**
 *
 * 
 * 	(D) OTHER
 * 		1. PUNCT
 * 		2. CC
 * 		3. INTERJ
 * 		4. DEP
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 
	[	["",	"PUNCT"], 	["",""],	 		-1, 			3,			"<-",		"PUNCT"],
	[	["PUNCT",""], 		["",""],	 		-1, 			4,			"->",		"PUNCT"],
	[	["CC",	""], 		["",""],	 		-1, 			-1,			"->",		"CC"],
	[	["",	"CC"], 		["",""],	 		-1, 			-1,			"<-",		"CC"],
	[	["",	"UH"],		["",""],			-1,				-1,			"<-",		"INTERJ"],
	[	["UH",	""],		["",""],			-1,				-1,			"->",		"INTERJ"],
	// DEP is a repair for all unknown dependencies after ROOT identification (TODO)
];