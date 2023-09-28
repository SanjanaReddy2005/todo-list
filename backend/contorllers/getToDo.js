const ToDo = require('../model/Todo.js')

const getAllTodos = async(req,res) => {
    try{
        
           const todos = await ToDo.find().sort({'createdAt': -1})
        //    console.log(todos)
        
           return res.status(200).json(todos);
    
       }catch (error){
           return res.status(500).json(error.message);
       }
        
}

module.exports = getAllTodos;