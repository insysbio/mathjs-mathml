/* global describe it */

//let math = require('mathjs');
const { create, all } = require('mathjs');
const math = create(all);
const nodeCases = require('./cases/nodes.json');
const assert = require('node:assert/strict');

// math.import(require('../src'));
const { cMathMLHandler } = require('../src');

describe('Nodes:', function(){
  for(let nodeCase in nodeCases) {
    let case_i = nodeCases[nodeCase];
    it(`${nodeCase}: "${case_i.formula}"`, () => {
      let expression = math.parse(case_i.formula);
      let str = expression.toString({handler: cMathMLHandler, csymbols: case_i.csymbols});

      assert.equal(str, case_i.expected);
    });
  }
});
