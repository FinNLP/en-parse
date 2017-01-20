module.exports=[

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
		2- max distance: conditional distance between the two nodes
		3- delay: delay detection for this relationship
			-1 : hungry
			0 : regular
			1 2 3 .. : delayed
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
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["NP",	"VP"], 		[null,null], 		null, 			0,			"->",		"NSUBJ"	],				// 2 3 4
	[	["NP",	"VB"], 		[null,null], 		null, 			0,			"->",		"NSUBJ"	],				// 7
	[	["WDT",	"VP"], 		[null,null], 		null, 			0,			"->",		"NSUBJ"	],				// 8
	[	["WDT",	"VB"], 		[null,null], 		null, 			0,			"->",		"NSUBJ"	],				// 10
	[	["WP",	"VP"], 		[null,null], 		null, 			0,			"->",		"NSUBJ"	],				// 9
	[	["WP",	"VB"], 		[null,null], 		null, 			0,			"->",		"NSUBJ"	],				// 11
	[	["NP",	"VBN"],		[null,null],		null,			0,			"->",		"NSUBJPASS"],			// 28
	[	["WP",	"VBN"], 	[null,null], 		null, 			0,			"->",		"DOBJ"	],				//
	[	["VP",	"NP"], 		[null,null], 		null, 			0,			"<-",		"DOBJ"	],				// 2 3
	[	["VB",	"NP"], 		[null,null], 		null, 			0,			"<-",		"DOBJ"	],				// 6 7
	[	["WDT",	"VP"], 		[null,null], 		null, 			0,			"->",		"DOBJ"	,"test"],		// 
	[	["WDT",	"VB"], 		[null,null], 		null, 			0,			"->",		"DOBJ"	],				// 
	[	["WP",	"VP"], 		[null,null], 		null, 			0,			"->",		"DOBJ"	],				// 
	[	["WP",	"VB"], 		[null,null], 		null, 			0,			"->",		"DOBJ"	],				// 
	[	["VP",	"NP"], 		["be",null], 		null, 			-1,			"<-",		"ATTR"],				// 4
	[	["VB",	"NP"], 		["be",null], 		null, 			-1,			"<-",		"ATTR"],				// 5
	[	["VBN",	"NP"], 		["be",null], 		null, 			-1,			"<-",		"ATTR"],				// 5

	// IDOBJs will be marked in repairs when we detect more than 1 object 										// 3


