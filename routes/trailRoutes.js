const express = require('express')
const router = express.Router()
const trailsController = require('../controllers/trailsController')

router.route('/')
    .get(trailsController.getAllTrails)
    .post(trailsController.createNewTrail)
    .patch(trailsController.updateTrail)
    .delete(trailsController.deleteTrail)

module.exports = router