const mongoose = require('mongoose')

const Schema = ({
    picture: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

module.exports = mongoose.model('Post', Schema)