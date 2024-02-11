const { Course, Unit, Chapter } = require('../models');
const axios = require('axios');
const { YoutubeTranscript } = require("youtube-transcript");

class CourseController {
    static async createCourse(req, res, next) {
        try {
            const openai = req.openai;
            const { courseName, courseUnits } = req.body;

            // post the main course in db
            const addedCourse = await Course.create({ courseName });

            // generate the book chapters
            for (const unit of courseUnits) {
                const promptPrefix = `Given the unit: ${unit} of the main subject ${courseName}: `;
                let visited = "";
                const bookChaptersList = [];

                for (let i = 0; i < 3; ++i) {
                    const response = await openai.chat.completions.create({
                        model: "gpt-3.5-turbo",
                        messages: [
                            {
                                "role": "user",
                                "content": promptPrefix +
                                    `Provide me with a book chapter title for the unit in less than 10 words that doesn't exist yet in ${visited}.`
                            },
                        ]
                    })

                    const bookChapterName = response?.choices[0]?.message?.content.replace(/^"(.*)"$/, '$1');
                    bookChaptersList.push({ chapterName: bookChapterName });
                    visited += `${bookChapterName}, `
                }

                // post the chapters and units to DB
                const addedUnit = await Unit.create({ unitName: unit, CourseId: addedCourse.dataValues.id })
                await Chapter.bulkCreate(bookChaptersList.map((chapter) => {
                    chapter.UnitId = addedUnit.dataValues.id;
                    return chapter;
                }))
            }

            res.status(200).json({ message: "Course generated successfully", course: addedCourse });
        } catch (err) {
            next(err);
        }
    }

    static async getCourse(req, res, next) {
        try {
            const course = await Course.findOne({
                where: {
                    id: req.params.id
                },
                include: {
                    model: Unit,
                    include: Chapter
                }
            });
            res.status(200).json(course)
        } catch (err) {
            next(err);
        }
    }

    static async createCourseVideo(req, res, next) {
        try {
            const openai = req.openai;
            const { chapterName, chapterId, unitName, courseName } = req.body;

            // get search term from chapter
            const YTQuery = await openai.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content:
                            `Given the chapter ${chapterName} from the unit ${unitName}, ` +
                            "Provide me with a youtube search query regarding the following chapter for the given topic WITHOUT QUOTATION MARKS in 20 words or less.",
                    },
                ],
                model: "gpt-3.5-turbo-0125",
            });

            console.log(YTQuery?.choices[0]?.message?.content);

            // search video based on query
            const { data: videoResult } = await axios(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=${YTQuery?.choices[0]?.message?.content}&type=video&key=${process.env.YOUTUBE_API_KEY}&videoCaption=closedCaption`
            );

            const { thumbnails, title } = videoResult.items[0].snippet;
            const { videoId } = videoResult.items[0].id;

            // generate transcript
            const transcript = (await YoutubeTranscript.fetchTranscript(videoId, {
                lang: "en",
                country: "EN",
            })).map(t => t.text).join(" ").replace(/\n/g, "").slice(0, 500);

            console.log(transcript);

            // summarize transcript
            const summarizedTranscript = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        "role": "user",
                        "content": transcript +
                            `summarise the following transcript in 250 more or less words without referencing the video or channel itself, summarize only the educational content of the video.`
                    },
                ]
            })

            // generate questions
            const questionList = [];
            for (let i = 0; i < 5; i++) {
                const options = [];
                const completion = await openai.chat.completions.create({
                    messages: [
                        {
                            role: "user",
                            content: `You are to generate a random theory based question about ${courseName}`
                        }],
                    model: "gpt-3.5-turbo",
                });

                const generatedQuestion = completion.choices[0]?.message.content;
                const answer = await openai.chat.completions.create({
                    messages: [
                        {
                            role: "user",
                            content: `In below 10 words, give me the answer to the question: ${generatedQuestion} without any precursor or additional words.`,
                        },
                    ],
                    model: "gpt-3.5-turbo",
                });

                const generatedAnswer = answer.choices[0]?.message.content;
                options.push({
                    question: generatedAnswer,
                    status: true,
                    ChapterId: chapterId
                })

                let visitedOption = "";
                for (let i = 0; i < 3; i++) {
                    const option = await openai.chat.completions.create({
                        messages: [
                            {
                                role: "user",
                                content:
                                    `In below 10 words, give me a wrong answer to the question: ${generatedQuestion} without any precursor or additional words, that is not already in: ${visitedOption}.` +
                                    "Give wrong answers only that are still related.",
                            },
                        ],
                        model: "gpt-3.5-turbo-0125",
                    });

                    const wrongOption = option.choices[0]?.message.content;
                    visitedOption += ", " + wrongOption;
                    options.push({
                        question: wrongOption,
                        status: false,
                        ChapterId: chapterId
                    });
                }
            }

            // insert to db
            await Chapter.update({ videoThumbNail: thumbnails?.default?.url, videoTitle: title, videoId, videoTranscript: summarizedTranscript?.choices[0]?.message?.content }, {
                where: {
                    id: chapterId
                },
            });

            res.status(200).json({ message: "Course video generated successfully" });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = CourseController;