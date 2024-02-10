const express = require('express');
const router = express.Router();
const courseRouter = require('./courseRouter');

router.use("/course", courseRouter);

module.exports = router;