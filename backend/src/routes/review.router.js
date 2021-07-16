const express = require('express');
const router = express.Router();
const reviewController = require('../controller/review.controller')

router.get('/get/:id', reviewController.getAll);

router.post('/add', reviewController.create);

module.exports = router;