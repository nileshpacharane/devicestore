const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: [true, 'device id is mandatory']
    },
    comment: {
        type: String,
        required: [true, 'comment  is mandatory']
    },
});

module.exports = mongoose.model('Review', reviewSchema);