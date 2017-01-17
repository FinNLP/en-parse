# English Parser
English language syntactic dependency parser.

> **important**
> This project is in a very early stage, it's rather an experiment than a real a project.
> Using it in production may hurt your feelings.


## The Experiment

Stanford's CoreNLP, spaCy, and TurboParser are all decent dependency parsers, they use statistical approaches that uses statistical models of machine learning techniques of training and development.

However, my experiment here is different.

It's not based on a statistical machine learning model, rather a plain simple implementation of transition and rules based system.

The parsing is done in two steps:

### Chunking
First step is to convert multiple tokens into single chunk when necessary:

```javascript
// this:
["Michelangelo","Buonarroti","did","The","Sistine","Chapel"]
// to this:
["Michelangelo Buonarroti","did","The Sistine Chapel"]
```
As you can see `Michelangelo Buonarroti` and `The Sistine Chapel` are chunks composed of multiple tokens, and both are noun phrases.

### Relating

Relating is the process that decides that this phrase is dependant to that phrase and so on.. It walks the nodes array in reverse, and it matches the left and right nodes to a set of rules, when the rule matches then it moves one of the nodes into the other.

Multiple steps of relating are done in a recursive manner until the recursion limit is reach or the sentence has only one node.

As for our example above:

```javascript
["Michelangelo Buonarroti","did","The Sistine Chapel"]
```

The noun phrase `The Sistine Chapel` will be considered as an object of the verbal phrase `did` which will take `Michelangelo Buonarroti` as the subject.

This example is very basic, and there's a lot more to look into how this parser processes sentences.

## Current status

For now, the parser does a good job in dealing with small sentences like the ones features in [manual cases](https://github.com/alexcorvi/en-parser/blob/master/test/manual_cases.js), however, things get pretty messy when a sentence has multiple phrases or clauses like this one: `I have few things regarding the the other thing of the something but I think that I have to do something anyway`.

## Why bother?

You might ask why bother with yet another dependency parser while multiple current solutions already exist, and the answer to this is:

- Current solutions uses statistical machine learning models which makes it 5 times slower (if not worse) than a rule based implementation like this one.
- This is a javascript implementation, so it can be used for an in-browser natural language processing.
- Also because it's written in javascript it might be preferred in smart bots to reduce the complexity of having your bot written in node.js and the natural language processor written in Python or C++.

## Challenges

* The main challenge to this project is the lack of literature for a transition and rule based dependency parser. Most of the literature available for English language are statistical. Few exceptions exist like Diedier Bourgoues [Syntex](http://slideplayer.fr/slide/1150457/) which proved to be [hard to implement in English](https://github.com/Ulflander/compendium-js#dependency-parsing).

* Testing the dependency parser proved to be hard, since many trees (interpretations) can be considered correct for the same sentence. For example you can test the sentence: `I have few things regarding the the other thing of the something but I think that I have to do something anyway` in [spaCy](https://demos.explosion.ai/displacy/), [CoreNLP](http://nlp.stanford.edu:8080/parser/index.jsp), and [turbo parser](http://demo.ark.cs.cmu.edu/parse), and see for yourself how different trees can be generated out of the same sentence, and (to some extent) all can be considered true.

## Credits
The experiment was originally featured in Xav Ulflander's [Compendium](https://github.com/Ulflander/compendium-js) but that project seems to be dead. So I've re-written, optimized, and refractored his dependency parser and started where he left off.