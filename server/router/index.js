const express = require('express');
const router = express.Router();
const courseRouter = require('./courseRouter');
const summarizeRouter = require('./summarizeRouter');

router.use("/course", courseRouter);
router.use("/summarize", summarizeRouter);

module.exports = router;