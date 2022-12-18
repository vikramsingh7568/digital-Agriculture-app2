
const CropFieldModel = require('../model/CropFieldModel')
const mongoose = require("mongoose")

//============================================= Create Crop Field =====================================//

const createCropField = async (req, res) => {

    try {
        let data = req.body

        const { CropPropertyId, pesticides, DurationInnumber, Weather } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Please Enter the Data in Request Body' })

        if (!mongoose.isValidObjectId(CropPropertyId)) return res.status(400).send({ status: false, message: `${CropPropertyId} it's not valid CropPropertyId Please check Ones` })

        if (!CropPropertyId) return res.status(400).send({ status: false, msg: 'Please enter CropPropertyId' })
        if (!pesticides) return res.status(400).send({ status: false, msg: 'Please enter pesticides' })
        if (!DurationInnumber) return res.status(400).send({ status: false, msg: 'Please enter DurationInnumber' })
        if (!Weather) return res.status(400).send({ status: false, msg: 'Please enter Weather' })

        let saveData = await CropFieldModel.create(data)

        res.status(201).send({ status: true, "message": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

module.exports = { createCropField }