import OpenAI from "openai";
const openai = new OpenAI();
client = OpenAI();

class CourseController {
    // generate subtopics
    static createCourse(req, res) {
        console.log(req.body);
        res.send("success");
    }

    // youtube api
    static getCourseDetail(req, res) {
        res.send("get course detail");
    }
}

module.exports = CourseController;