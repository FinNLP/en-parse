module.exports = [


// 	subjects
// 	left type		Right type		Direction 	Label		iterations			Example
	['NP', 			'VP', 			"->", 		'NSUBJ',	1],				// 	I love (love/I)
	["NP",			"VB",			"->",		"NSUBJ",	1],				// 	I'm ('m/I)
	["WDT",			"VP",			"->",		"NSUBJ", 	4],				// 	which loved (loved/which)
	["WDT",			"VB",			"->",		"NSUBJ", 	4],				// 	which is (is/which)
	['WP', 			'VP', 			"->", 		'NSUBJ',	4], 			// 	what happened (happened/what)
	['WP', 			'VB', 			"->", 		'NSUBJ',	4], 			// 	what is (is/what)

// 	Objects
// 	left type		Right type		Direction 	Label		iterations			Example
	['VP', 			'NP', 			"<-", 		'DOBJ',		1],				// 	loved you (loved/you)
	['VB', 			'NP', 			"<-", 		'DOBJ',		1], 			// 	is you (is/you)

// 	Passives
// 	left type		Right type		Direction 	Label		iterations			Example
	["NP",			"VBN",			"->",		"NSUBJPASS",4], 			// 	Tony have been gone (gone/tony)
	["VP",			"VBN",			"->",		"AUXPASS",	4],				//	has been (been/has)
	["VB",			"VBN",			"->",		"AUXPASS",	4],				//	be seen (seen/be)
	["VBN",			"NP",			"<-",		"ATTR",		3],				//	been rational (been/rational)
												// TODO ^ the ATTR is COP in coreNLP
												// However this is the only case being caught!
												// there's a lot of attributes being mistakingly marked
												// as direct object
	["VBN",			"VB",			"<-",		"XCOMP",	3],				//	supposed to be (supposed/be)
	["VBN",			"VP",			"<-",		"XCOMP",	3],				//	supposed to go (supposed/go)


// 	Adverbal Modifiers
// 	left type		Right type		Direction 	Label		iterations			Example
	["VP",			"JJR",			"<-",		"ADVMOD", 	0],				// scored higher (scored/higher)
	['VP', 			'ADV', 			"<-", 		'ADVMOD',	0],				// ran closely (ran/closely)
	['VB', 			'ADV', 			"<-", 		'ADVMOD',	0],				// to surpass marginally (surpass/marginally)
	['ADV', 		'VP', 			"->", 		'ADVMOD', 	0],				// marginally surpassed (surpassed/marginally)
	['ADV', 		'VB', 			"->", 		'ADVMOD', 	0],				// really have (have/really)

// 	Adjectival Modifiers
// 	left type		Right type		Direction 	Label		iterations			Example
	['VP', 			'ADJ', 			"<-", 		'AMOD',		0],				//	was white (was/white)
	['VB', 			'ADJ', 			"<-", 		'AMOD',		0],				//	to go vegan (go/vegan)
	['VP', 			'ADJP', 		"<-", 		'AMOD',		3],				//	was admittedly wrong (was/admittedly)
	['VB', 			'ADJP', 		"<-", 		'AMOD',		3],				//	to be openly racist
	['ADJ', 		'VP', 			"->", 		'AMOD',		5],				//	few opened (opened/few)
	['ADJ', 		'VB', 			"->", 		'AMOD',		5],				//	few to open (open/few)
	['ADJP', 		'VP', 			"->", 		'AMOD',		3],				//	only few did (did/only few)
	['ADJP', 		'VB', 			"->", 		'AMOD',		3],				//	only few to do (do/only few)

	['CC', 			'NP', 			"->", 		'CC',		0],
	['NP', 			'CC', 			"<-", 		'CC',		0],
	['CC', 			'VP', 			"->", 		'CC',		0],
	['VP', 			'CC', 			"<-", 		'CC',		0],
	['CC', 			'VB', 			"->", 		'CC',		0],
	['VB', 			'CC', 			"<-", 		'CC',		0],

	['CD', 			'NP', 			"->", 		'NUMOD',	0],
	['CD', 			'VP', 			"->", 		'NUMOD',	0],
	['CD', 			'VB', 			"->", 		'NUMOD',	0],

	['NP', 			'PP', 			"<-", 		'PREP',		0],
	['VP', 			'PP', 			"<-", 		'PREP',		0],
	['VB', 			'PP', 			"<-", 		'PREP',		0],
	['ADV', 		'PP', 			"<-", 		'PREP',		0],
	['PP', 			'VP', 			"->", 		'PREP',		0],
	["VBG",			"PP",			"<-",		"PREP",		3],
	["JJR",			"PP",			"<-",		"PREP", 	4],
	['PP', 			'NP', 			"->", 		'PREP',		2], 			// from Tony (Tony/from)
	["TO",			"NP",			"->",		"PREP",		2], 			// to Tony (Tony/to)

	['VP', 			'VP', 			"<-", 		'CCOMP',	0],
	['VP', 			'VP', 			"->", 		'AUX',		0],
	['VP', 			'VB', 			"<-", 		'CCOMP',	0],
	['VB', 			'VP', 			"<-", 		'CCOMP',	0],
	["VBG",			"VB",			"->",		"ADVCL",	2],
	['VBN', 		'PP', 			"<-", 		'AGENT',	3],
	["UH",			"VP",			"->",		"INTERJ",	3],
	["TO",			"VB",			"->",		"AUX",	 	3],
	["MD",			"VP",			"->",		"AUX",	 	3],
	["MD",			"VB",			"->",		"AUX",	 	3],
	["NP",			"WDT",			"->",		"RELCL",	3],
	['VB', 			'VP', 			"->", 		'AUX',		4],
	['VP', 			'VB', 			"->", 		'AUX',		4],

// Punctuations
// Should dependencies to their nearest token
	['VP', 			'PUNCT', 		"<-", 		'PUNCT', 	3],
	['VB', 			'PUNCT', 		"<-", 		'PUNCT', 	3],
	['VBN', 		'PUNCT', 		"<-", 		'PUNCT', 	3],
	['PUNCT', 		'VP', 			"->", 		'PUNCT', 	3],
	['PUNCT', 		'VB', 			"->", 		'PUNCT', 	3],
	['PUNCT', 		'VBN', 			"->", 		'PUNCT', 	3],

	//['VAUX', 		'VP', 			"->", 		'AUX',		0], ??
	//['VAUX', 		'VB', 			"->", 		'AUX',		0], ??

	// NOTE: nominal modifiers are in repairs
];