import * as actionTypes from '../actions/type.js'



export const todoReducers = (state=[], action) => {
    switch(action.type){
        case actionTypes.ADDNEW_TO:
            return [action.payload,...state]
        case actionTypes.GETALL_TODO:
            return action.payload
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo, done: !todo.done} : todo
            ))
        case actionTypes.CHANGE_TODO:
            return state.map(todo=>(
                todo._id === action.payload._id ? {...todo,data : action.payload.data} : todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo=> todo._id !== action.payload._id)
        default:
            return state
    }
} 