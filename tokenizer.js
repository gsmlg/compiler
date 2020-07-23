const tokenizer = (input) => {
  let pos = 0;
  let tokens = [];
  while (pos <input.length) {
    let char = input[pos];

    const PAREN_MATCH = /[\(\)]/
    if (PAREN_MATCH.test(char)) {
      tokens.push({ type: 'paren', value: char });
      pos++;
      continue;
    }

    const NAME_MATCH = /[a-zA-Z_]/;
    const NAME_MATCH_ = /[a-zA-Z0-9_]/;
    if (NAME_MATCH.test(char)) {
      let verb = char;
      while (NAME_MATCH_.test(input[++pos])) {
          verb += input[pos]
      }
      tokens.push({ type: 'name', value: verb });
      continue;
    }

    const NUM_MATCH = /[0-9]/;
    if (NUM_MATCH.test(char)) {
      let verb = char;
      while (NUM_MATCH.test(input[++pos])) {
          verb += input[pos]
      }
      tokens.push({ type: 'number', value: verb });
      continue;
    }

    const WHITE_SPACE = /\s/;
    if (WHITE_SPACE.test(char)) {
      pos++;
      continue;
    }
    throw new Error(`Unexpect token at ${pos}`);
  }
  return tokens;
};

module.exports = tokenizer;
