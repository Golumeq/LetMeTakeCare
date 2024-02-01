const express = require('express')
const router = express.Router()
const trailsController = require('../controllers/trailsController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(trailsController.getAllTrails)
    .post(trailsController.createNewTrail)
    .patch(trailsController.updateTrail)
    .delete(trailsController.deleteTrail)

module.exports = router