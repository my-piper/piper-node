const { runNode } = require("../../utils/node");
const { run } = require("./calculator-node");

test("should add 2 numbers", async () => {
  const outputs = await runNode(run, { a: 1, b: 2 });
  expect(outputs.sum).toBe(3);
});
