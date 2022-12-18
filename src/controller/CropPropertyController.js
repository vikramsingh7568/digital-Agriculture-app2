
const CropPropertyModel = require('../model/CropPropertyModel')

//============================================= Create Crop Property =====================================//
const createCropProperty = async (req, res) => {

    try {
        let data = req.body

        const { cropcycle, season, months } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Please Enter the Data in Request Body' })
        if (!cropcycle) return res.status(400).send({ status: false, msg: 'Please enter cropcycle' })

        if (!season) return res.status(400).send({ status: false, msg: 'Please enter season' })
        if (!months) return res.status(400).send({ status: false, msg: 'Please enter months' })

        let saveData = await CropPropertyModel.create(data)

        res.status(201).send({ status: true, "message": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

module.exports = { createCropProperty }