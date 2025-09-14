const { HttpsAgent } = require("agentkeepalive");
const axios = require("axios");

const httpRequest = axios.create({
  httpsAgent: new HttpsAgent({
    keepAliveMsecs: 15000,
    maxSockets: 150,
    maxFreeSockets: 10,
    timeout: 10000,
    freeSocketTimeout: 30000,
  }),
});
module.exports = {
  httpRequest,
};
