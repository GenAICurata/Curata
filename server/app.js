const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const router = require('./router');
const openAIKey = require('./middleware/openAIKey');
const errorHandler = require('./middleware/errorHandler');

// require env from OS
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(openAIKey);
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})