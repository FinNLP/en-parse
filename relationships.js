module.exports = [
// 	left type		Right type		Direction 	Label		repair condition
	['NP', 			'VP', 			"->", 		'NSUBJ'		],
	['VP', 			'NP', 			"<-", 		'DOBJ'		],
	['VB', 			'NP', 			"<-", 		'DOBJ'		],
	['PP', 			'NP', 			"<-", 		'POBJ'		],
	['NP', 			'PP', 			"<-", 		'PREP'		],
	['VP', 			'PP', 			"<-", 		'PREP'		],
	['VB', 			'PP', 			"<-", 		'PREP'		],
	['VP', 			'VP', 			"<-", 		'CCOMP'		],
	['VP', 			'ADV', 			"<-", 		'ADVMOD'	],
	['VB', 			'ADV', 			"<-", 		'ADVMOD'	],
	['ADV', 		'PP', 			"<-", 		'PREP'		],
	['PP', 			'VP', 			"->", 		'PREP'		],
	['VP', 			'ADJ', 			"<-", 		'ACOMP'		],
	['VB', 			'ADJ', 			"<-", 		'ACOMP'		],
	['VB', 			'VP', 			"->", 		'AUX'		],
	['VAUX', 		'VP', 			"->", 		'AUX'		],
	['VAUX', 		'VB', 			"->", 		'AUX'		],
	['VP', 			'PUNCT', 		"<-", 		'PUNCT', 	1], // one repair
	['VB', 			'PUNCT', 		"<-", 		'PUNCT', 	1],
	['PUNCT', 		'VP', 			"->", 		'PUNCT', 	1],
	['PUNCT', 		'VB', 			"->", 		'PUNCT', 	1],
	['ADV', 		'VP', 			"->", 		'ADVMOD', 	2], // two repairs
	['ADV', 		'VB', 			"->", 		'ADVMOD', 	2],
	['ADV', 		'ADV', 			"->", 		'ADVMOD', 	2],
];