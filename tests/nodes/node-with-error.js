const { throwError } = require("../../utils/throw-error");

async function run() {
  throwError.fatal("Test error");
}

module.exports = {
  run,
};
