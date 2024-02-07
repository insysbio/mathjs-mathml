const dictFunc = require('./dictionary');
/*
    csymbols are the object describing which id should be interpreted as <csymbols>
    format of csymbols is:
    {
      "t": "http://www.sbml.org/sbml/symbols/time" // id vs definitionURL
    }
*/

function cMathMLHandler(_this, { handler, csymbols}) {
  if (_this.type === 'SymbolNode') {
    let definitionURL = csymbols && csymbols[_this.name];
    if (_this.name === 'pi') {
      return `<pi/>`;
    } else if (_this.name === 'e') {
      return `<exponentiale/>`;
    } else if (definitionURL) {
      // use <csymbol here>
      return `<csymbol definitionURL="${definitionURL}">${_this.name}</csymbol>`;
    } else {
      return `<ci>${_this.name}</ci>`;
    }
  } else if (_this.type === 'ConstantNode') {
    let isExponential = String(_this.value) // if it is exponential form
      .match(/^[\d]+[.]?[\d]*[e][+-][\d]+$/);
    let isBoolean = typeof _this.value === 'boolean';
    if (isExponential) {
      var value = String(_this.value).match(/^([\d]+[.]?[\d]*)[e]([+-][\d]+)$/);
      return `<cn type="e-notation">${value[1]}<sep/>${value[2]}</cn>`;
    } else if (isBoolean) {
      return `<${_this.value}/>`
    } else if (_this.value === Infinity) {
      return `<infinity/>`;
    } else if (isNaN(_this.value)) {
      return `<notanumber/>`;
    } else {
      return `<cn>${_this.value}</cn>`;
    }
  } else if (_this.type === 'FunctionNode') {
    let args = _this.args
      .map((arg) => arg.toString({handler, csymbols}));
    if (_this.fn.name==='cube') {
      return `<apply><power/>${args[0]}<cn>3</cn></apply>`;
    } else if(_this.fn.name==='square') {
      return `<apply><power/>${args[0]}<cn>2</cn></apply>`;
    } else if(_this.fn.name==='log' && _this.args.length===2) {
      return `<apply><log/><logbase>${args[1]}</logbase>${args[0]}</apply>`;
    } else if(_this.fn.name==='logbase') {
      return `<apply><log/><logbase>${args[1]}</logbase>${args[0]}</apply>`;
    } else if(_this.fn.name==='log2') {
      return `<apply><log/><logbase><cn>2</cn></logbase>${args[0]}</apply>`;
    } else if (_this.fn.name==='nthRoot' && _this.args.length>=2) {
      return `<apply><root/><degree>${args[1]}</degree>${args[0]}</apply>`;
    } else if (_this.fn.name==='nthRoot' && _this.args.length===1) {
      return `<apply><root/>${args[0]}</apply>`;
    } else if (_this.fn.name === 'piecewise') {
      if (args.length === 0) throw new Error('piecewise function must have at least one argument.');

      let hasOtherwise = args.length % 2 == 1; // is odd
      let otherwiseTag = hasOtherwise ? `<otherwise>${args[args.length - 1]}</otherwise>` : ``;

      let piecesCount = Math.floor(args.length / 2);
      let piecesTags = [];
      for (let i = 0; i < piecesCount; i++) {
        let tag = `<piece>${args[2*i+1]}${args[2*i]}</piece>`;
        piecesTags.push(tag);
      }
      return `<piecewise>${piecesTags.join('')}${otherwiseTag}</piecewise>`;
    } else { // change only function name
      return `<apply><${dictFunc[_this.fn.name] || _this.fn.name}/>${args.join('')}</apply>`;
    }
  } else if (_this.type === 'OperatorNode') {
    let args = _this.args
      .map((arg) => arg.toString({handler, csymbols}))
      .join('');
    return `<apply><${dictFunc[_this.fn] || _this.fn.name}/>${args}</apply>`;
  } else if (_this.type === 'ParenthesisNode') {
    return _this.content.toString({handler, csymbols});
  } else if (_this.type === 'FunctionAssignmentNode') {
    let bvars = _this.params
      .map((param) => `<bvar><ci>${param}</ci></bvar>`)
      .join('');
    let expr = _this.expr
      ? _this.expr.toString({handler, csymbols})
      : ''

    return `<lambda>${bvars}${expr}</lambda>`;
  } else if (_this.type === 'AssignmentNode') {
    return `<apply><eq/>${_this.object.toString({handler, csymbols})}${_this.value.toString({handler, csymbols})}</apply>`;
  } else if (_this.type === 'ConditionalNode') {
    let trueExpr = _this.trueExpr ? _this.trueExpr.toString({handler, csymbols}) : '';
    let falseExpr = _this.falseExpr ? _this.falseExpr.toString({handler, csymbols}) : '';
    let condition = _this.condition ? _this.condition.toString({handler, csymbols}) : '';

    return `<piecewise><piece>${trueExpr}${condition}</piece><otherwise>${falseExpr}</otherwise></piecewise>`;
  } else if (_this.type === 'ArrayNode') {
    let items = _this.items
      .map((item) => item.toString({handler, csymbols}))
      .join('');

    return `<list>${items}</list>`;
  } else if (_this.type === 'BlockNode') {
    let blocks = _this.blocks
    .map((block) => block.node.toString({handler, csymbols}))
    .join('');

    return `<list>${blocks}</list>`;
  } else {
      throw new Error(`toCMathML is not implemented for "${_this.type}"`);
  }
}

module.exports = cMathMLHandler;
