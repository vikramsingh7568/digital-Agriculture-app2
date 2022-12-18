
const mongoose = require('mongoose')

const OrganizationSchema = new mongoose.Schema({

    OrganizationName: {
        type: String,
        required: true,
        trim: true
    },

    Establishment: {
        type: Number,
        required: true
    },

    Otherresource: {
        type: String,
        required: true,
        trim: true
    }

}, { versionKey: false, timestamps: true })


module.exports = mongoose.model('organization', OrganizationSchema)





