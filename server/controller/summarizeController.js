const pdf = require('pdf-parse');

class Summarize {
    static async summarizePdf(req, res, next) {
        try {
            // multipart file
            const file = req.files.file;
            const dataBuffer = file.data;

            // extract the pdf from the buffer
            const extractedPdf = await pdf(dataBuffer);
            const content = extractedPdf.text;

            // upload it into chunks to the pinecone DB
            console.log(content);

            // do something with file
            res.send('File uploaded');
        } catch (err) {
            console.log(err);
            next(err);
        }

    }
}

module.exports = Summarize;