[![Autotests](https://github.com/insysbio/mathjs-mathml/workflows/Autotests/badge.svg)](https://github.com/insysbio/mathjs-mathml/actions)
[![Coverage Status](https://coveralls.io/repos/github/insysbio/mathjs-mathml/badge.svg?branch=master)](https://coveralls.io/github/insysbio/mathjs-mathml?branch=master)
[![GitHub release](https://img.shields.io/github/release/insysbio/mathjs-mathml.svg)](https://github.com/insysbio/mathjs-mathml/releases/)
[![NPM version](https://img.shields.io/npm/v/mathjs-mathml.svg)](https://www.npmjs.com/package/mathjs-mathml)
[![GitHub license](https://img.shields.io/github/license/insysbio/mathjs-mathml.svg)](https://github.com/insysbio/mathjs-mathml/blob/master/LICENSE)

# mathjs-mathml

## Description

Extends mathjs http://mathjs.org/ library by function translating the internal object to content MathML https://www.w3.org/Math/

This package do the same as [mathjs-cmathml](https://www.npmjs.com/package/mathjs-cmathml) but works without XMLDOM.

## Installation

```shell
npm install mathjs-mathml
```

## nodejs

```javascript
const math = require('mathjs');
math.import(require('mathjs-mathml'));

let mathml = math
    .parse('x*sin(y/z)')
    .toCMathML();
console.log(mathml);
```

## Maintainers

 - Evgeny Metelkin @metelkin
 - Viktoria Tkachenko @vetedde

## Copyright

InSysBio, Moscow, 2017-2019
http://insysbio.com
