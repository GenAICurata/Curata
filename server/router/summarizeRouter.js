const express = require('express');
const router = express.Router();
const Summarize = require('../controller/summarizeController');
const fileUpload = require('express-fileupload');

router.post("/", fileUpload(), Summarize.summarizePdf);

module.exports = router;