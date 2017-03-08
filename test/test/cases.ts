interface DepResult {
	t:string;
	l:string;
	p:number;
};

interface Case {
	tokens:string[];
	tags:string[];
	"0"?:DepResult;
	"1"?:DepResult;
	"2"?:DepResult;
	"3"?:DepResult;
	"4"?:DepResult;
	"5"?:DepResult;
	"6"?:DepResult;
	"7"?:DepResult;
	"8"?:DepResult;
	"9"?:DepResult;
}

const cases:Case[] = [
	{
		"0": {t: "She",  l: "NSUBJ",  p: 1},
		"1": {t: "gave",  l: "ROOT",  p: -1},
		"2": {t: "me",  l: "DOBJ",  p: 1},
		"3": {t: "a",  l: "MWE",  p: 4},
		"4": {t: "raise",  l: "IOBJ",  p: 1},
		"tokens": ["She",  "gave",  "me",  "a",  "raise"],
		"tags": ["PRP",  "VBD",  "PRP",  "DT",  "NN"]
	},
	{
		"0": {t: "declared",  l: "ROOT",  p: -1},
		"1": {t: "to",  l: "AUX",  p: 2},
		"2": {t: "be",  l: "CCOMP",  p: 0},
		"3": {t: "Jim",  l: "DOBJ",  p: 2},
		"tokens": ["declared",  "to",  "be",  "Jim"],
		"tags": ["VBD",  "TO",  "VB",  "NNP"]
	},
	{
		"0": {t: "declared",  l: "ROOT",  p: -1},
		"1": {t: "to",  l: "AUX",  p: 2},
		"2": {t: "save",  l: "CCOMP",  p: 0},
		"3": {t: "the",  l: "MWE",  p: 4},
		"4": {t: "file",  l: "DOBJ",  p: 2},
		"tokens": ["declared",  "to",  "save",  "the",  "file"],
		"tags": ["VBD",  "TO",  "VB",  "DT",  "NN"]
	},
	{
		"0": {t: "let",  l: "ROOT",  p: -1},
		"1": {t: "Markey",  l: "NSUBJ",  p: 2},
		"2": {t: "carry",  l: "CCOMP",  p: 0},
		"3": {t: "the",  l: "MWE",  p: 4},
		"4": {t: "legislation",  l: "DOBJ",  p: 2},
		"tokens": ["let",  "Markey",  "carry",  "the",  "legislation"],
		"tags": ["VB",  "NNP",  "VB",  "DT",  "NN"]
	},
	{
		"0": {t: "Which",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "it",  l: "DOBJ",  p: 1},
		"3": {t: "?",  l: "PUNCT",  p: 1},
		"tokens": ["Which",  "was",  "it",  "?"],
		"tags": ["WDT",  "VBD",  "PRP",  "."]
	},
	{
		"0": {t: "What",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "it",  l: "DOBJ",  p: 1},
		"3": {t: "?",  l: "PUNCT",  p: 1},
		"tokens": ["What",  "was",  "it",  "?"],
		"tags": ["WP",  "VBD",  "PRP",  "."]
	},
	{
		"0": {t: "what",  l: "DOBJ",  p: 2},
		"1": {t: "she",  l: "NSUBJ",  p: 2},
		"2": {t: "said",  l: "ROOT",  p: -1},
		"3": {t: "has",  l: "DOBJ",  p: 2},
		"4": {t: "sense",  l: "IOBJ",  p: 2},
		"tokens": ["what",  "she",  "said",  "has",  "sense"],
		"tags": ["WP",  "PRP",  "VBD",  "NNS",  "NN"]
	},
	{
		"0": {t: "what",  l: "DOBJ",  p: 2},
		"1": {t: "they",  l: "NSUBJ",  p: 2},
		"2": {t: "said",  l: "ROOT",  p: -1},
		"3": {t: "is",  l: "XCOMP",  p: 2},
		"4": {t: "interesting",  l: "AMOD",  p: 3},
		"tokens": ["what",  "they",  "said",  "is",  "interesting"],
		"tags": ["WP",  "PRP",  "VBD",  "VBZ",  "JJ"]
	},
	{
		"0": {t: "He",  l: "NSUBJ",  p: 1},
		"1": {t: "says",  l: "ROOT",  p: -1},
		"2": {t: "you",  l: "DOBJ",  p: 1},
		"3": {t: "like",  l: "ADVMARK",  p: 5},
		"4": {t: "to",  l: "AUX",  p: 5},
		"5": {t: "swim",  l: "ADVCL",  p: 1},
		"tokens": ["He",  "says",  "you",  "like",  "to",  "swim"],
		"tags": ["PRP",  "VBZ",  "PRP",  "IN",  "TO",  "VB"]
	},
	{
		"0": {t: "the",  l: "MWE",  p: 1},
		"1": {t: "boss",  l: "NSUBJ",  p: 2},
		"2": {t: "said",  l: "ROOT",  p: -1},
		"3": {t: "to",  l: "AUX",  p: 4},
		"4": {t: "start",  l: "CCOMP",  p: 2},
		"5": {t: "digging",  l: "DOBJ",  p: 4},
		"tokens": ["the",  "boss",  "said",  "to",  "start",  "digging"],
		"tags": ["DT",  "NN",  "VBD",  "TO",  "VB",  "NN"]
	},
	{
		"0": {t: "Give",  l: "ROOT",  p: -1},
		"1": {t: "the",  l: "MWE",  p: 2},
		"2": {t: "toys",  l: "DOBJ",  p: 0},
		"3": {t: "to",  l: "CASE",  p: 5},
		"4": {t: "the",  l: "MWE",  p: 5},
		"5": {t: "children",  l: "OBL",  p: 0},
		"tokens": ["Give",  "the",  "toys",  "to",  "the",  "children"],
		"tags": ["VB",  "DT",  "NNS",  "TO",  "DT",  "NNS"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "loved",  l: "ROOT",  p: -1},
		"2": {t: "it",  l: "DOBJ",  p: 1},
		"3": {t: ":)",  l: "DISCOURSE",  p: 2},
		"tokens": ["I",  "loved",  "it",  ":)"],
		"tags": ["PRP",  "VBD",  "PRP",  "EM"]
	},
	{
		"0": {t: "Sam",  l: "NSUBJ",  p: 1},
		"1": {t: "ate",  l: "ROOT",  p: -1},
		"2": {t: "3",  l: "NUMMOD",  p: 3},
		"3": {t: "burgers",  l: "DOBJ",  p: 1},
		"tokens": ["Sam",  "ate",  "3",  "burgers"],
		"tags": ["NNP",  "VBD",  "CD",  "NNS"]
	},
	{
		"0": {t: "Rick",  l: "NSUBJ",  p: 1},
		"1": {t: "had",  l: "ROOT",  p: -1},
		"2": {t: "$",  l: "DOBJ",  p: 1},
		"3": {t: "50",  l: "NUMMOD",  p: 2},
		"tokens": ["Rick",  "had",  "$",  "50"],
		"tags": ["NNP",  "VBD",  "$",  "CD"]
	},
	{
		"0": {t: "I",  l: "NSUBJPASS",  p: 3},
		"1": {t: "have",  l: "AUXPASS",  p: 3},
		"2": {t: "been",  l: "AUX",  p: 3},
		"3": {t: "thrown",  l: "ROOT",  p: -1},
		"4": {t: "inside",  l: "ADVMOD",  p: 3},
		"tokens": ["I",  "have",  "been",  "thrown",  "inside"],
		"tags": ["PRP",  "VBP",  "VBN",  "VBN",  "IN"]
	},
	{
		"0": {t: "It",  l: "NSUBJPASS",  p: 3},
		"1": {t: "has",  l: "AUXPASS",  p: 3},
		"2": {t: "been",  l: "AUX",  p: 3},
		"3": {t: "thrown",  l: "ROOT",  p: -1},
		"tokens": ["It",  "has",  "been",  "thrown"],
		"tags": ["PRP",  "VBZ",  "VBN",  "VBN"]
	},
	{
		"0": {t: "Bill",  l: "NSUBJ",  p: 1},
		"1": {t: "is",  l: "ROOT",  p: -1},
		"2": {t: "big",  l: "AMOD",  p: 1},
		"3": {t: "and",  l: "CC",  p: 4},
		"4": {t: "honest",  l: "AMOD",  p: 1},
		"tokens": ["Bill",  "is",  "big",  "and",  "honest"],
		"tags": ["NNP",  "VBZ",  "JJ",  "CC",  "JJ"]
	},
	{
		"0": {t: "It",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "bigger",  l: "AMOD",  p: 1},
		"3": {t: "before",  l: "ADVMOD",  p: 1},
		"tokens": ["It",  "was",  "bigger",  "before"],
		"tags": ["PRP",  "VBD",  "JJR",  "IN"]
	},
	{
		"0": {t: "bigger",  l: "DEP",  p: 3},
		"1": {t: "between",  l: "CASE",  p: 3},
		"2": {t: "the",  l: "MWE",  p: 3},
		"3": {t: "trees",  l: "ROOT",  p: -1},
		"tokens": ["bigger",  "between",  "the",  "trees"],
		"tags": ["JJR",  "IN",  "DT",  "NNS"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "did",  l: "ROOT",  p: -1},
		"2": {t: "it",  l: "DOBJ",  p: 1},
		"3": {t: "before",  l: "ADVMOD",  p: 1},
		"tokens": ["I",  "did",  "it",  "before"],
		"tags": ["PRP",  "VBD",  "PRP",  "IN"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "bought",  l: "ROOT",  p: -1},
		"2": {t: "The",  l: "MWE",  p: 5},
		"3": {t: "chair",  l: "MWE",  p: 5},
		"4": {t: "'s",  l: "MWE",  p: 5},
		"5": {t: "office",  l: "DOBJ",  p: 1},
		"tokens": ["I",  "bought",  "The",  "chair",  "'s",  "office"],
		"tags": ["PRP",  "VBD",  "DT",  "NN",  "POS",  "NN"]
	},
	{
		"0": {t: "Dole",  l: "NSUBJPASS",  p: 2},
		"1": {t: "was",  l: "AUXPASS",  p: 2},
		"2": {t: "defeated",  l: "ROOT",  p: -1},
		"3": {t: "by",  l: "CASE",  p: 4},
		"4": {t: "Clinton",  l: "NMOD",  p: 2},
		"tokens": ["Dole",  "was",  "defeated",  "by",  "Clinton"],
		"tags": ["NNP",  "VBD",  "VBN",  "IN",  "NNP"]
	},
	{
		"0": {t: "It",  l: "NSUBJPASS",  p: 2},
		"1": {t: "has",  l: "AUXPASS",  p: 2},
		"2": {t: "been",  l: "ROOT",  p: -1},
		"3": {t: "fast",  l: "ADVMOD",  p: 2},
		"tokens": ["It",  "has",  "been",  "fast"],
		"tags": ["PRP",  "VBZ",  "VBN",  "RB"]
	},
	{
		"0": {t: "It",  l: "NSUBJ",  p: 2},
		"1": {t: "is",  l: "MWE",  p: 2},
		"2": {t: "being",  l: "ROOT",  p: -1},
		"3": {t: "slower",  l: "AMOD",  p: 2},
		"tokens": ["It",  "is",  "being",  "slower"],
		"tags": ["PRP",  "VBZ",  "VBG",  "JJR"]
	},
	{
		"0": {t: "It",  l: "NSUBJ",  p: 1},
		"1": {t: "promises",  l: "ROOT",  p: -1},
		"2": {t: "to",  l: "NMOD",  p: 1},
		"3": {t: "be",  l: "COP",  p: 4},
		"4": {t: "better",  l: "AMOD",  p: 1},
		"tokens": ["It",  "promises",  "to",  "be",  "better"],
		"tags": ["PRP",  "VBZ",  "TO",  "VB",  "JJR"]
	},
	{
		"0": {t: "What",  l: "DOBJ",  p: 3},
		"1": {t: "I",  l: "NSUBJPASS",  p: 3},
		"2": {t: "have",  l: "AUXPASS",  p: 3},
		"3": {t: "done",  l: "ROOT",  p: -1},
		"4": {t: "before",  l: "ADVMOD",  p: 3},
		"tokens": ["What",  "I",  "have",  "done",  "before"],
		"tags": ["WP",  "PRP",  "VBP",  "VBN",  "IN"]
	},
	{
		"0": {t: "it",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "bigger",  l: "AMOD",  p: 1},
		"3": {t: "before",  l: "ADVMOD",  p: 1},
		"tokens": ["it",  "was",  "bigger",  "before"],
		"tags": ["PRP",  "VBD",  "JJR",  "IN"]
	},
	{
		"0": {t: "it",  l: "NSUBJPASS",  p: 3},
		"1": {t: "has",  l: "AUXPASS",  p: 3},
		"2": {t: "not",  l: "ADVMOD",  p: 3},
		"3": {t: "changed",  l: "ROOT",  p: -1},
		"4": {t: "much",  l: "AMOD",  p: 3},
		"5": {t: "since",  l: "ADVMOD",  p: 3},
		"tokens": ["it",  "has",  "not",  "changed",  "much",  "since"],
		"tags": ["PRP",  "VBZ",  "RB",  "VBN",  "JJ",  "IN"]
	},
	{
		"0": {t: "that",  l: "NMOD",  p: 2},
		"1": {t: "I",  l: "NSUBJ",  p: 2},
		"2": {t: "need",  l: "ROOT",  p: -1},
		"3": {t: "to",  l: "AUX",  p: 4},
		"4": {t: "drag",  l: "CCOMP",  p: 2},
		"5": {t: "around",  l: "ADVMOD",  p: 4},
		"tokens": ["that",  "I",  "need",  "to",  "drag",  "around"],
		"tags": ["DT",  "PRP",  "VBP",  "TO",  "VB",  "IN"]
	},
	{
		"0": {t: "information",  l: "NMOD",  p: 2},
		"1": {t: "which",  l: "NSUBJ",  p: 2},
		"2": {t: "drowned",  l: "ROOT",  p: -1},
		"3": {t: "out",  l: "VPRT",  p: 2},
		"4": {t: "my",  l: "MWE",  p: 5},
		"5": {t: "sanity",  l: "DOBJ",  p: 2},
		"tokens": ["information",  "which",  "drowned",  "out",  "my",  "sanity"],
		"tags": ["NN",  "WDT",  "VBD",  "RP",  "PRP$",  "NN"]
	},
	{
		"0": {t: "She",  l: "NSUBJ",  p: 1},
		"1": {t: "entered",  l: "ROOT",  p: -1},
		"2": {t: "the",  l: "MWE",  p: 3},
		"3": {t: "room",  l: "DOBJ",  p: 1},
		"4": {t: "sad",  l: "AMOD",  p: 1},
		"tokens": ["She",  "entered",  "the",  "room",  "sad"],
		"tags": ["PRP",  "VBD",  "DT",  "NN",  "JJ"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "saw",  l: "ROOT",  p: -1},
		"2": {t: "the",  l: "MWE",  p: 3},
		"3": {t: "man",  l: "DOBJ",  p: 1},
		"4": {t: "you",  l: "NSUBJ",  p: 5},
		"5": {t: "love",  l: "XCOMP",  p: 1},
		"tokens": ["I",  "saw",  "the",  "man",  "you",  "love"],
		"tags": ["PRP",  "VBD",  "DT",  "NN",  "PRP",  "VBP"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "saw",  l: "ROOT",  p: -1},
		"2": {t: "bigger",  l: "MWE",  p: 3},
		"3": {t: "man",  l: "DOBJ",  p: 1},
		"tokens": ["I",  "saw",  "bigger",  "man"],
		"tags": ["PRP",  "VBD",  "JJR",  "NN"]
	},
	{
		"0": {t: "which",  l: "DOBJ",  p: 3},
		"1": {t: "I",  l: "NSUBJPASS",  p: 3},
		"2": {t: "have",  l: "AUXPASS",  p: 3},
		"3": {t: "thrown",  l: "ROOT",  p: -1},
		"4": {t: "out",  l: "VPRT",  p: 3},
		"tokens": ["which",  "I",  "have",  "thrown",  "out"],
		"tags": ["WDT",  "PRP",  "VBP",  "VBN",  "RP"]
	},
	{
		"0": {t: "which",  l: "DOBJ",  p: 3},
		"1": {t: "have",  l: "AUXPASS",  p: 3},
		"2": {t: "been",  l: "AUX",  p: 3},
		"3": {t: "thrown",  l: "ROOT",  p: -1},
		"tokens": ["which",  "have",  "been",  "thrown"],
		"tags": ["WDT",  "VBP",  "VBN",  "VBN"]
	},
	{
		"0": {t: "it",  l: "NSUBJ",  p: 1},
		"1": {t: "is",  l: "ROOT",  p: -1},
		"2": {t: "just",  l: "ADVMOD",  p: 4},
		"3": {t: "done",  l: "MWE",  p: 4},
		"4": {t: "garbage",  l: "DOBJ",  p: 1},
		"tokens": ["it",  "is",  "just",  "done",  "garbage"],
		"tags": ["PRP",  "VBZ",  "RB",  "JJ",  "NN"]
	},
	{
		"0": {t: "How",  l: "ADVMOD",  p: 1},
		"1": {t: "are",  l: "ROOT",  p: -1},
		"2": {t: "you",  l: "MWE",  p: 3},
		"3": {t: "mary",  l: "DOBJ",  p: 1},
		"tokens": ["How",  "are",  "you",  "mary"],
		"tags": ["WRB",  "VBP",  "PRP",  "NNP"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "saw",  l: "ROOT",  p: -1},
		"2": {t: "a",  l: "MWE",  p: 3},
		"3": {t: "girl",  l: "DOBJ",  p: 1},
		"tokens": ["I",  "saw",  "a",  "girl"],
		"tags": ["PRP",  "VBD",  "DT",  "NN"]
	},
	{
		"0": {t: "Send",  l: "ROOT",  p: -1},
		"1": {t: "the",  l: "MWE",  p: 2},
		"2": {t: "email",  l: "DOBJ",  p: 0},
		"3": {t: "to",  l: "CASE",  p: 4},
		"4": {t: "Tony",  l: "OBL",  p: 0},
		"tokens": ["Send",  "the",  "email",  "to",  "Tony"],
		"tags": ["VB",  "DT",  "NN",  "TO",  "NNP"]
	},
	{
		"0": {t: "Get",  l: "ROOT",  p: -1},
		"1": {t: "the",  l: "MWE",  p: 2},
		"2": {t: "bag",  l: "DOBJ",  p: 0},
		"3": {t: "from",  l: "CASE",  p: 4},
		"4": {t: "Tony",  l: "OBL",  p: 0},
		"tokens": ["Get",  "the",  "bag",  "from",  "Tony"],
		"tags": ["VB",  "DT",  "NN",  "IN",  "NNP"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "liked",  l: "ROOT",  p: -1},
		"2": {t: "what",  l: "NSUBJ",  p: 3},
		"3": {t: "happened",  l: "XCOMP",  p: 1},
		"tokens": ["I",  "liked",  "what",  "happened"],
		"tags": ["PRP",  "VBD",  "WP",  "VBD"]
	},
	{
		"0": {t: "what",  l: "NSUBJ",  p: 1},
		"1": {t: "did",  l: "ROOT",  p: -1},
		"2": {t: "you",  l: "NSUBJ",  p: 3},
		"3": {t: "do",  l: "CCOMP",  p: 1},
		"4": {t: "?",  l: "PUNCT",  p: 3},
		"tokens": ["what",  "did",  "you",  "do",  "?"],
		"tags": ["WP",  "VBD",  "PRP",  "VBP",  "."]
	},
	{
		"0": {t: "Something",  l: "NSUBJ",  p: 1},
		"1": {t: "is",  l: "ROOT",  p: -1},
		"2": {t: "a",  l: "MWE",  p: 3},
		"3": {t: "thing",  l: "DOBJ",  p: 1},
		"tokens": ["Something",  "is",  "a",  "thing"],
		"tags": ["NN",  "VBZ",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJ",  p: 3},
		"1": {t: "can",  l: "AUX",  p: 3},
		"2": {t: "not",  l: "ADVMOD",  p: 3},
		"3": {t: "be",  l: "ROOT",  p: -1},
		"4": {t: "a",  l: "MWE",  p: 5},
		"5": {t: "thing",  l: "DOBJ",  p: 3},
		"tokens": ["Something",  "can",  "not",  "be",  "a",  "thing"],
		"tags": ["NN",  "MD",  "RB",  "VB",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJPASS",  p: 3},
		"1": {t: "has",  l: "AUXPASS",  p: 3},
		"2": {t: "n't",  l: "ADVMOD",  p: 3},
		"3": {t: "been",  l: "ROOT",  p: -1},
		"4": {t: "a",  l: "MWE",  p: 5},
		"5": {t: "thing",  l: "DOBJ",  p: 3},
		"tokens": ["Something",  "has",  "n't",  "been",  "a",  "thing"],
		"tags": ["NN",  "VBZ",  "RB",  "VBN",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "a",  l: "MWE",  p: 3},
		"3": {t: "thing",  l: "DOBJ",  p: 1},
		"tokens": ["Something",  "was",  "a",  "thing"],
		"tags": ["NN",  "VBD",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJ",  p: 2},
		"1": {t: "will",  l: "AUX",  p: 2},
		"2": {t: "be",  l: "ROOT",  p: -1},
		"3": {t: "a",  l: "MWE",  p: 4},
		"4": {t: "thing",  l: "DOBJ",  p: 2},
		"tokens": ["Something",  "will",  "be",  "a",  "thing"],
		"tags": ["NN",  "MD",  "VB",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJ",  p: 2},
		"1": {t: "can",  l: "AUX",  p: 2},
		"2": {t: "be",  l: "ROOT",  p: -1},
		"3": {t: "a",  l: "MWE",  p: 4},
		"4": {t: "thing",  l: "DOBJ",  p: 2},
		"tokens": ["Something",  "can",  "be",  "a",  "thing"],
		"tags": ["NN",  "MD",  "VB",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJ",  p: 2},
		"1": {t: "could",  l: "AUX",  p: 2},
		"2": {t: "be",  l: "ROOT",  p: -1},
		"3": {t: "a",  l: "MWE",  p: 4},
		"4": {t: "thing",  l: "DOBJ",  p: 2},
		"tokens": ["Something",  "could",  "be",  "a",  "thing"],
		"tags": ["NN",  "MD",  "VB",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJPASS",  p: 3},
		"1": {t: "could",  l: "AUX",  p: 3},
		"2": {t: "have",  l: "AUXPASS",  p: 3},
		"3": {t: "been",  l: "ROOT",  p: -1},
		"4": {t: "a",  l: "MWE",  p: 5},
		"5": {t: "thing",  l: "DOBJ",  p: 3},
		"tokens": ["Something",  "could",  "have",  "been",  "a",  "thing"],
		"tags": ["NN",  "MD",  "VB",  "VBN",  "DT",  "NN"]
	},
	{
		"0": {t: "Something",  l: "NSUBJPASS",  p: 3},
		"1": {t: "should",  l: "AUX",  p: 3},
		"2": {t: "have",  l: "AUXPASS",  p: 3},
		"3": {t: "been",  l: "ROOT",  p: -1},
		"4": {t: "a",  l: "MWE",  p: 5},
		"5": {t: "thing",  l: "DOBJ",  p: 3},
		"tokens": ["Something",  "should",  "have",  "been",  "a",  "thing"],
		"tags": ["NN",  "MD",  "VB",  "VBN",  "DT",  "NN"]
	},
	{
		"0": {t: "you",  l: "NSUBJ",  p: 2},
		"1": {t: "can",  l: "AUX",  p: 2},
		"2": {t: "do",  l: "ROOT",  p: -1},
		"3": {t: "the",  l: "MWE",  p: 4},
		"4": {t: "laundry",  l: "DOBJ",  p: 2},
		"5": {t: "!",  l: "PUNCT",  p: 2},
		"tokens": ["you",  "can",  "do",  "the",  "laundry",  "!"],
		"tags": ["PRP",  "MD",  "VB",  "DT",  "NN",  "."]
	},
	{
		"0": {t: "will",  l: "AUX",  p: 2},
		"1": {t: "you",  l: "NSUBJ",  p: 2},
		"2": {t: "do",  l: "ROOT",  p: -1},
		"3": {t: "the",  l: "MWE",  p: 4},
		"4": {t: "laundry",  l: "DOBJ",  p: 2},
		"5": {t: "?",  l: "PUNCT",  p: 2},
		"tokens": ["will",  "you",  "do",  "the",  "laundry",  "?"],
		"tags": ["MD",  "PRP",  "VBP",  "DT",  "NN",  "."]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "scored",  l: "ROOT",  p: -1},
		"2": {t: "higher",  l: "AMOD",  p: 1},
		"3": {t: "than",  l: "MWE",  p: 4},
		"4": {t: "before",  l: "ADVMOD",  p: 1},
		"tokens": ["I",  "scored",  "higher",  "than",  "before"],
		"tags": ["PRP",  "VBD",  "JJR",  "IN",  "IN"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "ran",  l: "ROOT",  p: -1},
		"2": {t: "closely",  l: "ADVMOD",  p: 5},
		"3": {t: "to",  l: "CASE",  p: 5},
		"4": {t: "the",  l: "MWE",  p: 5},
		"5": {t: "winner",  l: "OBL",  p: 1},
		"tokens": ["I",  "ran",  "closely",  "to",  "the",  "winner"],
		"tags": ["PRP",  "VBD",  "RB",  "TO",  "DT",  "NN"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 2},
		"1": {t: "closely",  l: "ADVMOD",  p: 2},
		"2": {t: "came",  l: "ROOT",  p: -1},
		"3": {t: "to",  l: "CASE",  p: 5},
		"4": {t: "the",  l: "MWE",  p: 5},
		"5": {t: "scene",  l: "OBL",  p: 2},
		"tokens": ["I",  "closely",  "came",  "to",  "the",  "scene"],
		"tags": ["PRP",  "RB",  "VBD",  "TO",  "DT",  "NN"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 2},
		"1": {t: "really",  l: "ADVMOD",  p: 2},
		"2": {t: "have",  l: "ROOT",  p: -1},
		"3": {t: "to",  l: "AUX",  p: 4},
		"4": {t: "visit",  l: "CCOMP",  p: 2},
		"5": {t: "him",  l: "DOBJ",  p: 4},
		"tokens": ["I",  "really",  "have",  "to",  "visit",  "him"],
		"tags": ["PRP",  "RB",  "VBP",  "TO",  "VB",  "PRP"]
	},
	{
		"0": {t: "XML",  l: "NMOD",  p: 2},
		"1": {t: "tags",  l: "NSUBJ",  p: 2},
		"2": {t: "are",  l: "ROOT",  p: -1},
		"3": {t: "case-sensitive",  l: "AMOD",  p: 2},
		"tokens": ["XML",  "tags",  "are",  "case-sensitive"],
		"tags": ["NNP",  "NNS",  "VBP",  "JJ"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "opened",  l: "ROOT",  p: -1},
		"2": {t: "the",  l: "MWE",  p: 4},
		"3": {t: "white",  l: "MWE",  p: 4},
		"4": {t: "door",  l: "DOBJ",  p: 1},
		"tokens": ["I",  "opened",  "the",  "white",  "door"],
		"tags": ["PRP",  "VBD",  "DT",  "JJ",  "NN"]
	},
	{
		"0": {t: "He",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "blatantly",  l: "MWE",  p: 3},
		"3": {t: "wrong",  l: "AMOD",  p: 1},
		"4": {t: ".",  l: "PUNCT",  p: 1},
		"tokens": ["He",  "was",  "blatantly",  "wrong",  "."],
		"tags": ["PRP",  "VBD",  "RB",  "JJ",  "."]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 2},
		"1": {t: "kindly",  l: "ADVMOD",  p: 2},
		"2": {t: "disagree",  l: "ROOT",  p: -1},
		"3": {t: ".",  l: "PUNCT",  p: 2},
		"tokens": ["I",  "kindly",  "disagree",  "."],
		"tags": ["PRP",  "RB",  "VBP",  "."]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "tried",  l: "ROOT",  p: -1},
		"2": {t: "to",  l: "AUX",  p: 3},
		"3": {t: "go",  l: "CCOMP",  p: 1},
		"4": {t: "vegan",  l: "AMOD",  p: 3},
		"tokens": ["I",  "tried",  "to",  "go",  "vegan"],
		"tags": ["PRP",  "VBD",  "TO",  "VB",  "JJ"]
	},
	{
		"0": {t: "only",  l: "MWE",  p: 1},
		"1": {t: "few",  l: "DEP",  p: 4},
		"2": {t: "to",  l: "AUX",  p: 4},
		"3": {t: "be",  l: "AUXPASS",  p: 4},
		"4": {t: "sent",  l: "ROOT",  p: -1},
		"tokens": ["only",  "few",  "to",  "be",  "sent"],
		"tags": ["RB",  "JJ",  "TO",  "VB",  "VBN"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "followed",  l: "ROOT",  p: -1},
		"2": {t: "Morgan",  l: "DOBJ",  p: 1},
		"3": {t: "and",  l: "CC",  p: 4},
		"4": {t: "Alex",  l: "DOBJ",  p: 1},
		"tokens": ["I",  "followed",  "Morgan",  "and",  "Alex"],
		"tags": ["PRP",  "VBD",  "NNP",  "CC",  "NNP"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 3},
		"1": {t: "am",  l: "AUX",  p: 3},
		"2": {t: "not",  l: "ADVMOD",  p: 3},
		"3": {t: "going",  l: "ROOT",  p: -1},
		"4": {t: "tomorrow",  l: "DOBJ",  p: 3},
		"tokens": ["I",  "am",  "not",  "going",  "tomorrow"],
		"tags": ["PRP",  "VBP",  "RB",  "VBG",  "NN"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "am",  l: "ROOT",  p: -1},
		"2": {t: "still",  l: "MWE",  p: 3},
		"3": {t: "here",  l: "ADVMOD",  p: 1},
		"tokens": ["I",  "am",  "still",  "here"],
		"tags": ["PRP",  "VBP",  "RB",  "RB"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "am",  l: "ROOT",  p: -1},
		"2": {t: "still",  l: "ADVMOD",  p: 5},
		"3": {t: "in",  l: "CASE",  p: 5},
		"4": {t: "the",  l: "MWE",  p: 5},
		"5": {t: "garage",  l: "OBL",  p: 1},
		"tokens": ["I",  "am",  "still",  "in",  "the",  "garage"],
		"tags": ["PRP",  "VBP",  "RB",  "IN",  "DT",  "NN"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "thought",  l: "ROOT",  p: -1},
		"2": {t: "it",  l: "NSUBJ",  p: 3},
		"3": {t: "lacked",  l: "CCOMP",  p: 1},
		"4": {t: "meaning",  l: "XCOMP",  p: 3},
		"tokens": ["I",  "thought",  "it",  "lacked",  "meaning"],
		"tags": ["PRP",  "VBD",  "PRP",  "VBD",  "VBG"]
	},
	{
		"0": {t: "The",  l: "MWE",  p: 1},
		"1": {t: "boss",  l: "NSUBJ",  p: 2},
		"2": {t: "said",  l: "ROOT",  p: -1},
		"3": {t: "to",  l: "AUX",  p: 4},
		"4": {t: "start",  l: "CCOMP",  p: 2},
		"5": {t: "digging",  l: "DOBJ",  p: 4},
		"tokens": ["The",  "boss",  "said",  "to",  "start",  "digging"],
		"tags": ["DT",  "NN",  "VBD",  "TO",  "VB",  "NN"]
	},
	{
		"0": {t: "The",  l: "MWE",  p: 1},
		"1": {t: "company",  l: "NSUBJPASS",  p: 3},
		"2": {t: "has",  l: "AUXPASS",  p: 3},
		"3": {t: "declared",  l: "ROOT",  p: -1},
		"4": {t: "bankruptcy",  l: "DOBJ",  p: 3},
		"tokens": ["The",  "company",  "has",  "declared",  "bankruptcy"],
		"tags": ["DT",  "NN",  "VBZ",  "VBN",  "NN"]
	},
	{
		"0": {t: "I",  l: "NSUBJPASS",  p: 2},
		"1": {t: "have",  l: "AUXPASS",  p: 2},
		"2": {t: "been",  l: "ROOT",  p: -1},
		"3": {t: "up",  l: "ADVMOD",  p: 5},
		"4": {t: "all",  l: "MWE",  p: 5},
		"5": {t: "night",  l: "DOBJ",  p: 2},
		"tokens": ["I",  "have",  "been",  "up",  "all",  "night"],
		"tags": ["PRP",  "VBP",  "VBN",  "RB",  "DT",  "NN"]
	},
	{
		"0": {t: "Why",  l: "ADVMOD",  p: 1},
		"1": {t: "are",  l: "ROOT",  p: -1},
		"2": {t: "you",  l: "NSUBJ",  p: 3},
		"3": {t: "asking",  l: "XCOMP",  p: 1},
		"tokens": ["Why",  "are",  "you",  "asking"],
		"tags": ["WRB",  "VBP",  "PRP",  "VBG"]
	},
	{
		"0": {t: "they",  l: "NSUBJ",  p: 1},
		"1": {t: "operate",  l: "ROOT",  p: -1},
		"2": {t: "ships",  l: "DOBJ",  p: 1},
		"3": {t: "and",  l: "CC",  p: 4},
		"4": {t: "banks",  l: "DOBJ",  p: 1},
		"tokens": ["they",  "operate",  "ships",  "and",  "banks"],
		"tags": ["PRP",  "VBP",  "NNS",  "CC",  "NNS"]
	},
	{
		"0": {t: "The",  l: "MWE",  p: 1},
		"1": {t: "dog",  l: "NSUBJ",  p: 2},
		"2": {t: "barked",  l: "ROOT",  p: -1},
		"3": {t: "at",  l: "CASE",  p: 5},
		"4": {t: "the",  l: "MWE",  p: 5},
		"5": {t: "cat",  l: "OBL",  p: 2},
		"tokens": ["The",  "dog",  "barked",  "at",  "the",  "cat"],
		"tags": ["DT",  "NN",  "VBD",  "IN",  "DT",  "NN"]
	},
	{
		"0": {t: "Tomorrow",  l: "MWE",  p: 1},
		"1": {t: "morning",  l: "DEP",  p: 4},
		"2": {t: "after",  l: "CASE",  p: 4},
		"3": {t: "the",  l: "MWE",  p: 4},
		"4": {t: "meeting",  l: "ROOT",  p: -1},
		"tokens": ["Tomorrow",  "morning",  "after",  "the",  "meeting"],
		"tags": ["NN",  "NN",  "IN",  "DT",  "NN"]
	},
	{
		"0": {t: "she",  l: "NSUBJ",  p: 1},
		"1": {t: "gave",  l: "ROOT",  p: -1},
		"2": {t: "me",  l: "DOBJ",  p: 1},
		"3": {t: "a",  l: "MWE",  p: 4},
		"4": {t: "raise",  l: "IOBJ",  p: 1},
		"tokens": ["she",  "gave",  "me",  "a",  "raise"],
		"tags": ["PRP",  "VBD",  "PRP",  "DT",  "NN"]
	},
	{
		"0": {t: "Copying",  l: "DEP",  p: 3},
		"1": {t: "to",  l: "CASE",  p: 3},
		"2": {t: "other",  l: "MWE",  p: 3},
		"3": {t: "programs",  l: "ROOT",  p: -1},
		"tokens": ["Copying",  "to",  "other",  "programs"],
		"tags": ["NNP",  "TO",  "JJ",  "NNS"]
	},
	{
		"0": {t: "Custom",  l: "DEP",  p: 3},
		"1": {t: "grouping",  l: "DEP",  p: 3},
		"2": {t: "in",  l: "CASE",  p: 3},
		"3": {t: "PivotTable",  l: "ROOT",  p: -1},
		"4": {t: "view",  l: "DEP",  p: 3},
		"tokens": ["Custom",  "grouping",  "in",  "PivotTable",  "view"],
		"tags": ["NNP",  "NN",  "IN",  "NNP",  "NN"]
	},
	{
		"0": {t: "PivotTable",  l: "DEP",  p: 4},
		"1": {t: "view",  l: "DEP",  p: 4},
		"2": {t: "with",  l: "CASE",  p: 4},
		"3": {t: "custom",  l: "MWE",  p: 4},
		"4": {t: "groups",  l: "ROOT",  p: -1},
		"tokens": ["PivotTable",  "view",  "with",  "custom",  "groups"],
		"tags": ["NNP",  "NN",  "IN",  "NN",  "NNS"]
	},
	{
		"0": {t: "But",  l: "CC",  p: 1},
		"1": {t: "following",  l: "ROOT",  p: -1},
		"2": {t: "Stillman",  l: "NSUBJ",  p: 5},
		"3": {t: "was",  l: "AUX",  p: 5},
		"4": {t: "not",  l: "ADVMOD",  p: 5},
		"5": {t: "wandering",  l: "ADVCL",  p: 1},
		"tokens": ["But",  "following",  "Stillman",  "was",  "not",  "wandering"],
		"tags": ["CC",  "VBG",  "NNP",  "VBD",  "RB",  "VBG"]
	},
	{
		"0": {t: "Changes",  l: "DEP",  p: 3},
		"1": {t: "then",  l: "ADVMOD",  p: 3},
		"2": {t: "more",  l: "MWE",  p: 3},
		"3": {t: "changes",  l: "ROOT",  p: -1},
		"4": {t: "still",  l: "DEP",  p: 3},
		"tokens": ["Changes",  "then",  "more",  "changes",  "still"],
		"tags": ["NNS",  "RB",  "JJR",  "NNS",  "RB"]
	},
	{
		"0": {t: "Then",  l: "ADVMOD",  p: 4},
		"1": {t: "hand",  l: "MWE",  p: 2},
		"2": {t: "luggage",  l: "NSUBJPASS",  p: 4},
		"3": {t: "is",  l: "AUXPASS",  p: 4},
		"4": {t: "opened",  l: "ROOT",  p: -1},
		"tokens": ["Then",  "hand",  "luggage",  "is",  "opened"],
		"tags": ["RB",  "NN",  "NN",  "VBZ",  "VBN"]
	},
	{
		"0": {t: "The",  l: "MWE",  p: 1},
		"1": {t: "stewardesses",  l: "NSUBJ",  p: 2},
		"2": {t: "are",  l: "ROOT",  p: -1},
		"3": {t: "furious",  l: "AMOD",  p: 2},
		"4": {t: "with",  l: "CASE",  p: 5},
		"5": {t: "them",  l: "OBL",  p: 2},
		"tokens": ["The",  "stewardesses",  "are",  "furious",  "with",  "them"],
		"tags": ["DT",  "NNS",  "VBP",  "JJ",  "IN",  "PRP"]
	},
	{
		"0": {t: "That",  l: "DEP",  p: 5},
		"1": {t: "'s",  l: "DEP",  p: 5},
		"2": {t: "very",  l: "MWE",  p: 3},
		"3": {t: "generous",  l: "DEP",  p: 5},
		"4": {t: "I",  l: "NSUBJ",  p: 5},
		"5": {t: "say",  l: "ROOT",  p: -1},
		"tokens": ["That",  "'s",  "very",  "generous",  "I",  "say"],
		"tags": ["DT",  "POS",  "RB",  "JJ",  "PRP",  "VBP"]
	},
	{
		"0": {t: "Or",  l: "CC",  p: 1},
		"1": {t: "of",  l: "CASE",  p: 3},
		"2": {t: "the",  l: "MWE",  p: 3},
		"3": {t: "Godfather",  l: "ROOT",  p: -1},
		"tokens": ["Or",  "of",  "the",  "Godfather"],
		"tags": ["CC",  "IN",  "DT",  "NNP"]
	},
	{
		"0": {t: "It",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "just",  l: "ADVMOD",  p: 4},
		"3": {t: "a",  l: "MWE",  p: 4},
		"4": {t: "hole",  l: "DOBJ",  p: 1},
		"tokens": ["It",  "was",  "just",  "a",  "hole"],
		"tags": ["PRP",  "VBD",  "RB",  "DT",  "NN"]
	},
	{
		"0": {t: "A",  l: "MWE",  p: 2},
		"1": {t: "great",  l: "MWE",  p: 2},
		"2": {t: "silence",  l: "ROOT",  p: -1},
		"3": {t: "around",  l: "ACL",  p: 2},
		"4": {t: "and",  l: "CC",  p: 5},
		"5": {t: "above",  l: "ACL",  p: 2},
		"tokens": ["A",  "great",  "silence",  "around",  "and",  "above"],
		"tags": ["DT",  "JJ",  "NN",  "IN",  "CC",  "IN"]
	},
	{
		"0": {t: "Why",  l: "ADVMOD",  p: 1},
		"1": {t: "do",  l: "ROOT",  p: -1},
		"2": {t: "I",  l: "NSUBJ",  p: 3},
		"3": {t: "raise",  l: "CCOMP",  p: 1},
		"4": {t: "the",  l: "MWE",  p: 5},
		"5": {t: "matter",  l: "DOBJ",  p: 3},
		"tokens": ["Why",  "do",  "I",  "raise",  "the",  "matter"],
		"tags": ["WRB",  "VBP",  "PRP",  "VBP",  "DT",  "NN"]
	},
	{
		"0": {t: "The",  l: "MWE",  p: 1},
		"1": {t: "debate",  l: "NSUBJPASS",  p: 3},
		"2": {t: "is",  l: "AUXPASS",  p: 3},
		"3": {t: "closed",  l: "ROOT",  p: -1},
		"tokens": ["The",  "debate",  "is",  "closed"],
		"tags": ["DT",  "NN",  "VBZ",  "VBN"]
	},
	{
		"0": {t: "Question",  l: "DEP",  p: 5},
		"1": {t: "No-44",  l: "DEP",  p: 5},
		"2": {t: "by",  l: "CASE",  p: 5},
		"3": {t: "Bernie",  l: "MWE",  p: 5},
		"4": {t: "Malone",  l: "MWE",  p: 5},
		"5": {t: "H-0209/99",  l: "ROOT",  p: -1},
		"tokens": ["Question",  "No-44",  "by",  "Bernie",  "Malone",  "H-0209/99"],
		"tags": ["NN",  "JJ",  "IN",  "NNP",  "NNP",  "NNP"]
	},
	{
		"0": {t: "That",  l: "DEP",  p: 4},
		"1": {t: "'s",  l: "DEP",  p: 4},
		"2": {t: "what",  l: "DOBJ",  p: 4},
		"3": {t: "I",  l: "NSUBJ",  p: 4},
		"4": {t: "mean",  l: "ROOT",  p: -1},
		"tokens": ["That",  "'s",  "what",  "I",  "mean"],
		"tags": ["DT",  "POS",  "WP",  "PRP",  "VBP"]
	},
	{
		"0": {t: "But",  l: "CC",  p: 2},
		"1": {t: "my",  l: "MWE",  p: 2},
		"2": {t: "mother",  l: "NSUBJ",  p: 3},
		"3": {t: "is",  l: "ROOT",  p: -1},
		"4": {t: "a",  l: "MWE",  p: 5},
		"5": {t: "Gala",  l: "DOBJ",  p: 3},
		"tokens": ["But",  "my",  "mother",  "is",  "a",  "Gala"],
		"tags": ["CC",  "PRP$",  "NN",  "VBZ",  "DT",  "NNP"]
	},
	{
		"0": {t: "What",  l: "DET",  p: 4},
		"1": {t: "about",  l: "CASE",  p: 4},
		"2": {t: "my",  l: "MWE",  p: 4},
		"3": {t: "assistant",  l: "MWE",  p: 4},
		"4": {t: "cook",  l: "ROOT",  p: -1},
		"tokens": ["What",  "about",  "my",  "assistant",  "cook"],
		"tags": ["WP",  "IN",  "PRP$",  "NN",  "NN"]
	},
	{
		"0": {t: "It",  l: "NSUBJ",  p: 1},
		"1": {t: "was",  l: "ROOT",  p: -1},
		"2": {t: "a",  l: "MWE",  p: 5},
		"3": {t: "brilliant",  l: "MWE",  p: 5},
		"4": {t: "sunny",  l: "MWE",  p: 5},
		"5": {t: "day",  l: "DOBJ",  p: 1},
		"tokens": ["It",  "was",  "a",  "brilliant",  "sunny",  "day"],
		"tags": ["PRP",  "VBD",  "DT",  "JJ",  "JJ",  "NN"]
	},
	{
		"0": {t: "Why",  l: "ADVMOD",  p: 1},
		"1": {t: "said",  l: "ROOT",  p: -1},
		"2": {t: "Harry",  l: "DOBJ",  p: 1},
		"3": {t: "in",  l: "CASE",  p: 4},
		"4": {t: "surprise",  l: "OBL",  p: 1},
		"tokens": ["Why",  "said",  "Harry",  "in",  "surprise"],
		"tags": ["WRB",  "VBD",  "NNP",  "IN",  "NN"]
	},
	{
		"0": {t: "which",  l: "DET",  p: 1},
		"1": {t: "book",  l: "NMOD",  p: 3},
		"2": {t: "you",  l: "NSUBJ",  p: 3},
		"3": {t: "prefer",  l: "ROOT",  p: -1},
		"tokens": ["which",  "book",  "you",  "prefer"],
		"tags": ["WDT",  "NN",  "PRP",  "VBP"]
	},
	{
		"0": {t: "whose",  l: "DEP",  p: 2},
		"1": {t: "book",  l: "NSUBJ",  p: 2},
		"2": {t: "is",  l: "ROOT",  p: -1},
		"3": {t: "this",  l: "DOBJ",  p: 2},
		"4": {t: "?",  l: "PUNCT",  p: 2},
		"tokens": ["whose",  "book",  "is",  "this",  "?"],
		"tags": ["WP$",  "NN",  "VBZ",  "DT",  "."]
	},
	{
		"0": {t: "Send",  l: "ROOT",  p: -1},
		"1": {t: "120",  l: "NUMMOD",  p: 2},
		"2": {t: "USD",  l: "DOBJ",  p: 0},
		"3": {t: "to",  l: "CASE",  p: 4},
		"4": {t: "Anton",  l: "OBL",  p: 0},
		"tokens": ["Send",  "120",  "USD",  "to",  "Anton"],
		"tags": ["VB",  "CD",  "NNP",  "TO",  "NNP"]
	},
	{
		"0": {t: "Send",  l: "ROOT",  p: -1},
		"1": {t: "120",  l: "NUMMOD",  p: 2},
		"2": {t: "$",  l: "DOBJ",  p: 0},
		"3": {t: "to",  l: "CASE",  p: 4},
		"4": {t: "Anton",  l: "OBL",  p: 0},
		"tokens": ["Send",  "120",  "$",  "to",  "Anton"],
		"tags": ["VB",  "CD",  "$",  "TO",  "NNP"]
	},
	{
		"0": {t: "Send",  l: "ROOT",  p: -1},
		"1": {t: "120",  l: "NUMMOD",  p: 2},
		"2": {t: "%",  l: "DOBJ",  p: 0},
		"3": {t: "to",  l: "CASE",  p: 4},
		"4": {t: "Anton",  l: "OBL",  p: 0},
		"tokens": ["Send",  "120",  "%",  "to",  "Anton"],
		"tags": ["VB",  "CD",  "SYM",  "TO",  "NNP"]
	},
	{
		"0": {t: "Send",  l: "ROOT",  p: -1},
		"1": {t: "four",  l: "NUMMOD",  p: 2},
		"2": {t: "bucks",  l: "DOBJ",  p: 0},
		"3": {t: "to",  l: "CASE",  p: 4},
		"4": {t: "Anton",  l: "OBL",  p: 0},
		"tokens": ["Send",  "four",  "bucks",  "to",  "Anton"],
		"tags": ["VB",  "CD",  "NNS",  "TO",  "NNP"]
	},
	{
		"0": {t: "Send",  l: "ROOT",  p: -1},
		"1": {t: "four",  l: "NUMMOD",  p: 2},
		"2": {t: "quids",  l: "DOBJ",  p: 0},
		"3": {t: "to",  l: "CASE",  p: 4},
		"4": {t: "Anton",  l: "OBL",  p: 0},
		"tokens": ["Send",  "four",  "quids",  "to",  "Anton"],
		"tags": ["VB",  "CD",  "NNS",  "TO",  "NNP"]
	},
	{
		"0": {t: "47",  l: "NUMMOD",  p: 1},
		"1": {t: "is",  l: "ROOT",  p: -1},
		"2": {t: "the",  l: "MWE",  p: 3},
		"3": {t: "codename",  l: "DOBJ",  p: 1},
		"4": {t: "for",  l: "CASE",  p: 5},
		"5": {t: "hitman",  l: "OBL",  p: 1},
		"tokens": ["47",  "is",  "the",  "codename",  "for",  "hitman"],
		"tags": ["CD",  "VBZ",  "DT",  "NN",  "IN",  "NN"]
	},
	{
		"0": {t: "My",  l: "MWE",  p: 1},
		"1": {t: "weight",  l: "NSUBJ",  p: 2},
		"2": {t: "is",  l: "ROOT",  p: -1},
		"3": {t: "59",  l: "NUMMOD",  p: 4},
		"4": {t: "KG",  l: "DOBJ",  p: 2},
		"tokens": ["My",  "weight",  "is",  "59",  "KG"],
		"tags": ["PRP$",  "NN",  "VBZ",  "CD",  "NNP"]
	},
	{
		"0": {t: "My",  l: "MWE",  p: 1},
		"1": {t: "height",  l: "NSUBJ",  p: 2},
		"2": {t: "is",  l: "ROOT",  p: -1},
		"3": {t: "159",  l: "NUMMOD",  p: 4},
		"4": {t: "CM",  l: "DOBJ",  p: 2},
		"tokens": ["My",  "height",  "is",  "159",  "CM"],
		"tags": ["PRP$",  "NN",  "VBZ",  "CD",  "NN"]
	},
	{
		"0": {t: "My",  l: "MWE",  p: 1},
		"1": {t: "weight",  l: "NSUBJ",  p: 2},
		"2": {t: "is",  l: "ROOT",  p: -1},
		"3": {t: "59",  l: "NUMMOD",  p: 4},
		"4": {t: "kilogram",  l: "DOBJ",  p: 2},
		"tokens": ["My",  "weight",  "is",  "59",  "kilogram"],
		"tags": ["PRP$",  "NN",  "VBZ",  "CD",  "NN"]
	},
	{
		"0": {t: "My",  l: "MWE",  p: 1},
		"1": {t: "height",  l: "NSUBJ",  p: 2},
		"2": {t: "is",  l: "ROOT",  p: -1},
		"3": {t: "159",  l: "NUMMOD",  p: 4},
		"4": {t: "centimeter",  l: "DOBJ",  p: 2},
		"tokens": ["My",  "height",  "is",  "159",  "centimeter"],
		"tags": ["PRP$",  "NN",  "VBZ",  "CD",  "NN"]
	},
	{
		"0": {t: "My",  l: "MWE",  p: 1},
		"1": {t: "space",  l: "NSUBJ",  p: 2},
		"2": {t: "is",  l: "ROOT",  p: -1},
		"3": {t: "159",  l: "NUMMOD",  p: 5},
		"4": {t: "square",  l: "MWE",  p: 5},
		"5": {t: "centimeter",  l: "DOBJ",  p: 2},
		"tokens": ["My",  "space",  "is",  "159",  "square",  "centimeter"],
		"tags": ["PRP$",  "NN",  "VBZ",  "CD",  "JJ",  "NN"]
	},
	{
		"0": {t: "The",  l: "MWE",  p: 1},
		"1": {t: "building",  l: "NSUBJ",  p: 2},
		"2": {t: "is",  l: "ROOT",  p: -1},
		"3": {t: "55",  l: "NUMMOD",  p: 4},
		"4": {t: "foot",  l: "DOBJ",  p: 2},
		"5": {t: "tall",  l: "AMOD",  p: 2},
		"tokens": ["The",  "building",  "is",  "55",  "foot",  "tall"],
		"tags": ["DT",  "NN",  "VBZ",  "CD",  "NN",  "JJ"]
	},
	{
		"0": {t: "I",  l: "NSUBJ",  p: 1},
		"1": {t: "smoked",  l: "ROOT",  p: -1},
		"2": {t: "3",  l: "NUMMOD",  p: 3},
		"3": {t: "cigarettes",  l: "DOBJ",  p: 1},
		"4": {t: "this",  l: "MWE",  p: 5},
		"5": {t: "morning",  l: "IOBJ",  p: 1},
		"tokens": ["I",  "smoked",  "3",  "cigarettes",  "this",  "morning"],
		"tags": ["PRP",  "VBD",  "CD",  "NNS",  "DT",  "NN"]
	},
	{
		"0": {t: "October",  l: "NMOD",  p: 2},
		"1": {t: "sales",  l: "NSUBJ",  p: 2},
		"2": {t: "inched",  l: "ROOT",  p: -1},
		"3": {t: "down",  l: "ADVMOD",  p: 5},
		"4": {t: "0.4",  l: "NUMMOD",  p: 5},
		"5": {t: "%",  l: "DOBJ",  p: 2},
		"tokens": ["October",  "sales",  "inched",  "down",  "0.4",  "%"],
		"tags": ["NNP",  "NNS",  "VBD",  "RB",  "CD",  "SYM"]
	}
];

export default cases;