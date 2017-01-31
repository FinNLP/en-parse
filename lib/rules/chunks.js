module.exports = [

// ------------ Before unique chunking
//	Chunk label			Left Type[0] - Right Tags[1234..]
	["NP",				['DT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NN', 'NNS']],
	["NP",				['DT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NNP', 'NNPS']],
	["NP",				['PDT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NN', 'NNS']],
	["NP",				['PDT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NNP', 'NNPS']],
	["VP",				['VBZ', 'VBG']],
	["NP",				['NNP', 'NNPS']],
	["ADV",				['RB', 'RB']],
	["ADJP",			['RB', 'JJ'],(L,R,i,n)=>R.tags.length===1],
	["UH",				["DT",","],(L,R,i,ns)=>L.index[0]===0&&R.index[1]===1],
	["PP",				["DT","IN"]], // might need a condition
	["UH",				["PDT",","],(L,R,i,ns)=>L.index[0]===0&&R.index[1]===1],
	["PP",				["PDT","IN"]], // might need a condition
	["UH",				["UH",","]],
	["NP",				["NP","POS","NN"]],
	["PP",				["PP","IN"]],
	["PP",				["IN","IN"]],

// ------------- Unique chunking
// 	To					From
	["PUNCT",			'.'],
	["PUNCT",			','],
	["PUNCT",			':'],
	["PUNCT",			'"'],
	["PUNCT",			')'],
	["PUNCT",			'('],
	["PUNCT",			'#'],
	["PP",				'IN'],
	["PRT",				'RP'],
	["CD",				'LS'], // <- Questionable
	["NP",				'PRP'],
	["NP",				'PRP$'],
	["NP",				'NNP'],
	["NP",				'NNPS'],
	["NP",				'NN'],
	["NP",				'DT'],
	["NP",				'PDT'],
	["ADJ",				'JJ'],
	["ADJ",				'JJS'],
	["NP",				'NNS'],
	["VP",				'VBZ'],
	["VP",				'VBP'],
	["VP",				'VBD'],
	["VP",				'VBG'],
	["ADV",				'WRB'],
	["ADV",				'RB'],
	["ADV",				'RBR'],
	["ADV",				'RBS'],
	["NP",				"$"],
	["NP",				"SYM"], // <---- How true is this?

// ------------ After unique chunking
//	Chunk label			Left Type[0] - Right Tags[1234..]
	["SP",				['PP', 'NP']],
	["NP",				["NP","NNP"]]
];