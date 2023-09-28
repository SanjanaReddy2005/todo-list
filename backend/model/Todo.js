const mongoose = require('mongoose')


const ToDoSchema = new mongoose.Schema({
    data:{
        type:String,
        required: true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const todo = mongoose.model('todo',ToDoSchema)

module.exports = todo