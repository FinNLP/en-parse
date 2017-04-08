import {ResultNode} from "../../src/index";

interface Case {
	tokens:string[];
	tags:string[];
	expectedResult:ResultNode[];
}

const cases:Case[] = [
	{
		"tags": ["PRP","VBD","PRP","DT","NN"],
		"tokens": ["She","gave","me","a","raise"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "IOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["VBD","TO","VB","NNP"],
		"tokens": ["declared","to","be","Jim"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 2
			},
			{
				"label": "CCOMP",
				"type": "VB",
				"parent": 0
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["VBD","TO","VB","DT","NN"],
		"tokens": ["declared","to","save","the","file"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 2
			},
			{
				"label": "CCOMP",
				"type": "VB",
				"parent": 0
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["VB","NNP","VB","DT","NN"],
		"tokens": ["let","Markey","carry","the","legislation"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "CCOMP",
				"type": "VB",
				"parent": 0
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["WDT","VBD","PRP","."],
		"tokens": ["Which","was","it","?"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "WDT",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WP","VBD","PRP","."],
		"tokens": ["What","was","it","?"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "WP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WP","PRP","VBD","VBZ","JJ"],
		"tokens": ["what","they","said","is","interesting"],
		"expectedResult": [
			{
				"label": "DOBJ",
				"type": "WP",
				"parent": 2
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "COP",
				"type": "VP",
				"parent": 4
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBZ","PRP","IN","TO","VB"],
		"tokens": ["He","says","you","like","to","swim"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ADVMARK",
				"type": "PP",
				"parent": 5
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 5
			},
			{
				"label": "ADVCL",
				"type": "VB",
				"parent": 1
			}
		]
	},
	{
		"tags": ["DT","NN","VBD","TO","VB","NN"],
		"tokens": ["the","boss","said","to","start","digging"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "CCOMP",
				"type": "VB",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 4
			}
		]
	},
	{
		"tags": ["VB","DT","NNS","TO","DT","NNS"],
		"tokens": ["Give","the","toys","to","the","children"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["PRP","VBD","PRP","EM"],
		"tokens": ["I","loved","it",":)"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "DISCOURSE",
				"type": "EM",
				"parent": 2
			}
		]
	},
	{
		"tags": ["NNP","VBD","CD","NNS"],
		"tokens": ["Sam","ate","3","burgers"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["NNP","VBD","$","CD"],
		"tokens": ["Rick","had","$","50"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBP","VBN","VBN","IN"],
		"tokens": ["I","have","been","thrown","inside"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "VBN",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "PP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["PRP","VBZ","VBN","VBN"],
		"tokens": ["It","has","been","thrown"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "VBN",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			}
		]
	},
	{
		"tags": ["NNP","VBZ","JJ","CC","JJ"],
		"tokens": ["Bill","is","big","and","honest"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 1
			},
			{
				"label": "CC",
				"type": "CC",
				"parent": 4
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","JJR","IN"],
		"tokens": ["It","was","bigger","before"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 1
			},
			{
				"label": "ADVMOD",
				"type": "PP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["JJR","IN","DT","NNS"],
		"tokens": ["bigger","between","the","trees"],
		"expectedResult": [
			{
				"label": "DEP",
				"type": "ADJ",
				"parent": 3
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 3
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "NP",
				"parent": -1
			}
		]
	},
	{
		"tags": ["PRP","VBD","PRP","IN"],
		"tokens": ["I","did","it","before"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ADVMOD",
				"type": "PP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","DT","NN","POS","NN"],
		"tokens": ["I","bought","The","chair","'s","office"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["NNP","VBD","VBN","IN","NNP"],
		"tokens": ["Dole","was","defeated","by","Clinton"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 4
			},
			{
				"label": "NMOD",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBZ","VBN","RB"],
		"tokens": ["It","has","been","fast"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBZ","VBG","JJR"],
		"tokens": ["It","is","being","slower"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUX",
				"type": "VP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBZ","TO","VB","JJR"],
		"tokens": ["It","promises","to","be","better"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NMOD",
				"type": "TO",
				"parent": 1
			},
			{
				"label": "COP",
				"type": "VB",
				"parent": 4
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WP","PRP","VBP","VBN","IN"],
		"tokens": ["What","I","have","done","before"],
		"expectedResult": [
			{
				"label": "DOBJ",
				"type": "WP",
				"parent": 3
			},
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "PP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["PRP","VBD","JJR","IN"],
		"tokens": ["it","was","bigger","before"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 1
			},
			{
				"label": "ADVMOD",
				"type": "PP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBZ","RB","VBN","JJ","IN"],
		"tokens": ["it","has","not","changed","much","since"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 3
			},
			{
				"label": "ADVMOD",
				"type": "PP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["NN","WDT","VBD","RP","PRP$","NN"],
		"tokens": ["information","which","drowned","out","my","sanity"],
		"expectedResult": [
			{
				"label": "NMOD",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "NSUBJ",
				"type": "WDT",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "VPRT",
				"type": "PRT",
				"parent": 2
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBD","DT","NN","JJ"],
		"tokens": ["She","entered","the","room","sad"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","DT","NN","PRP","VBP"],
		"tokens": ["I","saw","the","man","you","love"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "XCOMP",
				"type": "VP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","JJR","NN"],
		"tokens": ["I","saw","bigger","man"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WDT","PRP","VBP","VBN","RP"],
		"tokens": ["which","I","have","thrown","out"],
		"expectedResult": [
			{
				"label": "DOBJ",
				"type": "WDT",
				"parent": 3
			},
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "VPRT",
				"type": "PRT",
				"parent": 3
			}
		]
	},
	{
		"tags": ["WDT","VBP","VBN","VBN"],
		"tokens": ["which","have","been","thrown"],
		"expectedResult": [
			{
				"label": "DOBJ",
				"type": "WDT",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "VBN",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			}
		]
	},
	{
		"tags": ["PRP","VBZ","RB","JJ","NN"],
		"tokens": ["it","is","just","done","garbage"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 4
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WRB","VBP","PRP","NNP"],
		"tokens": ["How","are","you","mary"],
		"expectedResult": [
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","DT","NN"],
		"tokens": ["I","saw","a","girl"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["VB","DT","NN","TO","NNP"],
		"tokens": ["Send","the","email","to","Tony"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["VB","DT","NN","IN","NNP"],
		"tokens": ["Get","the","bag","from","Tony"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["PRP","VBD","WP","VBD"],
		"tokens": ["I","liked","what","happened"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NSUBJ",
				"type": "WP",
				"parent": 3
			},
			{
				"label": "XCOMP",
				"type": "VP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WP","VBD","PRP","VBP","."],
		"tokens": ["what","did","you","do","?"],
		"expectedResult": [
			{
				"label": "DOBJ",
				"type": "WP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 3
			}
		]
	},
	{
		"tags": ["NN","VBZ","DT","NN"],
		"tokens": ["Something","is","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["NN","MD","RB","VB","DT","NN"],
		"tokens": ["Something","can","not","be","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "MD",
				"parent": 3
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["NN","VBZ","RB","VBN","DT","NN"],
		"tokens": ["Something","has","n't","been","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["NN","VBD","DT","NN"],
		"tokens": ["Something","was","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["NN","MD","VB","DT","NN"],
		"tokens": ["Something","will","be","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUX",
				"type": "MD",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["NN","MD","VB","DT","NN"],
		"tokens": ["Something","can","be","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUX",
				"type": "MD",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["NN","MD","VB","DT","NN"],
		"tokens": ["Something","could","be","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUX",
				"type": "MD",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["NN","MD","VB","VBN","DT","NN"],
		"tokens": ["Something","could","have","been","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "MD",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VB",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["NN","MD","VB","VBN","DT","NN"],
		"tokens": ["Something","should","have","been","a","thing"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "MD",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VB",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["PRP","MD","VB","DT","NN","."],
		"tokens": ["you","can","do","the","laundry","!"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUX",
				"type": "MD",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 2
			}
		]
	},
	{
		"tags": ["MD","PRP","VBP","DT","NN","."],
		"tokens": ["will","you","do","the","laundry","?"],
		"expectedResult": [
			{
				"label": "AUX",
				"type": "MD",
				"parent": 2
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBD","JJR","IN","IN"],
		"tokens": ["I","scored","higher","than","before"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 1
			},
			{
				"label": "EXT",
				"type": "PP",
				"parent": 4
			},
			{
				"label": "ADVMOD",
				"type": "PP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","RB","TO","DT","NN"],
		"tokens": ["I","ran","closely","to","the","winner"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 5
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","RB","VBD","TO","DT","NN"],
		"tokens": ["I","closely","came","to","the","scene"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","RB","VBP","TO","VB","PRP"],
		"tokens": ["I","really","have","to","visit","him"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 4
			},
			{
				"label": "AUX",
				"type": "VP",
				"parent": 4
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 4
			}
		]
	},
	{
		"tags": ["PRP","VBD","DT","JJ","NN"],
		"tokens": ["I","opened","the","white","door"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","RB","JJ","."],
		"tokens": ["He","was","blatantly","wrong","."],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "ADJP",
				"parent": 3
			},
			{
				"label": "AMOD",
				"type": "ADJP",
				"parent": 1
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","RB","VBP","."],
		"tokens": ["I","kindly","disagree","."],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBD","TO","VB","JJ"],
		"tokens": ["I","tried","to","go","vegan"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 3
			},
			{
				"label": "CCOMP",
				"type": "VB",
				"parent": 1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 3
			}
		]
	},
	{
		"tags": ["RB","JJ","TO","VB","VBN"],
		"tokens": ["only","few","to","be","sent"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "ADJP",
				"parent": 1
			},
			{
				"label": "AMOD",
				"type": "ADJP",
				"parent": 4
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "AUXPASS",
				"type": "VB",
				"parent": 4
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			}
		]
	},
	{
		"tags": ["PRP","VBD","NNP","CC","NNP"],
		"tokens": ["I","followed","Morgan","and","Alex"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "CC",
				"type": "CC",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBP","RB","VBG","NN"],
		"tokens": ["I","am","not","going","tomorrow"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["PRP","VBP","RB","RB"],
		"tokens": ["I","am","still","here"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBP","RB","IN","DT","NN"],
		"tokens": ["I","am","still","in","the","garage"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 5
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP","VBD","PRP","VBD","VBG"],
		"tokens": ["I","thought","it","lacked","meaning"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "CCOMP",
				"type": "VP",
				"parent": 1
			},
			{
				"label": "XCOMP",
				"type": "VP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["DT","NN","VBD","TO","VB","NN"],
		"tokens": ["The","boss","said","to","start","digging"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AUX",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "CCOMP",
				"type": "VB",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 4
			}
		]
	},
	{
		"tags": ["DT","NN","VBZ","VBN","NN"],
		"tokens": ["The","company","has","declared","bankruptcy"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["PRP","VBP","VBN","RB","DT","NN"],
		"tokens": ["I","have","been","up","all","night"],
		"expectedResult": [
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["WRB","VBP","PRP","VBG"],
		"tokens": ["Why","are","you","asking"],
		"expectedResult": [
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			}
		]
	},
	{
		"tags": ["PRP","VBP","NNS","CC","NNS"],
		"tokens": ["they","operate","ships","and","banks"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "CC",
				"type": "CC",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["DT","NN","VBD","IN","DT","NN"],
		"tokens": ["The","dog","barked","at","the","cat"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["NN","NN","IN","DT","NN"],
		"tokens": ["Tomorrow","morning","after","the","meeting"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "DEP",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 4
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "ROOT",
				"type": "NP",
				"parent": -1
			}
		]
	},
	{
		"tags": ["PRP","VBD","PRP","DT","NN"],
		"tokens": ["she","gave","me","a","raise"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "IOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["NNP","TO","JJ","NNS"],
		"tokens": ["Copying","to","other","programs"],
		"expectedResult": [
			{
				"label": "DEP",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 3
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "NP",
				"parent": -1
			}
		]
	},
	{
		"tags": ["CC","VBG","NNP","VBD","RB","VBG"],
		"tokens": ["But","following","Stillman","was","not","wandering"],
		"expectedResult": [
			{
				"label": "CC",
				"type": "CC",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "AUX",
				"type": "VP",
				"parent": 5
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 5
			},
			{
				"label": "ADVCL",
				"type": "VP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["NNS","RB","JJR","NNS","RB"],
		"tokens": ["Changes","then","more","changes","still"],
		"expectedResult": [
			{
				"label": "DEP",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "NP",
				"parent": -1
			},
			{
				"label": "DEP",
				"type": "ADV",
				"parent": 3
			}
		]
	},
	{
		"tags": ["RB","NN","NN","VBZ","VBN"],
		"tokens": ["Then","hand","luggage","is","opened"],
		"expectedResult": [
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 4
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 4
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			}
		]
	},
	{
		"tags": ["DT","NNS","VBP","JJ","IN","PRP"],
		"tokens": ["The","stewardesses","are","furious","with","them"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 2
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 5
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["CC","IN","DT","NNP"],
		"tokens": ["Or","of","the","Godfather"],
		"expectedResult": [
			{
				"label": "CC",
				"type": "CC",
				"parent": 1
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 3
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "NP",
				"parent": -1
			}
		]
	},
	{
		"tags": ["PRP","VBD","RB","DT","NN"],
		"tokens": ["It","was","just","a","hole"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 4
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["DT","JJ","NN","IN","CC","IN"],
		"tokens": ["A","great","silence","around","and","above"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "NP",
				"parent": -1
			},
			{
				"label": "ACL",
				"type": "PP",
				"parent": 2
			},
			{
				"label": "CC",
				"type": "CC",
				"parent": 5
			},
			{
				"label": "ACL",
				"type": "PP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["WRB","VBP","PRP","VBP","DT","NN"],
		"tokens": ["Why","do","I","raise","the","matter"],
		"expectedResult": [
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 3
			},
			{
				"label": "AUX",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["DT","NN","VBZ","VBN"],
		"tokens": ["The","debate","is","closed"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJPASS",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "AUXPASS",
				"type": "VP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VBN",
				"parent": -1
			}
		]
	},
	{
		"tags": ["NN","JJ","IN","NNP","NNP","NNP"],
		"tokens": ["Question","No-44","by","Bernie","Malone","H-0209/99"],
		"expectedResult": [
			{
				"label": "DEP",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DEP",
				"type": "ADJ",
				"parent": 5
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "ROOT",
				"type": "NP",
				"parent": -1
			}
		]
	},
	{
		"tags": ["DT","POS","WP","PRP","VBP"],
		"tokens": ["That","'s","what","I","mean"],
		"expectedResult": [
			{
				"label": "DEP",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "DEP",
				"type": "POS",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "WP",
				"parent": 4
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 4
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			}
		]
	},
	{
		"tags": ["CC","PRP$","NN","VBZ","DT","NNP"],
		"tokens": ["But","my","mother","is","a","Gala"],
		"expectedResult": [
			{
				"label": "CC",
				"type": "CC",
				"parent": 2
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 3
			}
		]
	},
	{
		"tags": ["PRP","VBD","DT","JJ","JJ","NN"],
		"tokens": ["It","was","a","brilliant","sunny","day"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WRB","VBD","NNP","IN","NN"],
		"tokens": ["Why","said","Harry","in","surprise"],
		"expectedResult": [
			{
				"label": "ADVMOD",
				"type": "ADV",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["WP$","NN","VBZ","DT","."],
		"tokens": ["whose","book","is","this","?"],
		"expectedResult": [
			{
				"label": "DOBJ",
				"type": "WP$",
				"parent": 2
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "PUNCT",
				"type": "PUNCT",
				"parent": 2
			}
		]
	},
	{
		"tags": ["VB","CD","NNP","TO","NNP"],
		"tokens": ["Send","120","USD","to","Anton"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["VB","CD","$","TO","NNP"],
		"tokens": ["Send","120","$","to","Anton"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["VB","CD","SYM","TO","NNP"],
		"tokens": ["Send","120","%","to","Anton"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["VB","CD","NNS","TO","NNP"],
		"tokens": ["Send","four","bucks","to","Anton"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["VB","CD","NNS","TO","NNP"],
		"tokens": ["Send","four","quids","to","Anton"],
		"expectedResult": [
			{
				"label": "ROOT",
				"type": "VB",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 2
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 0
			},
			{
				"label": "CASE",
				"type": "TO",
				"parent": 4
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 0
			}
		]
	},
	{
		"tags": ["CD","VBZ","DT","NN","IN","NN"],
		"tokens": ["47","is","the","codename","for","hitman"],
		"expectedResult": [
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "CASE",
				"type": "PP",
				"parent": 5
			},
			{
				"label": "OBL",
				"type": "NP",
				"parent": 1
			}
		]
	},
	{
		"tags": ["PRP$","NN","VBZ","CD","NNP"],
		"tokens": ["My","weight","is","59","KG"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP$","NN","VBZ","CD","NN"],
		"tokens": ["My","height","is","159","CM"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP$","NN","VBZ","CD","NN"],
		"tokens": ["My","weight","is","59","kilogram"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP$","NN","VBZ","CD","NN"],
		"tokens": ["My","height","is","159","centimeter"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP$","NN","VBZ","CD","JJ","NN"],
		"tokens": ["My","space","is","159","square","centimeter"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 5
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			}
		]
	},
	{
		"tags": ["DT","NN","VBZ","CD","NN","JJ"],
		"tokens": ["The","building","is","55","foot","tall"],
		"expectedResult": [
			{
				"label": "EXT",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 4
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 2
			},
			{
				"label": "AMOD",
				"type": "ADJ",
				"parent": 2
			}
		]
	},
	{
		"tags": ["PRP","VBD","CD","NNS","DT","NN"],
		"tokens": ["I","smoked","3","cigarettes","this","morning"],
		"expectedResult": [
			{
				"label": "NSUBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "ROOT",
				"type": "VP",
				"parent": -1
			},
			{
				"label": "NUMMOD",
				"type": "CD",
				"parent": 3
			},
			{
				"label": "DOBJ",
				"type": "NP",
				"parent": 1
			},
			{
				"label": "EXT",
				"type": "NP",
				"parent": 5
			},
			{
				"label": "IOBJ",
				"type": "NP",
				"parent": 1
			}
		]
	}
];

export default cases;