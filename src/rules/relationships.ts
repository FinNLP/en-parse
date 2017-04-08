export interface RelationshipInterface {
	left: string[];
    right: string[];
    leftTokens: string[];
    rightTokens: string[];
    maxDistance: number;
    delay: number;
    direction: string;
    label: string;
};

export const relationships:RelationshipInterface[] = [
	/**
	 * 
	 *  (A) CORE ARGUMENTS
	 *  	(1) Nominal Arguments
	 *  		1. NSUBJ 		Nominal Subject 		http://universaldependencies.org/u/dep/nsubj.html
	 *  		2. DOBJ			Direct Object 			http://universaldependencies.org/u/dep/obj.html
	 *  		3. IOBJ 		Indirect Object 		http://universaldependencies.org/u/dep/iobj.html
	 *    		4. NSUBJPASS 	Nominal Subject (Passive)
	**/
	{
		left:["NP","WDT","WP","WP$"],
		right:["VP","VB"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"NSUBJ"
	},
	{
		left:["NP"],
		right:["VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:2,
		delay:0,
		direction:"->",
		label:"NSUBJPASS"
	},
	{
		left:["VP","VB","VBN"],
		right:["NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"DOBJ"
	},
	{
		left:["WDT","WP","WP$"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:1,
		direction:"->",
		label:"DOBJ"
	},


	/**
	 * 	(A) CORE ARGUMENTS
	 *  	(2) Clausal Arguments
	 *  		1. CCOMP	Clausal complement 			http://universaldependencies.org/u/dep/ccomp.html
	 *  		2. XCOMP 	Open Clausal complement 	http://universaldependencies.org/u/dep/xcomp.html
	 * 
	**/
	{
		left:["VP","VBN","VB"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:5,
		direction:"<-",
		label:"CCOMP"
	},
	// XCOMP is a repair from CCOMP

	/**
	 * 	(B) NON-CORE Dependants
	 * 		(1) Nominals
	 * 			1. OBL 			Oblique Nominal 		http://universaldependencies.org/u/dep/obl.html
	 * 			2. VOCATIVE		Vocative 				http://universaldependencies.org/u/dep/vocative.html ?? 21 22 23 24
	 * 			3. EXPL 		Expletive				http://universaldependencies.org/u/dep/expl.html
	**/
	{
		left:["EX"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:2,
		delay:0,
		direction:"->",
		label:"EXPL"
	},
	{
		left:["VP","VB","VBN"],
		right:["EX"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"EXPL"
	},
	// OBL is a repair from DOBJ when it has a CASE

	/**
	 * 	(B) NON-CORE Dependants
	 * 		(2) Clauses
	 * 			1. ADVCL	Adverbial Clause Modifier 		http://universaldependencies.org/u/dep/advcl.html
	**/

	// ADVCL is a repair from CCOMP



	/**
	 * 	(B) NON-CORE Dependants
	 * 		(3) Modifiers
	 * 			1. ADVMOD 		Adverbal Modifier 		http://universaldependencies.org/u/dep/advmod.html
	 * 			2. DISCOURSE	Discourse Element		http://universaldependencies.org/u/dep/discourse.html
	 * 			3. VPRT			Verbal Particle			*
	**/

	{
		left:["VP","VB","VBN"],
		right:["JJR","ADV"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"ADVMOD"
	},
	{
		left:["JJR","ADV"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:3,
		delay:0,
		direction:"->",
		label:"ADVMOD"
	},
	{
		left:["ADV"],
		right:["NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:3,
		delay:0,
		direction:"->",
		label:"ADVMOD"
	},
	{
		left:["JJR","VB","VP","VBN"],
		right:["PP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:1,
		direction:"<-",
		label:"ADVMOD"
	},
	{
		left:["VP","VB","VBN"],
		right:["EM"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"DISCOURSE"
	},
	{
		left:["EM"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"DISCOURSE"
	},
	{
		left:["EM"],
		right:["NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"DISCOURSE"
	},
	{
		left:["NP"],
		right:["EM"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"DISCOURSE"
	},
	{
		left:["VP","VB","VBN"],
		right:["PRT"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:5,
		delay:-1,
		direction:"<-",
		label:"VPRT"
	},
	{
		left:["PRT"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"VPRT"
	},
	{
		left:["NP"],
		right:["PRT"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:5,
		delay:-1,
		direction:"<-",
		label:"VPRT"
	},
	{
		left:["PRT"],
		right:["NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"VPRT"
	},
	/**
	 * 	(B) NON-CORE Dependants
	 * 		(4) Function words
	 * 			1. AUX 			Auxiliary 				http://universaldependencies.org/u/dep/aux_.html
	 * 			2. AUXPASS
	 * 			3. COP 			Copula					http://universaldependencies.org/u/dep/cop.html
	 * 			4. COMPMARK 	Complement Marker 		http://universaldependencies.org/u/dep/mark.html
	 * 			5. ADVMARK		Adverbal Marker 		http://universaldependencies.org/u/dep/mark.html
	**/
	{
		left:["MD","TO"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"AUX"
	},
	{
		left:["MD","TO"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"AUX"
	},
	{
		left:["VP","VB","VBN"],
		right:["VP","VB"],
		leftTokens:["be","can","do","have","may","will","shall","go"],
		rightTokens:[],
		maxDistance:4,
		delay:0,
		direction:"->",
		label:"AUX"
	},
	{
		left:["VBN"],
		right:["VBN"],
		leftTokens:["be","can","do","have","may","will","shall"],
		rightTokens:[],
		maxDistance:4,
		delay:0,
		direction:"->",
		label:"AUX"
	},
	{
		left:["VP","VB"],
		right:["VBN"],
		leftTokens:["be","can","do","have","may","will","shall"],
		rightTokens:[],
		maxDistance:4,
		delay:0,
		direction:"->",
		label:"AUXPASS"
	},
	{
		left:["PP"],
		right:["VB","VP","VBN"],
		leftTokens:["that","because","by","despite","although","if","of","though","unless","whereas","whether"],
		rightTokens:[],
		maxDistance:-1,
		delay:1,
		direction:"->",
		label:"COMPMARK"
	},
	{
		left:["PP"],
		right:["VB","VP","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:4,
		delay:1,
		direction:"->",
		label:"ADVMARK"
	},
	{
		left:["VP","VB","VBN"],
		right:["ADJ"],
		leftTokens:["be"],
		rightTokens:[],
		maxDistance:4,
		delay:0,
		direction:"->",
		label:"COP"
	},
	/**
	 *
	 * 	(C) Nominal Dependants
	 * 		(1) Nominals
	 *  		1. NMOD 		Nominal Modifier 	http://universaldependencies.org/u/dep/nmod.html
	 *  		2. NUMMOD 		Numeric Modifier 	http://universaldependencies.org/u/dep/nummod.html
	 * 
	**/
	{
		left:["VP","VB","VBN","ADJ","ADJP","NP"],
		right:["CD"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"NUMMOD"
	},
	{
		left:["CD"],
		right:["VP","VB","VBN","NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:0,
		delay:-1,
		direction:"->",
		label:"NUMMOD"
	},
	{
		left:["ADV","VBN"],
		right:["NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"NMOD"
	},
	{
		left:["VB","VP","VBN"],
		right:["TO"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"NMOD"
	},
	{
		left:["NP"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:4,
		delay:4,
		direction:"->",
		label:"NMOD"
	},
	// NMOD is also repaired from NPs who have "of" as case dependency.
	/**
	 *
	 * 	(C) Nominal Dependants
	 * 		(2) Clauses
	 *  		1. ACL
	 * 
	**/
	{
		left:["NP"],
		right:["PP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:4,
		delay:4,
		direction:"<-",
		label:"ACL"
	},
	/**
	 *
	 * 	(C) Nominal Dependants
	 * 		(3) Modifiers
	 *  		1. AMOD 	Adjectival Modifier 	http://universaldependencies.org/u/dep/amod.html
	**/
	{
		left:["VP","VB","VBN"],
		right:["ADJ","ADJP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"AMOD"
	},
	{
		left:["ADJ","ADJP"],
		right:["VP","VB","VBN"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:4,
		direction:"->",
		label:"AMOD"
	},
	{
		left:["WDT","WP"],
		right:["NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"<-",
		label:"DET"
	},
	{
		left:["TO","PP"],
		right:["NP"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:0,
		direction:"->",
		label:"CASE"
	},

	/**
	 * 	(D) OTHER
	 * 		1. PUNCT
	 * 		2. CC
	 * 		3. INTERJ
	 * 		4. DEP
	**/
	{
		left:[],
		right:["PUNCT"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:3,
		direction:"<-",
		label:"PUNCT"
	},
	{
		left:[],
		right:["PUNCT"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:4,
		direction:"->",
		label:"PUNCT"
	},
	{
		left:[],
		right:["PUNCT"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:4,
		direction:"->",
		label:"PUNCT"
	},
	{
		left:["CC"],
		right:[],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:-1,
		direction:"->",
		label:"CC"
	},
	{
		left:[],
		right:["CC"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:-1,
		direction:"<-",
		label:"CC"
	},
	{
		left:[],
		right:["UH"],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:-1,
		direction:"<-",
		label:"INTERJ"
	},
	{
		left:["UH"],
		right:[],
		leftTokens:[],
		rightTokens:[],
		maxDistance:-1,
		delay:-1,
		direction:"->",
		label:"INTERJ"
	}
];