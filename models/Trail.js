const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const trailSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        package: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

trailSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongoose.model('Trail', trailSchema)