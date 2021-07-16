const Review = require('../models/review');


exports.getAll = async (req, res, next) => {
    try {
        const deviceId = req.params.id;
        const reviews = await Review.find({
            deviceId
        });
        res.json(reviews);
    } catch (error) {
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        const review = new Review({
            deviceId: req.body.deviceId,
            comment: req.body.comment,
        });
        await review.save();
        res.json({
            'message': 'Review Created Successfully!',
            'status': 200
        });
    } catch (error) {
        next(error);
    }
}
