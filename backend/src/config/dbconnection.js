const mongoose = require('mongoose');

let connection = {};

connection.createConnection = () => {
  mongoose.connect('mongodb://localhost:27017/garageDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  return mongoose.connection;
}


module.exports = connection;