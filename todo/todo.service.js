const todoController= require("./todo.controller")
const moment = require('moment');


async function createTodo(data){
 if(!data.title) throw "not found taxt"
console.log(data);
let todo=  {  
    title : data.title, 
    done : false,
    date : data.Data
}
return await todoController.create(todo)
}

async function updateOne(id,data){
   let up= data.done
   if(!up == Boolean) throw 'done is not boolean'
   
return await todoController.updateOne({_id: id}, up)
}

async function readOne({id}){
    
return await todoController.readOne({_id: id})
}

async function read(){

   let todoList=await todoController.read()
const newL=  todoList.forEach((n)=>{
const endDate = moment(n.date);
const currentDate = moment();
const duration = moment.duration(endDate.diff(currentDate));
const remainingHours = duration.as('hours');

n={...n, hours :  remainingHours}


})


return  todoList
}

async function delAll(filter={}){
return await todoController.deleteAll(filter)
}

async function delOne(id){
    return await todoController.del(id)
}
async function updateMany(data){
if(!data==Boolean)throw "blabla"
return await todoController.updateMany(data)
}

module.exports={delAll, delOne,updateMany, read,readOne,updateOne, createTodo}