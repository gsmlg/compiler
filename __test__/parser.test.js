const util = require('util');

const parser = require('../parser');

const tokens = require('./tokenizer.test');

const ast = parser(tokens);

console.log(util.inspect(ast, { depth: null, colors: true }));

module.exports = ast;
