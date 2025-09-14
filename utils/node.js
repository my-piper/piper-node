const { NextNode, RepeatNode } = require("../types/node-outputs");
const dotenv = require("dotenv");

async function runNode(handler, inputs = {}, state) {
  dotenv.config({ override: true, quiet: true });

  const env = {
    variables: process.env,
  };
  const result = await handler({ env, inputs, state });
  if (result instanceof NextNode) {
    const { outputs } = result;
    return outputs;
  }

  if (result instanceof RepeatNode) {
    console.log("Node is going to repeat");
    const { state, delay } = result;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return runNode(handler, inputs, state);
  }
  throw new Error("Wrong node result");
}

function next(obj) {
  return NextNode.from(obj);
}

function repeat(obj) {
  return RepeatNode.from(obj);
}

module.exports = {
  runNode,
  next,
  repeat,
};
