async function download(url) {
  const { data, headers } = await axios({
    method: "get",
    url,
    responseType: "arraybuffer",
  });

  let mimeType = headers[CONTENT_TYPE_HEADER];
  return { mimeType, data };
}

module.exports = {
  download,
};
