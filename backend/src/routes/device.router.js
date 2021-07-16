const express = require('express');
const router = express.Router();
const deviceController = require('../controller/device.controller')

router.get('/getDevice', deviceController.getAll);

router.post('/add', deviceController.create);

router.delete('/remove/:id', deviceController.delete);

router.put('/checkInCheckOut/:id', deviceController.updateCheckInCheckOut);

router.all('*', (req, res, next) => {
    res.json({
        message: 'Invaid Request!!!!!!!!!!!!.'
    })
})

module.exports = router;