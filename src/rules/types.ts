import {NodeInterface} from "../index";

export interface NonUniqueInterface {
	0:string,
	1:Array<string>,
	2?:Function
}

export interface UniqueInterface {
	0:string,
	1:string
}

export const preUnique:Array<NonUniqueInterface> = [
	//Chunk label		Left Type[0] - Right Tags[1234..]
	["NP",				['DT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NN', 'NNS']],
	["NP",				['DT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NNP', 'NNPS']],
	["NP",				['PDT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NN', 'NNS']],
	["NP",				['PDT', 'PRP$', 'JJ', 'JJS', "JJR", '$', '$', 'NNP', 'NNPS']],
	["VP",				['VBZ', 'VBG']],
	["NP",				['NNP', 'NNPS']],
	["ADV",				['RB', 'RB']],
	["ADJP",			['RB', 'JJ'],	(L:NodeInterface,R:NodeInterface,i:number,n:Array<NodeInterface>)=>R.tags.length===1],
	["UH",				["DT",","],		(L:NodeInterface,R:NodeInterface,i:number,n:Array<NodeInterface>)=>L.index[0]===0&&R.index[1]===1],
	["PP",				["DT","IN"]], 	// might need a condition
	["UH",				["PDT",","],	(L:NodeInterface,R:NodeInterface,i:number,n:Array<NodeInterface>)=>L.index[0]===0&&R.index[1]===1],
	["PP",				["PDT","IN"]], 	// might need a condition
	["UH",				["UH",","]],
	["NP",				["NP","POS","NN"]],
	["PP",				["PP","IN"]],
	["PP",				["IN","IN"]],
	["CD",				["CD","CC","CD"]],
];

export const unique:Array<UniqueInterface> = [
	//To				From
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
	["ADJ",				'JJR'],
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
	["NP",				"SYM"],
	["NP",				"FW"],
];

export const postUnique:Array<NonUniqueInterface> = [
	//Chunk label		Left Type[0] - Right Tags[1234..]
	["SP",				['PP', 'NP']],
	["NP",				["NP","NNP"]]
];