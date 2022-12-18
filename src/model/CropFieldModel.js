
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const CropFieldSchema = new mongoose.Schema({

    CropPropertyId: {
        type: ObjectId,
        ref: 'CropProperty',
        required: true,
        trim: true
    },

    pesticides: {
        type: String,
        required: true,
        trim: true
    },

    DurationInnumber: {
        type: String,
        required: true,
        trim: true
    },

    Weather: {
        type: String,
        required: true,
        trim: true
    },



}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('CropField', CropFieldSchema)