const Device = require('../models/device');


exports.getAll = async (req, res, next) => {
    try {
        const devices = await Device.find({});
        res.json(devices);
    } catch (error) {
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        const device = new Device({
            device: req.body.device,
            os: req.body.os,
            manufacturer: req.body.manufacturer,
            lastCheckedOutDate: req.body.lastCheckedOutDate || '',
            lastCheckedOutBy: req.body.lastCheckedOutBy || '',
            lastCheckedInDate: req.body.lastCheckedInDate || '',
            lastCheckedInBy: req.body.lastCheckedInBy || '',
            isCheckedOut: false
        });
        await device.save();
        res.json({
            'message': 'Device Created Successfully!',
            'status': 201
        });
    } catch (error) {
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Device.deleteOne({
            _id: id
        });
        res.json({
            'message': 'Device Deleted Successfully!',
            'status': 200
        });
    } catch (error) {
        next(error);
    }
}

exports.updateCheckInCheckOut = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Device.findByIdAndUpdate(id, {
            $set: req.body
        });
        res.json({
            'message': 'Device Updated Successfully!',
            'status': 201
        });
    } catch (error) {
        next(error);
    }
}