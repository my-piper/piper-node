const { next } = require('../../utils/node');

async function run({ inputs }) {
  const { a, b } = inputs;
  return next({ outputs: { sum: a + b } });
}

module.exports = {
  run,
};
