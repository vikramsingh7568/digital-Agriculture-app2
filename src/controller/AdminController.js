
const AdminModel = require('../model/AdminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//============================================= Create Admin  =====================================//

const createAdmin = async function (req, res) {
    try {
        let data = req.body;

        const { fname, lname, Companyemail, phone, Companypassword } = data;

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "Please provide details in body" });

        if (!fname) return res.status(400).send({ status: false, message: "please enter First Name" });
        if (!lname) return res.status(400).send({ status: false, message: "please enter First Name" });
        if (!Companyemail) return res.status(400).send({ status: false, message: "please enter First Name" });
        if (!Companypassword) return res.status(400).send({ status: false, message: "please enter First Name" });

        let saltRound = 10
        data.Companypassword = bcrypt.hashSync(Companypassword, saltRound)


        const savaData = await AdminModel.create(data)

        res.status(201).send({ status: false, message: savaData });

    } catch (error) {
        res.status(500).send({ message: "Error", error: error.message });

    }
}


//============================================= Login   =====================================//

let loginAdmin = async function (req, res) {
    try {
        let data = req.body;
        const { Companyemail, Companypassword } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "Please provide details in body" });

        if (!Companyemail || Companyemail.trim().length == 0) return res.status(400).send({ status: false, message: "Please provide Email" });

        if (!Companypassword || Companypassword.trim().length == 0) return res.status(400).send({ status: false, message: "Please provide Password" });

        if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(Companyemail)) {
            return res.status(400).send({
                status: false, message: "Email should be valid email address"
            });
        }

        if (!/^.{8,15}$/.test(Companypassword)) return res.status(400).send({ status: false, message: "password length should be in between 8 to 15" });

        let userData = await AdminModel.findOne({ Companyemail: Companyemail });
        if (!userData) return res.status(400).send({ status: false, message: "Email or the Password doesn't match" });

        const checkPassword = await bcrypt.compare(Companypassword, userData.Companypassword)

        if (!checkPassword) return res.status(401).send({ status: false, message: `Login failed!! password is incorrect.` });

        let userId = userData._id
        let token = jwt.sign(
            {
                AdminId: userId,
                project: "agri culture app",
            }, "Syngenta", { expiresIn: '100day' }

        );

        res.status(200).send({ status: true, message: "Admin login successfull", data: { AdminId: userId, Token: token } });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};




module.exports = { createAdmin, loginAdmin }