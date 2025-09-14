const { runNode } = require("../../utils/node");
const { run } = require("./load-posts-node");

test("should load posts", async () => {
  const outputs = await runNode(run, { user: "anton" });
  expect(outputs.posts).toHaveLength(200);
});
