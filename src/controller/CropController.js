
const CropModel = require('../model/CropModel')
const mongoose = require("mongoose")

//============================================= Create Crop =====================================//
const createCrop = async (req, res) => {
    try {

        let data = req.body
        const { CropFieldId, cropName, categories, Nutrition, profit } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Please Enter the Data in Request Body' })

        if (!mongoose.isValidObjectId(CropFieldId)) return res.status(400).send({ status: false, message: `${CropFieldId} it's not valid CropFieldId Please check Ones` })

        if (!CropFieldId) return res.status(400).send({ status: false, msg: 'Please enter CropFieldId' })
        if (!cropName) return res.status(400).send({ status: false, msg: 'Please enter cropName' })
        if (!categories) return res.status(400).send({ status: false, msg: 'Please enter categories' })
        if (!Nutrition) return res.status(400).send({ status: false, msg: 'Please enter Nutrition' })
        if (!profit) return res.status(400).send({ status: false, msg: 'Please enter profit' })

        let saveData = await CropModel.create(data)
        res.status(201).send({ status: true, "message": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

//============================================= get Crop =====================================//

const getCrop = async (req, res) => {

    try {

        let finddata = await CropModel.find().populate({ path: 'CropFieldId', populate: [{ path: 'CropPropertyId', model: 'CropProperty' }] })
        if (finddata.length == 0) return res.status(400).send({ status: false, message: `crop data is not Found` })
        res.status(200).send({ status: true, "message": finddata })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}


module.exports = { createCrop, getCrop }