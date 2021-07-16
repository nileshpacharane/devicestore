const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    device: {
        type: String,
        required: [true, 'device name is mandatory']
    },
    os: {
        type: String,
        required: [true, 'os name is mandatory']
    },
    manufacturer: {
        type: String,
        required: [true, 'manufacturer name is mandatory']
    },
    lastCheckedOutDate: {
        type: Date
    },
    lastCheckedOutBy: String,
    lastCheckedInDate: {
        type: Date
    },
    lastCheckedInBy: String,
    isCheckedOut: Boolean
});

module.exports = mongoose.model('Device', deviceSchema);