const errorHandler = (err, req, res, next) => {
    let code = 500;
    res.status(code).send("Internal server error");
}

module.exports = errorHandler;