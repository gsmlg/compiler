const tokenizer = require('../tokenizer');

const input = `
(add1 25 (subtract2 15 8))
`;

const tokens = tokenizer(input);

console.log(tokens);

module.exports = tokens;
