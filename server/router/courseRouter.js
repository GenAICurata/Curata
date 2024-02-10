const express = require('express');
const router = express.Router();
const CourseController = require('../controller');

router.get("/course/:id", CourseController.getCourseDetail);
router.post("/course", CourseController.createCourse);

module.exports = courseRouter;