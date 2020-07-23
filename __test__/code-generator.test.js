const codeGenerator = require('../code-generator');

const ast = require('./transformer.test');

const output = codeGenerator(ast);

console.log(output);
