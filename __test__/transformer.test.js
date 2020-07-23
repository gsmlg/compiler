const util = require('util');

const transformer = require('../transformer');

const ast = require('./parser.test');

const newAst = transformer(ast);

console.log(util.inspect(newAst, { depth: null, colors: true }));

module.exports = newAst;
