import { useState } from "react"

import { addNewTodo } from "../redux/actions"

import { useDispatch } from "react-redux"



export const Form = () => {
    const [input,setInput] = useState('')

    const dispatch = useDispatch();
    const OnSubmit = (e) => {
      console.log(e)
      e.preventDefault();
      console.log(input)

      dispatch(addNewTodo(input))
    }
    const OnChange = (e) => {
      setInput(e.target.value)
      console.log(e.target.value)
    }

  
    return (
      <div>
         <form className="flex" onSubmit={OnSubmit}>
          <input className="w-[80%] sm:w-1/2 border border-blue-950 rounded-md mx-auto px-10 py-1" autoComplete="off" placeholder="AddTask..." onChange={OnChange} ></input>
         
        </form>
        

      </div>
       
    ) 
}