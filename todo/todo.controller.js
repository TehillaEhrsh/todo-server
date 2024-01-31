const todoModel = require('./todo.model')

async function create(data){
  return await  todoModel.create(data)
}

async function read(filter={}){
  let res = await todoModel.find(filter)
  return res
}

async function readOne(filter={}){
    let user =  await todoModel.findOne(filter)
    return user
}
async function updateOne(filter={} , Done){

    let res= await todoModel.updateOne(id,{done: Done})
    console.log(res);
    return res
}

async function del(id){
return await updateById(id,{isActive: false})}

async function updateById(id,data){
    return await todoModel.updateOne({_id: id}, data)
}

async function deleteAll(filter={}){
    return await todoModel.updateMany(filter,{isActive: false})
}
async function updateMany(filter ={},data){
    return await todoModel.updateMany(filter, {done: data})
}

module.exports ={create , read ,  del , readOne, updateOne ,updateById , deleteAll}