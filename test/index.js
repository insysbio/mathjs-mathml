/* global describe it */

//let math = require('mathjs');
const { create, all } = require('mathjs');
const math = create(all);
const nodeCases = require('./cases/nodes.json');
const { expect } = require('chai');

math.import(require('../src'));

describe('Nodes:', function(){
  for(let nodeCase in nodeCases) {
    let case_i = nodeCases[nodeCase];
    it(`${nodeCase}: "${case_i.formula}"`, () => {
      let str = math.parse(case_i.formula).toCMathML(case_i.csymbols);
      expect(str).to.be.equal(case_i.expected);
    });
  }
});
