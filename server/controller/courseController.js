//const openai = require('../vendors/openAI');
console.log(process.env.OPENAI_API_KEY);


class CourseController {
    // generate subtopics
    static async createCourse(req, res) {
        console.log(req.body);

        /* response = await client.chat.completions.create(
            model = "gpt-3.5-turbo",
            messages = [
                { "role": "user", "content": "Who won the world series in 2020?" },
            ]
        ) */
    }

    // youtube api
    static getCourseDetail(req, res) {
        res.send("get course detail");
    }
}

module.exports = CourseController;