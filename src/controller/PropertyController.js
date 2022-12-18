
const PropertyModel = require('../model/PropertyModel')
const mongoose = require("mongoose")

//============================================= Create Property =====================================//

const createProperty = async (req, res) => {

    try {
        let data = req.body

        const { OrganizationId, ownership, purchaseDate, leasePeriod, FieldArea, PropertyLocation } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Please Enter the Data in Request Body' })

        if (!mongoose.isValidObjectId(OrganizationId)) return res.status(400).send({ status: false, message: `${OrganizationId} it's not valid OrganizationId Please check Ones` })

        if (!OrganizationId) return res.status(400).send({ status: false, msg: 'Please enter OrganizationId' })
        if (!ownership) return res.status(400).send({ status: false, msg: 'Please enter  ownership' })

        if (purchaseDate) {
            if (!purchaseDate) return res.status(400).send({ status: false, msg: 'Please enter purchaseDate' })
        }
        if (leasePeriod) {
            if (!leasePeriod) return res.status(400).send({ status: false, msg: 'Please enter leasePeriod' })
        }
        if (!FieldArea) return res.status(400).send({ status: false, msg: 'Please enter FieldArea' })
        if (!PropertyLocation) return res.status(400).send({ status: false, msg: 'Please enter PropertyLocation' })

        let saveData = await PropertyModel.create(data)

        res.status(201).send({ status: true, "message": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

//============================================= Get Property =====================================//

const getProperty = async (req, res) => {

    try {
        let organisationId = req.params.organisationId

        if (!mongoose.isValidObjectId(organisationId)) return res.status(400).send({ status: false, message: `${organisationId} it's not valid OrganizationId Please check Ones` })

        let finddata = await PropertyModel.findOne({ OrganizationId: organisationId }).populate('OrganizationId')

        if (!finddata) return res.status(400).send({ status: false, message: `Property is not Found` })

        res.status(200).send({ status: true, "message": finddata })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}


module.exports = { createProperty, getProperty }