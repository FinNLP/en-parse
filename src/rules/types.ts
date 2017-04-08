export const single:{[key:string]:string} = {
	".":	"PUNCT",
	",":	"PUNCT",
	":":	"PUNCT",
	'"':	"PUNCT",
	")":	"PUNCT",
	"(":	"PUNCT",
	"#":	"PUNCT",

	"PRP":	"NP",
	"PRP$":	"NP",
	"NNP":	"NP",
	"NNPS":	"NP",
	"NN":	"NP",
	"NNS":	"NP",
	"$":	"NP",
	"SYM":	"NP",
	"FW":	"NP",

	"PDT":	"DT",

	"VBZ":	"VP",
	"VBP":	"VP",
	"VBD":	"VP",
	"VBG":	"VP",

	"JJ":	"ADJ",
	"JJR":	"ADJ",
	"JJS":	"ADJ",

	"WRB":	"ADV",
	"RB":	"ADV",
	"RBR":	"ADV",
	"RBS":	"ADV",

	"IN":	"PP",
	
	"RP":	"PRT",
	
	"LS":	"CD"
};

export interface MultipleRule {
	type:string;
	regex:RegExp;
};

export const multiple:MultipleRule[] = [
	{
		type:"NP",
		regex:/((#DT-|#ADJ-)+|(#ADJ-|#NP-)+)#NP-/g,
	},
	{
		type:"ADV",
		regex:/((#ADV-){2,})/g,
	},
	{
		type:"ADJ",
		regex:/((#ADJ-){2,})/g,
	},
	{
		type:"ADJP",
		regex:/#ADV-#ADJ-/,
	},
	{
		type:"PP",
		regex:/#PP-#PP-/
	},
	{
		type:"UH",
		regex:/($(#DT|#UH|#PDT)-(#PUNCT)-)/g,
	},
	{
		type:"PP",
		regex:/((#DT|#PDT|#PP|#IN)-(#IN)-)/g,
	},
	{
		type:"NP",
		regex:/#DT-/g,
	},
	{
		type:"NP",
		regex:/#NP-#POS-#NP-/,
	},
];