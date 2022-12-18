
const mongoose = require('mongoose')


const CropPropertySchema = new mongoose.Schema({

    cropcycle: {
        type: String,
        reuired: true,
        trim: true
    },

    season: {
        type: String,
        reuired: true,
        trim: true
    },
    months: {
        type: String,
        reuired: true,
        trim: true
    }


}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('CropProperty', CropPropertySchema)