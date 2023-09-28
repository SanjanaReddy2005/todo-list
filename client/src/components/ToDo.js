import { useEffect } from "react"
import { deleteTodo, getAllTodos } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { ALL_TODOS,DONE_TODOS,ACTIVE_TODOS } from "../redux/actions/type"

import { Task } from "./Task"
import { Tabs } from "./Tabs"



export const Todo = () =>{

const dispatch = useDispatch();
const todos =  useSelector(state => state.todos)
const currentTab = useSelector(state => state.currentTab)
console.log(todos)
console.log(currentTab)

     useEffect(()=>{
       dispatch(getAllTodos());
      
     },[])

const getTodos = () => {
  if(currentTab === ALL_TODOS) {
    return todos;
  }else if(currentTab === ACTIVE_TODOS){
    return todos.filter(todo => !todo.done )
  }else if(currentTab === DONE_TODOS){
    return todos.filter(todo => todo.done)
  }
}

const removeDoneTodos = () => {
  todos.forEach(({done, _id})=>{
       if(done){
        dispatch(deleteTodo(_id));
       }
  });
}

    return (
      <article className=" my-10">
        <div className={`${todos.some(todo => todo.done)? 'flex flex-row justify-between' :null}`}> 
           <Tabs currentTab={currentTab} />
          {
            todos.some(todo => todo.done) ? (
            <button 
              onClick={removeDoneTodos}
              className='border rounded-md px-2 bg-slate-950 hover:shadow-lg text-white'
            >
              Remove
              </button>) :null
          }
        </div>
        <ul>
          {
            getTodos().map((todo) => (
              // <li>{todo.data}</li>
              <Task key={todo.id} todo={todo}/>
            ))
          }
        </ul>
      </article>
    )
}