/**
 * 	(A) CORE ARGUEMNTS
 *  	(2) Clausal Arguments
 *  		1. CSUBJ 	Clausal Subject 			http://universaldependencies.org/u/dep/csubj.html
 *  		2. CCOMP	Clausal complement 			http://universaldependencies.org/u/dep/ccomp.html
 *  		3. XCOMP 	Open Clausal complement 	http://universaldependencies.org/u/dep/xcomp.html
 * 
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["VP",	"VP"],		[null,null],		null,			0,			"<-",		"CCOMP"],				// 14
	[	["VP",	"VB"],		[null,null],		null,			0,			"<-",		"CCOMP"],				// 15 16 19
	[	["VB",	"VP"],		[null,null],		null,			0,			"<-",		"CCOMP"],				// 
	[	["VP",	"VBN"],		[null,null],		null,			0,			"<-",		"CCOMP"],				//
	[	["VBN",	"VB"],		[null,null],		null,			0,			"<-",		"CCOMP"],				//
	[	["VBN",	"VP"],		[null,null],		null,			0,			"<-",		"CCOMP"],				//
	// CSUBJ is a repair from AMOD.																				// 13
	// XCOMP is a repair from CCOMP 																				// 17 14 18

/**
 * 	(B) NON-CORE Dependants
 * 		(1) Nominals
 * 			1. OBL 			Oblique Nominal 		http://universaldependencies.org/u/dep/obl.html
 * 			2. VOCATIVE		Vocative 				http://universaldependencies.org/u/dep/vocative.html ?? 21 22 23 24
 * 			3. EXPL 		Expletive				http://universaldependencies.org/u/dep/expl.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["EX",	"VP"],		[null,null],		null,			0,			"->",		"EXPL"],				// 25
	[	["EX",	"VB"],		[null,null],		null,			0,			"->",		"EXPL"],				// 
	[	["EX",	"VBN"],		[null,null],		null,			0,			"->",		"EXPL"],				// 
	// OBL is a repair from DOBJ when it has a CASE 															// 20 27


/**
 * 	(B) NON-CORE Dependants
 * 		(2) Clauses
 * 			1. ADVCL	Adverbial Clause Modifier 		http://universaldependencies.org/u/dep/advcl.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	// ADVCL is a repair from CCOMP 																			// 26 27 28 29



/**
 * 	(B) NON-CORE Dependants
 * 		(3) Modifiers
 * 			1. ADVMOD 		Adverbal Modifier 		http://universaldependencies.org/u/dep/advmod.html
 * 			2. DISCOURSE	Discourse Element		http://universaldependencies.org/u/dep/discourse.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["VP",	"JJR"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["VP",	"ADV"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["VB",	"JJR"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["VB",	"ADV"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 31
	[	["VBN",	"JJR"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["VBN",	"ADV"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["JJR",	"VP"],		[null,null],		null,			0,			"->",		"ADVMOD"],				// 
	[	["ADV",	"VP"],		[null,null],		null,			0,			"->",		"ADVMOD"],				// 
	[	["JJR",	"VB"],		[null,null],		null,			0,			"->",		"ADVMOD"],				// 
	[	["ADV",	"VB"],		[null,null],		null,			0,			"->",		"ADVMOD"],				// 
	[	["JJR",	"VBN"],		[null,null],		null,			0,			"->",		"ADVMOD"],				// 
	[	["ADV",	"VBN"],		[null,null],		null,			0,			"->",		"ADVMOD"],				// 
	[	["ADV", "NP"],		[null,null],		null,			0,			"->",		"ADVMOD"],				// 30
	[	["JJR", "PP"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 40
	[	["VB",	"PP"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["VP",	"PP"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["VBN",	"PP"],		[null,null],		null,			0,			"<-",		"ADVMOD"],				// 
	[	["VP",	"EM"],		[null,null],		null,			0,			"<-",		"DISCOURSE"],			// 32
	[	["VB",	"EM"],		[null,null],		null,			0,			"<-",		"DISCOURSE"],			// 
	[	["VBN",	"EM"],		[null,null],		null,			0,			"<-",		"DISCOURSE"],			// 
	[	["EM",	"VP"],		[null,null],		null,			0,			"->",		"DISCOURSE"],			// 
	[	["EM",	"VB"],		[null,null],		null,			0,			"->",		"DISCOURSE"],			// 
	[	["EM",	"VBN"],		[null,null],		null,			0,			"->",		"DISCOURSE"],			// 
	[	["NP",	"EM"],		[null,null],		null,			2,			"<-",		"DISCOURSE"],			// 
	[	["EM",	"NP"],		[null,null],		null,			2,			"->",		"DISCOURSE"],			// 

/**
 * 	(B) NON-CORE Dependants
 * 		(4) Function words
 * 			1. AUX 			Auxiliary 				http://universaldependencies.org/u/dep/aux_.html
 * 			2. AUXPASS
 * 			3. COP 			Copula					http://universaldependencies.org/u/dep/cop.html
 * 			4. COMPMARK 	Complement Marker 		http://universaldependencies.org/u/dep/mark.html
 * 			5. ADVMARK		Adverbal Marker 		http://universaldependencies.org/u/dep/mark.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["MD",	"VP"], 		[null,null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["MD",	"VB"], 		[null,null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["TO",	"VB"], 		[null,null], 		0, 				-1,			"->",		"AUX"],				// 10 11
	[	["VP",	"VP"], 		["be",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VB",	"VP"], 		["be",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VB"], 		["be",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VBN",	"VBN"], 	["be",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VP"], 		["can",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VB",	"VP"], 		["can",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VB"], 		["can",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VBN",	"VBN"], 	["can",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VP"], 		["do",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VB",	"VP"], 		["do",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VB"], 		["do",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VBN",	"VBN"], 	["do",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VP"], 		["have",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VB",	"VP"], 		["have",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VB"], 		["have",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VBN",	"VBN"], 	["have",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VP"], 		["may",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VB",	"VP"], 		["may",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VB"], 		["may",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VBN",	"VBN"], 	["may",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VP"], 		["will",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VB",	"VP"], 		["will",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VB"], 		["will",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VBN",	"VBN"], 	["will",null], 		0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VP"], 		["shall",null], 	0, 				-1,			"->",		"AUX"],				// 
	[	["VB",	"VP"], 		["shall",null], 	0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VB"], 		["shall",null], 	0, 				-1,			"->",		"AUX"],				// 
	[	["VBN",	"VBN"], 	["shall",null], 	0, 				-1,			"->",		"AUX"],				// 
	[	["VP",	"VBN"], 	["be",null], 		1, 				-1,			"->",		"AUXPASS"],			// 
	[	["VP",	"VBN"], 	["can",null], 		1, 				-1,			"->",		"AUXPASS"],			// 
	[	["VP",	"VBN"], 	["do",null], 		1, 				-1,			"->",		"AUXPASS"],			// 
	[	["VP",	"VBN"], 	["have",null], 		1, 				-1,			"->",		"AUXPASS"],			// 
	[	["VP",	"VBN"], 	["may",null], 		1, 				-1,			"->",		"AUXPASS"],			// 
	[	["VP",	"VBN"], 	["will",null], 		1, 				-1,			"->",		"AUXPASS"],			// 
	[	["VP",	"VBN"], 	["shall",null], 	1, 				-1,			"->",		"AUXPASS"],			// 
	[	["PP",	"VB"], 		["that",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["because",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["despite",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["although",null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["if",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["of",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["though",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["unless",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["whereas",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["whether",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		["for",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["that",	null], 	null, 			-1,			"->",		"COMPMARK"],		// 14
	[	["PP",	"VP"], 		["because",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["despite",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["although",null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["if",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["of",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["though",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["unless",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["whereas",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["whether",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VP"], 		["for",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["that",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["because",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["despite",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["although",null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["if",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["of",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["though",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["unless",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["whereas",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["whether",	null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VBN"], 	["for",		null], 	null, 			-1,			"->",		"COMPMARK"],		//
	[	["PP",	"VB"], 		[null,null], 		null, 			0,			"->",		"ADVMARK"],			//
	[	["PP",	"VP"], 		[null,null], 		null, 			0,			"->",		"ADVMARK"],			//
	[	["PP",	"VBN"], 	[null,null], 		null, 			0,			"->",		"ADVMARK"],			//
	[	["ADV",	"VB"], 		[null,null], 		null, 			0,			"->",		"ADVMARK"],			//
	[	["ADV",	"VP"], 		[null,null], 		null, 			0,			"->",		"ADVMARK"],			//
	[	["ADV",	"VBN"], 	[null,null], 		null, 			0,			"->",		"ADVMARK"],			//
	[	["VP","ADJ"],		["be",null],		1,				-1,			"->",		"COP"],				// 13
	[	["VB","ADJ"],		["be",null],		1,				-1,			"->",		"COP"],				//
	[	["VBN","ADJ"],		["be",null],		1,				-1,			"->",		"COP"],				//


/**
 *
 * 	(C) Nominal Dependants
 * 		(1) Nominals
 *  		1. NMOD 		Nominal Modifier 	http://universaldependencies.org/u/dep/nmod.html
 *  		2. APOS ?		Not implemented (planning to implement).
 *  		3. NUMMOD 		Numeric Modifier 	http://universaldependencies.org/u/dep/nummod.html
 * 
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["ADJ",	"CD"], 		[null,null], 		null, 			0,			"<-",		"NUMMOD"],			//
	[	["ADJP","CD"], 		[null,null], 		null, 			0,			"<-",		"NUMMOD"],			//
	[	["CD",	"VP"], 		[null,null], 		null, 			0,			"->",		"NUMMOD"],			//
	[	["CD",	"VB"], 		[null,null], 		null, 			0,			"->",		"NUMMOD"],			//
	[	["CD",	"VBN"], 	[null,null], 		null, 			0,			"->",		"NUMMOD"],			//
	[	["CD",	"NP"], 		[null,null], 		null, 			0,			"->",		"NUMMOD"],			//
	[	["NP",	"CD"], 		[null,null], 		null, 			0,			"<-",		"NUMMOD"],			//
	[	["ADV",	"NP"],		[null,null],		null,			7,			"<-",		"NMOD"	],
	[	["VB",	"TO"],		[null,null],		null,			7,			"<-",		"NMOD"	],
	[	["VBN",	"TO"],		[null,null],		null,			7,			"<-",		"NMOD"	],
	[	["VP",	"TO"],		[null,null],		null,			7,			"<-",		"NMOD"	],
	// NMOD is also repaired from NPs who have "of" as case dependency.

/**
 *
 * 	(C) Nominal Dependants
 * 		(2) Clauses
 *  		1. ACL
 * 
**/
	[	["NP",	"PP"], 		[null,null], 		null, 			7,			"<-",		"ACL"],				//


