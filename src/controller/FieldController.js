
const FieldModel = require('../model/FieldModel')
const mongoose = require("mongoose")


//============================================= Create Field =====================================//
const createField = async (req, res) => {

    try {
        let data = req.body

        let { RegionId, PropertyId, agricultureFeild, farmsize, longitude, latitude, Croprecords } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Please Enter the Data in Request Body' })

        if (!mongoose.isValidObjectId(RegionId)) return res.status(400).send({ status: false, message: `${RegionId} it's not valid RegionId Please check Ones` })

        if (!mongoose.isValidObjectId(PropertyId)) return res.status(400).send({ status: false, message: `${PropertyId} it's not valid PropertyId Please check Ones` })

        if (!RegionId) return res.status(400).send({ status: false, msg: 'Please enter RegionId' })
        if (!PropertyId) return res.status(400).send({ status: false, msg: 'Please enter PropertyId' })
        if (!agricultureFeild) return res.status(400).send({ status: false, msg: 'Please enter agricultureFeild' })
        if (!farmsize) return res.status(400).send({ status: false, msg: 'Please enter farmsize' })
        if (!longitude) return res.status(400).send({ status: false, msg: 'Please enter longitude' })
        if (!latitude) return res.status(400).send({ status: false, msg: 'Please enter latitude' })
        if (!Croprecords) return res.status(400).send({ status: false, msg: 'Please enter Croprecords' })

        let saveData = await FieldModel.create(data)

        res.status(201).send({ status: true, "message": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}



//============================================= Get Field =====================================//

const getField = async (req, res) => {

    try {
        let propertyId = req.params.propertyId
        let regionId = req.params.regionId

        if (!mongoose.isValidObjectId(regionId)) return res.status(400).send({ status: false, message: `${regionId} it's not valid RegionId Please check Ones` })

        if (!mongoose.isValidObjectId(propertyId)) return res.status(400).send({ status: false, message: `${propertyId} it's not valid PropertyId Please check Ones` })

        let finddata = await FieldModel.find({ PropertyId: propertyId, RegionId: regionId }).populate({ path: 'PropertyId', populate: [{ path: 'OrganizationId', model: 'organization' }] }).populate('RegionId')

        if (finddata.length == 0) return res.status(400).send({ status: false, message: `Field is not Found` })

        res.status(200).send({ status: true, "message": finddata })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


module.exports = { createField, getField }
