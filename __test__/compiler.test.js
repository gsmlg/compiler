const compiler = require('../index');

const input = `
(add 3 5)
(subtract 9 6)
(multi 3 8)
(div 24 3)
(div (multi 3 8) (add 2 (subtract 6 4)))
`;

const output = compiler(input);

console.log(output);
