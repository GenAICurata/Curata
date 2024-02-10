const OpenAIApi = require("openai");
module.exports = new OpenAIApi({
    api_key: process.env.OPENAI_API_KEY
});
;