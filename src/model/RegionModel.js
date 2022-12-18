
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const RegionSchema = new mongoose.Schema({

    PropertyId: {
        type: ObjectId,
        ref: 'property',
        required: true,
        trim :true
    },
    State:{
        type: String,
        required: true,
        trim :true
    },
    AgriculturalRegion: {
        type: String,
        required: true,
        trim :true
    },
    CropType: {
        type: [String],
        required: true,
        trim :true
    },


}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Region', RegionSchema)







