const { runNode } = require("../../utils/node");
const { FatalError } = require("../../utils/throw-error");
const { run } = require("./node-with-error");

test("should catch error", async () => {
  expect.assertions(1);
  try {
    await runNode(run);
  } catch (e) {
    expect(e).toBeInstanceOf(FatalError);
  }
});
