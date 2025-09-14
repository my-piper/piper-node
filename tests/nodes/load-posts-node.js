const { next, repeat, throwError } = require("../../utils/node");
const { httpRequest } = require("../../utils/http-request");

async function run({ env, inputs, state }) {
  const { user } = inputs;
  const { page = 1, posts = [] } = state || {};

  const TEST_API_KEY = env.variables['TEST_KEY'];
  if(!TEST_API_KEY) {
    throw new Error("Please, set TEST_KEY in environment");
  }

  const { data: chunk } = await httpRequest({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    params: {
      user,
      page,
    },
  });

  if (page < 3) {
    return repeat({
      state: { page: page + 1, posts: [...posts, ...chunk] },
      delay: 500,
    });
  }

  return next({ outputs: { posts } });
}

module.exports = {
  run,
};
