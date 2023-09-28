const express = require('express');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js')

const Connection = require('./db/db.js')

app.use(cors(
    {
        origin:"http://localhost:3000"
    }
))
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use('/',routes)

Connection();

app.listen(8000,()=>{
    console.log("server is rendering")
})

