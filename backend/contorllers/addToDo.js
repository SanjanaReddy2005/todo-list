const ToDo = require('../model/Todo.js')
const addToDo = async (req,res)=>{
   try{
    const newToDo = await ToDo.create({
        data: req.body.data,
        created: Date.now()
       })
    
       await newToDo.save();
       console.log(ToDo)
       
    
       return res.status(200).json(ToDo);

   }catch (error){
       return res.status(500).json(error.message);
   }
    
}

module.exports = addToDo