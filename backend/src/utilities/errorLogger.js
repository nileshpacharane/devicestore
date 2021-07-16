const fs = require('fs');

let errorLogger = (err, req, res, next) => {
    let errorMsg = `${new Date()} - ${err.stack}\n`;
    fs.appendFile('./logs/errorLogger.txt', errorMsg, (error) => {
        if (error) {
            console.log('logging faild');
        } else {
            err.status ? res.status(err.status) : res.status(500);
            res.json({
                message: err.message
            })
        }
    })
}

module.exports = errorLogger;