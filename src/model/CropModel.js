
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const CropSchema = new mongoose.Schema({

    CropFieldId: {
        type: ObjectId,
        ref: 'CropField',
        required: true,
        trim: true
    },

    cropName: {
        type: String,
        required: true,
        trim: true
    },

    categories: {
        type: String,
        required: true,
        trim: true
    },

    Nutrition: {
        type: [String],
        required: true,
        trim: true
    },

    profit :{
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Crop', CropSchema)