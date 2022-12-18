
let express = require('express')
const route  = require('./router/route')
const mongoose = require('mongoose')
let app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/CROP-PROJECT?retryWrites=true&w=majority')
.then(() => console.log('mongodb connected successfully '))
.catch(err => console.log('mongodb not connected'));


app.use('/', route)

app.listen(3000 , () => {
    console.log('Server running on 3000 port');
})