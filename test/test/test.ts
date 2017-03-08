/// <reference path="../../node_modules/@types/node/index.d.ts"/>
/// <reference path="../../node_modules/@types/mocha/index.d.ts"/>
const assert = require("assert");

import {parse} from "../../src/index";
import cases from "./cases";

cases.forEach((Case)=>{
    describe("Sentence:" + Case.tokens.join("-"),function(){
        parse(Case.tags,Case.tokens).forEach((token:any,index)=>{
            describe(Case.tokens[index],function(){
                it("Parent",function(){
                    assert.equal((Case as any)[index].p,token.parent);
                });
                it("Label",function(){
                    assert.equal((Case as any)[index].l,token.label);
                });
            });
        });
    });
});