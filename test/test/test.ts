/// <reference path="../../node_modules/@types/node/index.d.ts"/>
/// <reference path="../../node_modules/@types/mocha/index.d.ts"/>
const assert = require("assert");

import {parse} from "../../src/index";
import cases from "./cases";

cases.forEach((Case)=>{
    describe("Sentence:" + Case.tokens.join("+"),function(){
        let result = parse(Case.tags,Case.tokens);
        let expectedRoot = Case.expectedResult.findIndex(x=>x.label === "ROOT");
        let actualRoot = result.findIndex((x)=>x.label === "ROOT");
        it(`Checking root Expected: "${Case.tokens[expectedRoot]}" Actual: "${Case.tokens[actualRoot]}"`,function(){
            assert.equal(actualRoot,expectedRoot);
        });
        describe(`Checking non-root tokens`,function(){
            result.forEach((node,index)=>{
                describe(`Token: ${Case.tokens[index]} `,function(){
                    let expectedLabel = Case.expectedResult[index].label;
                    let actualLabel = node.label;
                    let expectedParent = Case.tokens[Case.expectedResult[index].parent];
                    let actualParent = Case.tokens[node.parent];
                    it(`Label: Expected: "${expectedLabel}" Actual: "${actualLabel}"`,function(){
                        assert.equal(actualLabel,expectedLabel);
                    });
                    it(`Parent: Expected: "${expectedParent}" Actual: "${actualParent}"`,function(){
                        assert.equal(actualParent,expectedParent);
                    });
                });
            });
        });
    });
});