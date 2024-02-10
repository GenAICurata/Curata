const express = require('express');
const router = express.Router();
const CourseController = require('../controller/courseController');

router.post("/", CourseController.createCourse);
router.get("/:id", CourseController.getCourse);

module.exports = router;