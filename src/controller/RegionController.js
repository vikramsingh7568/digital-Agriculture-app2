
const RegionModel = require('../model/RegionModel')
const mongoose = require("mongoose")


//============================================= Create Region  =====================================//

const createRegion = async (req, res) => {

    try {

        let data = req.body

        const { PropertyId, State, AgriculturalRegion, CropType } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Please Enter the Data in Request Body' })
        if (!mongoose.isValidObjectId(PropertyId)) return res.status(400).send({ status: false, message: `${PropertyId} it's not valid PropertyId Please check Ones` })

        if (!PropertyId) return res.status(400).send({ status: false, msg: 'Please enter PropertyId' })
        if (!State) return res.status(400).send({ status: false, msg: 'Please enter State' })
        if (!AgriculturalRegion) return res.status(400).send({ status: false, msg: 'Please enter AgriculturalRegion' })
        if (!CropType) return res.status(400).send({ status: false, msg: 'Please enter CropType' })

        let saveData = await RegionModel.create(data)

        res.status(201).send({ status: true, "message": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


//============================================= Get Region  =====================================//

const getRegion = async (req, res) => {

    try {
        let propertyId = req.params.propertyId

        if (!mongoose.isValidObjectId(propertyId)) return res.status(400).send({ status: false, message: `${propertyId} it's not valid propertyId Please check Ones` })

        let finddata = await RegionModel.find({ PropertyId: propertyId }).populate({ path: 'PropertyId', populate: [{ path: 'OrganizationId', model: 'organization' }] })

        if (!finddata) return res.status(400).send({ status: false, message: `Region is not Found` })

        res.status(200).send({ status: true, "message": finddata })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


module.exports = { createRegion, getRegion }