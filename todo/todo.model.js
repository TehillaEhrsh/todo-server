const mongoose= require('mongoose')
const db = require('../db')
db.connect
const todoSchema= new mongoose.Schema({
    
    title: {
        type : String ,
        required : true 
    },
   
    date: {
        type : Date ,
        require: true,
    },
   done:{
    type : Boolean,
    default : false
   },
    isActive:{
        type : Boolean,
        default : true
    }
   

})
const todoModel = mongoose.model('todo', todoSchema)


module.exports = todoModel
