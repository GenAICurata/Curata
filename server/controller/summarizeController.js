const pdf = require('pdf-parse');

class Summarize {
    static async summarizePdf(req, res, next) {
        const pc = req.pc;

        try {
            // multipart file
            const file = req.files.file;
            const dataBuffer = file.data;
            const fileKey = req.files.fileKey;

            // extract the pdf from the buffer
            const extractedPdf = await pdf(dataBuffer);
            const content = extractedPdf.text;

            // upload it into chunks to the pinecone DB
            console.log(content);

            // do something with file
            res.status(200).json({ message: "success" })
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async generateQuestionsFromPdf(req, res, next) {

    }
}

module.exports = Summarize;