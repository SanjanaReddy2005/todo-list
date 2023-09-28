const ToDo = require('../model/Todo.js')

const changeTodo = async(req,res) => {
    try{

          await ToDo.findOneAndUpdate(
            {_id: req.params.id},
            {data: req.body.data},
          )
          // await todo.save();

          const todo = await ToDo.findById(req.params.id);
           return res.status(200).json(todo);
    
       }catch (error){
           return res.status(500).json(error.message);
       }
        
}

module.exports = changeTodo;