
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const PropertySchema = new mongoose.Schema({

    OrganizationId: { type: ObjectId, ref: 'organization', required: true ,  trim :true},
    ownership: { type: String, enum: ["owned", "lease"] ,  trim :true},
    purchaseDate: { type: String ,  trim :true},
    leasePeriod: { type: String ,  trim :true },
    FieldArea: { type: String, required: true  ,  trim :true},
    PropertyLocation: { type: String,required: true , trim :true},

}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('property', PropertySchema)


