import {FaTrash,FaPen} from 'react-icons/fa'
import { toggleTodo } from '../redux/actions';
import { changeTodo } from '../redux/actions';
import { deleteTodo } from '../redux/actions';

import {useDispatch} from 'react-redux'
import { useState } from 'react';


export const Task = ({todo}) => {
    const [edit,setEdit] = useState(false)
    const [value,setValue] = useState(todo.data)
    // const edit = useRef(false)
    // const OnClick = () => {
    //     edit.current = !edit.current;
    // }

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEdit(!edit)
        dispatch(changeTodo(todo._id,value))
    }
    const  OnTaskClick = () => {
        console.log('clicked');
        dispatch(toggleTodo(todo._id));
    }


    return (
       <li className={`w-[80%] sm:w-1/2 mx-auto border flex flex-row justify-between cursor-pointer text-white bg-blue-950 p-2 rounded-md ${todo.done? 'line-through':' ' }`} 
           onClick={OnTaskClick}
       >
        <div>
        <span className={edit? 'hidden' : ' '}>{todo.data}</span>
        {/* <input className={edit? ' ': 'hidden'} /> */}
        <form onSubmit={onFormSubmit} className={edit? '': 'hidden'}>
        <input value={value} onChange={(e)=>setValue(e.target.value)} className= 'bg-blue-950 border border-t-0 border-x-0 border-b' placeholder='Change Task' />
        </form>
        
        </div>
          
        <div className='display flex flex-row' >
        <span className='mr-1 my-auto'>
            <FaTrash className=' z-10' onClick={()=>dispatch(deleteTodo(todo._id))}/>
        </span>
        <span className='mx-1 my-auto'>
            <FaPen className='z-10' onClick={()=>setEdit(!edit)}/>
        </span>

        </div>
       
       </li>
    )
}