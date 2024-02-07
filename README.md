[![Autotests](https://github.com/insysbio/mathjs-mathml/workflows/Autotests/badge.svg)](https://github.com/insysbio/mathjs-mathml/actions)
[![Coverage Status](https://coveralls.io/repos/github/insysbio/mathjs-mathml/badge.svg?branch=master)](https://coveralls.io/github/insysbio/mathjs-mathml?branch=master)
[![NPM version](https://img.shields.io/npm/v/mathjs-mathml.svg)](https://www.npmjs.com/package/mathjs-mathml)
[![GitHub license](https://img.shields.io/github/license/insysbio/mathjs-mathml.svg)](https://github.com/insysbio/mathjs-mathml/blob/master/LICENSE)

# mathjs-mathml

## Description

Extends mathjs http://mathjs.org/ library by providing the handler for producing content MathML https://www.w3.org/Math/

## Installation

```shell
npm install mathjs-mathml
```

```javascript
const { create, all } = require('mathjs');
const math = create(all);
const { cMathMLHandler } = require('mathjs-mathml');

let mathml = math
    .parse('x*sin(y/z)')
    .toString(cMathMLHandler);

console.log(mathml);
```

## Maintainers

 - Evgeny Metelkin @metelkin
 - Viktoria Tkachenko @vetedde

## Copyright

InSysBio, Moscow, 2017-2024
http://insysbio.com
