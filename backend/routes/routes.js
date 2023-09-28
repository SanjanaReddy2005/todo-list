const { Router } = require('express');
const express = require('express');
const route = express.Router();

const getAllTodos = require('../contorllers/getToDo.js')
const addToDo = require('../contorllers/addToDo.js')
const toggleTodoDone = require('../contorllers/toggletododone')
const changeTodo = require('../contorllers/changeTodo')
const deleteTodo = require('../contorllers/delTodo')


route.post('/todos',addToDo)
route.get('/todos',getAllTodos)
route.get('/todos/:id',toggleTodoDone)
route.put('/todos/:id',changeTodo)
route.delete('/todos/:id',deleteTodo)

module.exports = route;