/**
 *
 * 	(C) Nominal Dependants
 * 		(2) Modifiers
 *  		1. AMOD 	Adjectival Modifier 	http://universaldependencies.org/u/dep/amod.html
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["VP",	"ADJ"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["VB",	"ADJ"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["VBN",	"ADJ"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["VP",	"ADJP"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["VB",	"ADJP"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["VBN",	"ADJP"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["ADJ",	"VP"], 		[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["ADJ",	"VB"], 		[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["ADJ",	"VBN"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["ADJP","VP"], 		[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["ADJP","VB"], 		[null,null], 		null, 			0,			"<-",		"AMOD"],				//
	[	["ADJP","VBN"], 	[null,null], 		null, 			0,			"<-",		"AMOD"],				//


/**
 *
 * 	(C) Nominal Dependants
 * 		(2) Function words
 *  		1. DET
 *  		2. CASE
 *
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	["WDT",	"NP"], 		[null,null], 		null, 			0,			"->",		"DET"],					//
	[	["WP",	"NP"], 		[null,null], 		null, 			0,			"->",		"DET"],					//
	[	["TO",	"NP"],		[null,null],		1,				-1,			"->",		"CASE"],				// 
	[	["PP",	"NP"], 		[null,null], 		null, 			0,			"->",		"CASE"],				// 

/**
 *
 * 
 * 	(D) OTHER
 * 		1. PUNCT
 * 		2. CC
 * 		3. INTERJ
 * 		4. DEP
**/
//		Right	left 		Tokens				max distance	Delay 		Direction 	New Label 		 		Examples
	[	[null,	"PUNCT"], 	[null,null], 		0, 				3,			"<-",		"PUNCT"],				// 
	[	["PUNCT",null], 	[null,null], 		0, 				3,			"->",		"PUNCT"],				// 
	[	["CC",	null], 		[null,null], 		0, 				-1,			"->",		"CC"],					// 
	[	[null,	"CC"], 		[null,null], 		0, 				-1,			"<-",		"CC"],					// 
	[	["UH",	null],		[null,null],		0,				-1,			"->",		"INTERJ"],
	// DEP is a repair for all unknown dependencies after ROOT identification (TODO)
];