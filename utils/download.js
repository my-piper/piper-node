const axios = require("axios");

async function download(url) {
  const { data, headers } = await axios({
    method: "get",
    url,
    responseType: "arraybuffer",
  });

  let mimeType = headers["content-type"];
  return { mimeType, data };
}

module.exports = {
  download,
};
