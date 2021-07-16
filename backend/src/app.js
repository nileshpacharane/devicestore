const express = require('express');
const deviceRoute = require('./routes/device.router');
const reviewRoute = require('./routes/review.router');
const requestLogger = require('./utilities/requestLogger');
const errorLogger = require('./utilities/errorLogger');
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require('./config/dbconnection');

const app = express();
app.use(cors());
const db = connection.createConnection();
db.on('connected', console.log.bind(console, 'MongoDB connection Success:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(requestLogger);
app.get('/', (req, res) => {
    res.send("Welcome to software engineering garage!!!!!");
});
app.use('/device', deviceRoute);
app.use('/review', reviewRoute);
app.use(errorLogger);

module.exports = app;