# English Parse
English language syntactic dependency parser.

> **important**
> This project is in a very early stage, it's rather an experiment than a real a project.
> Using it in production may hurt your feelings.
>

## Installation and Usage

```
npm i --save en-parse
```

```javascript
const parser = require("en-parse");
var tokens = ["The", "problem", "is", "that", "this", "has", "never", "been", "tried", "."];
var tags = ["DT","NN","VBZ","IN","DT","VBZ","RB","VBN","VBD","PUNCT"];
let parsed = parser(["PRP","VBP","TO","VBP"],["i","like","to","parse"]);
```

> NOTE:
> tokens should be normalized (contractions, abbreviations and such all resolved to it's normal form).
>


The `parsed` variable is now an array like this one:

```javascript
[
  {
    "label": "MWE",
    "type": "NP",
    "master": 1
  },
  {
    "label": "NSUBJ",
    "type": "NP",
    "master": 2
  },
  {
    "label": "ROOT",
    "type": "VP",
    "master": -1
  },
  {
    "label": "COMPMARK",
    "type": "PP",
    "master": 5
  },
  {
    "label": "NSUBJ",
    "type": "NP",
    "master": 5
  },
  {
    "label": "XCOMP",
    "type": "VP",
    "master": 2
  },
  {
    "label": "ADVMOD",
    "type": "ADV",
    "master": 8
  },
  {
    "label": "AUX",
    "type": "VBN",
    "master": 8
  },
  {
    "label": "ADVCL",
    "type": "VP",
    "master": 5
  },
  {
    "label": "PUNCT",
    "type": "PUNCT",
    "master": 2
  }
]
```

## Annotation Specs:

### Core Nominal Arguments

Annotation | Name | Example
--- | --- | ---
**`NSUBJ`** | Nominal Subject | `I` like you
**`DOBJ`** | Direct Object | I like `you`
**`IOBJ`** | Indirect Object | she gave me `a book`
**`NSUBJPASS`** | Nominal Subject (passive) | `I` have been given a chance
**`ATTR`** | Attribute | This is `awesome`
**`CCOMP`** | Clausal Complement | The boss ordered to `dig` the hole
**`XCOMP`** | Open Clausal Complement | The boss told us to `dig`
**`OBL`** | Oblique Object | Give the toys to `the children`
**`EXPL`** | Expletive | I have been `there`
**`ADVCL`** | Adverb Clause Modifier | We were walking as the rain was `falling`
**`ADVMOD`** | Adverbial modifier | I don't eat `genetically` modified food.
**`DISCOURSE`** | Discourse | I like that `:)`
**`VPRT`** | Verbal Particle | I switched the TV `off`
**`AUX`** | Auxiliary | I am `going` to buy a new computer
**`AUXPASS`** | Auxiliary (passive) | I `have` been marked
**`COMPMARK`** | Complement Marker | I will do it `if` I like it
**`ADVMARK`** | Adverb Marker | I did it `after` I was convinced
**`NOMD`** | Nominal Modifier | `MSNBC` news had little effect on the market
**`NUMMOD`** | Numeric Modifier | I ate `2` eggs this morning
**`ACL`** | Clausal Modifier of a Noun | I saw the man you `love`
**`AMOD`** | Adjectival Modifier | you were `good` to him
**`DET`** | Determiner | `which` book you prefer?
**`CASE`** | Case Marking | I went `to` Rachel
**`PUNCT`** | Punctuation | Guys`,` keep calm`!`
**`CC`** | Coordinating Conjunction | Mathew `and` Alex
**`INTERJ`** | Interjection | Pass me the sugar, `please`
**`DEP`** | Unrecognized dependency | how `what`

## Why?

- Current solutions uses statistical machine learning models which makes it 5 times slower (if not worse) than a rule based implementation like this one.
- This is a javascript implementation, so it can be used for an in-browser natural language processing.
- Also because it's written in javascript it might be preferred in smart bots to reduce the complexity of having your bot written in node.js and the natural language processor written in Python or C++.

## Credits
The idea of this parser was originally featured as a small experiment in Xav Ulflander's [Compendium](https://github.com/Ulflander/compendium-js/blob/master/src/dependency-en.js).
