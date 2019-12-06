const dictFunc = require('../dictionary');

exports.name = 'toCMathMLNode';
exports.path = 'expression.node.FunctionNode.prototype';
exports.factory = function() {
  return function() {
   let args = this.args
     .map((arg) => arg.toCMathMLNode());
    if(this.fn.name==='cube'){
      return `<apply><power/>${args[0]}<cn>3</cn></apply>`;
    }else if(this.fn.name==='square'){
      return `<apply><power/>${args[0]}<cn>2</cn></apply>`;
    }else if(this.fn.name==='log' && this.args.length===2){
      return `<apply><log/><logbase>${args[1]}</logbase>${args[0]}</apply>`;
    }else if(this.fn.name==='log2'){
      return `<apply><log/><logbase><cn>2</cn></logbase>${args[0]}</apply>`;
    }else{ // change only function name
      return `<apply><${dictFunc[this.fn.name] || this.fn.name}/>${args.join('')}</apply>`;
    }
  };
};
