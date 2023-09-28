const ToDo = require('../model/Todo.js')

const deleteTodo = async(req,res) => {
    try{
        //   const task  =  await ToDo.findById(req.params.id)
        const todo = await ToDo.findByIdAndDelete(req.params.id);

        //   const todo = await ToDo.findOneAndUpdate(
        //     {_id: req.params.id},
        //     {done: !task.done},
        //   )
          await todo.save();
          
          
           return res.status(200).json(todo);
    
       }catch (error){
           return res.status(500).json(error.message);
       }
        
}

module.exports = deleteTodo;