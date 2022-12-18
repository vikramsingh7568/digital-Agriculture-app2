
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const FieldSchema = new mongoose.Schema({

    RegionId: {
        type: ObjectId,
        ref: 'Region',
        required: true,
        trim: true
    },
    PropertyId: {
        type: ObjectId,
        ref: 'property',
        required: true,
        trim: true
    },
    agricultureFeild: {
        type: String,
        required: true,
        trim: true
    },
    farmsize: {
        type: String,
        required: true,
        trim: true
    },
    longitude: {
        type: String,
        required: true,
        trim: true
    },
    latitude: {
        type: String,
        required: true,
        trim: true
    },
    Croprecords:{
        type: String,
        required: true,
        trim: true
    }


}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Field', FieldSchema)
