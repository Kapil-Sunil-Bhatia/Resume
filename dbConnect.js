const mongoose = require('mongoose')

const URL = 'mongodb+srv://kapilbhatia:Kapil12345@users.peaohgr.mongodb.net/Resume'

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongo DB Connection Successfull')
})
connection.on('error', (error) => {
    console.log(error)
})