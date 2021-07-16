const fs = require('fs');

let requestLogger = (req, res, next) => {
    let logMessage = `${new Date()} - ${req.method} - ${req.path}\n`;
    fs.appendFile('./logs/requestLogger.txt', logMessage, (error) => {
        if (error) {
            next(error);
        } else {
            next();
        }
    })

}

module.exports = requestLogger;