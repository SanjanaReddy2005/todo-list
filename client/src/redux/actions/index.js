import axios from 'axios'

import {ADDNEW_TO,CHANGE_TODO,DELETE_TODO,GETALL_TODO,TOGGLE_TAB,TOGGLE_TODO} from './type'

const API_URL = 'http://localhost:8000';

export const addNewTodo =  (data) => async(dispatch)  => {

    try{
       const res = await axios.post(`${API_URL}/todos`,{data})
       dispatch({type:ADDNEW_TO,payload: res.data})
    //    console.log(res.data)
    }catch(error){
        console.log('Error while calling addNewTo API',error.message)
    }
}

export const getAllTodos = () => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos`)
        dispatch({type:GETALL_TODO,payload: res.data})
     }catch(error){
         console.log('Error while calling getToDo API',error.message)
     }
}

export const toggleTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`)
        dispatch({type:TOGGLE_TODO,payload: res.data})
     }catch(error){
         console.log('Error while calling getToDo API',error.message)
     }
}

export const changeTodo = (id,data) => async (dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/todos/${id}`,{data})
        dispatch({type:CHANGE_TODO,payload: res.data})
     }catch(error){
         console.log('Error while calling getToDo API',error.message)
     }
}
export const deleteTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        dispatch({type:DELETE_TODO,payload: res.data})
     }catch(error){
         console.log('Error while calling getToDo API',error.message)
     }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({type:TOGGLE_TAB, selected: tab})
} 
