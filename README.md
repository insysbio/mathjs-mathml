[![Autotests](https://github.com/insysbio/mathjs-mathml/workflows/Autotests/badge.svg)](https://github.com/insysbio/mathjs-mathml/actions)
[![Coverage Status](https://coveralls.io/repos/github/insysbio/mathjs-mathml/badge.svg?branch=master)](https://coveralls.io/github/insysbio/mathjs-mathml?branch=master)
[![NPM version](https://img.shields.io/npm/v/mathjs-mathml.svg)](https://www.npmjs.com/package/mathjs-mathml)
[![GitHub license](https://img.shields.io/github/license/insysbio/mathjs-mathml.svg)](https://github.com/insysbio/mathjs-mathml/blob/master/LICENSE)

# mathjs-mathml

## Description

Extends mathjs http://mathjs.org/ library by function translating the internal object to content MathML https://www.w3.org/Math/

This package do the same as [mathjs-cmathml](https://www.npmjs.com/package/mathjs-cmathml) but works without XMLDOM.

## Installation for mathjs 5.x

```shell
npm install mathjs-mathml@5.10.3
```

```javascript
const math = require('mathjs');
math.import(require('mathjs-mathml'));

let mathml = math
    .parse('x*sin(y/z)')
    .toCMathML();
console.log(mathml);
```

## Installation for mathjs 6.x

```shell
npm install mathjs-mathml@6.6.5
```

```javascript
const { create, all } = require('mathjs');
const math = create(all);

let mathml = math
    .parse('x*sin(y/z)')
    .toCMathML();
console.log(mathml);
```

## Maintainers

 - Evgeny Metelkin @metelkin
 - Viktoria Tkachenko @vetedde

## Copyright

InSysBio, Moscow, 2017-2021
http://insysbio.com
