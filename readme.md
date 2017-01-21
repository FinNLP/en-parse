# English Parser
English language syntactic dependency parser.

> **important**
> This project is in a very early stage, it's rather an experiment than a real a project.
> Using it in production may hurt your feelings.
>

## Installation and Usage

```
npm i --save en-parser
```

```javascript
const parser = require("en-parser");
let parsed = parser(["PRP","VBP","TO","VBP"],["i","like","to","parse"]);
```

> NOTE:
> tokens should be normalized (contractions, abbreviations and such all resolved to it's normal form).
>


## TODO

- Implement [English_LinES](https://github.com/UniversalDependencies/UD_English-LinES/blob/master/en_lines-ud-test.conllu) test
- Write better documentation



## Why?

- Current solutions uses statistical machine learning models which makes it 5 times slower (if not worse) than a rule based implementation like this one.
- This is a javascript implementation, so it can be used for an in-browser natural language processing.
- Also because it's written in javascript it might be preferred in smart bots to reduce the complexity of having your bot written in node.js and the natural language processor written in Python or C++.

## Credits
The algorithm of this parser was originally featured in Xav Ulflander's [Compendium](https://github.com/Ulflander/compendium-js) but that project seems to be dead. So I've re-written, optimized, and refractored his dependency parser and started where he left off. It now has over 250 rules and (almost) compliant with [universal dependencies V2](http://universaldependencies.org/)