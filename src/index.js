
let express = require('express')
const route  = require('./router/route')
const mongoose = require('mongoose')
let app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://vikramsingh7568:AlLbBhXCJYPKmwIK@cluster0.5swhv4u.mongodb.net/digital-Agriculture-app2?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)

app.listen(3000 , () => {
    console.log('Server running on 3000 port');
})