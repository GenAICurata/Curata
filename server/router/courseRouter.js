const express = require('express');
const router = express.Router();
const CourseController = require('../controller/courseController');

router.get("/", CourseController.getAllCourses);
router.post("/", CourseController.createCourse);
router.put("/", CourseController.createCourseVideo);
router.get("/:id", CourseController.getCourse);
router.get("/:id/:unitId/:chapterId", CourseController.getCourseChapterDetail);

module.exports = router;