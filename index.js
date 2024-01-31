const express= require('express')
const app = express()
const db = require('./db')
const cors = require('cors')
// require('dovenv').config()
const PORT = 2087
const todoRouter = require('./todo/todo.router.js')

db.connect()

app.use(cors())
app.use(express.json())

app.use('/todo', todoRouter)
app.listen(PORT, ()=> console.log("***server is up***",PORT))