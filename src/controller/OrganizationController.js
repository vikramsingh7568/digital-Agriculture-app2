
const OrganizationModel = require('../model/OrganizationModel')

//============================================= Create Organization =====================================//

const createOrganization = async (req, res) => {

    try {
        let data = req.body

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Please Enter the Data in Request Body' })

        if (!data.OrganizationName) return res.status(400).send({ status: false, msg: 'Please enter  OrganizationName' })

        if (!data.Establishment) return res.status(400).send({ status: false, msg: 'Please enter  Establishment' })
        if (!data.Otherresource) return res.status(400).send({ status: false, msg: 'Please enter  Otherresource' })

        let saveData = await OrganizationModel.create(data)
        res.status(201).send({ status: true, "message": saveData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }


}


//============================================= Get Organization =====================================//

const getOrganization = async (req, res) => {
    try {
        let findOraganization = await OrganizationModel.find()

        if (findOraganization.length == 0) return res.status(400).send({ status: false, message: `Organization is not Found` })

        res.status(200).send({ status: true, "message": findOraganization })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


module.exports = { createOrganization, getOrganization }