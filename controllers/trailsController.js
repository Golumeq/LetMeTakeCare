const Trail = require('../models/Trail')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @desc Get all trails 
// @route GET /trails
// @access Private
const getAllTrails = asyncHandler(async (req, res) => {
    // Get all trails from MongoDB
    const trails = await Trail.find().lean()

    // If no trails 
    if (!trails?.length) {
        return res.status(400).json({ message: 'No trails found' })
    }

    const trailsWithUser = await Promise.all(trails.map(async (trail) => {
        const user = await User.findById(trail.user).lean().exec()
        return { ...trail, username: user.username }
    }))

    res.json(trailsWithUser)
})


const createNewTrail = asyncHandler(async (req, res) => {
    const { user, title, text } = req.body

    // Confirm data
    if (!user || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Trail.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate trail title' })
    }

    // Create and store the new user 
    const trail = await Trail.create({ user, title, text })

    if (trail) { // Created 
        return res.status(201).json({ message: 'New trail created' })
    } else {
        return res.status(400).json({ message: 'Invalid trail data received' })
    }

})

// @desc Update a trail
// @route PATCH /trails
// @access Private
const updateTrail = asyncHandler(async (req, res) => {
    const { id, user, title, text, completed } = req.body

    // Confirm data
    if (!id || !user || !title || !text || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm trail exists to update
    const trail = await Trail.findById(id).exec()

    if (!trail) {
        return res.status(400).json({ message: 'Trail not found' })
    }

    // Check for duplicate title
    const duplicate = await Trail.findOne({ title }).lean().exec()

    // Allow renaming of the original trail 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate trail title' })
    }

    trail.user = user
    trail.title = title
    trail.text = text
    trail.completed = completed

    const updatedTrail = await trail.save()

    res.json(`'${updatedTrail.title}' updated`)
})

// @desc Delete a trail
// @route DELETE /trails
// @access Private
const deleteTrail = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Trail ID required' })
    }

    // Confirm trail exists to delete 
    const trail = await Trail.findById(id).exec()

    if (!trail) {
        return res.status(400).json({ message: 'Trail not found' })
    }

    const result = await trail.deleteOne()

    const reply = `Trail '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllTrails,
    createNewTrail,
    updateTrail,
    deleteTrail
}