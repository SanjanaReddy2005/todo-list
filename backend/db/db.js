const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const Connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.segppmv.mongodb.net/?retryWrites=true&w=majority `
    mongoose.connect( MONGODB_URI, {useNewUrlParser: true} )

    mongoose.connection.on('connected',()=>{
        console.log('database connected sucessufullly');
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('error while connection database', error.message)
    })
}

module.exports = Connection;