class CourseController {
    // generate subtopics
    static createCourse(req, res) {
        res.send("create course");
    }

    // youtube api
    static getCourseDetail(req, res) {
        res.send("get course detail");
    }
}

module.exports = CourseController;