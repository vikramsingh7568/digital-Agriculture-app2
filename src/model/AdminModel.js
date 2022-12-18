
const mongoose = require('mongoose')


const AdminSchema = new mongoose.Schema({

    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },
    Companyemail: { type: String, required: true, trim: true },
    Companypassword: { type: String, required: true, trim: true, min: 8, max: 15 },

}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Admin', AdminSchema)