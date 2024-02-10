const OpenAI = require('openai');

const setUpOpenAI = (req, res, next) => {
    req.openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    next();
}

module.exports = setUpOpenAI;