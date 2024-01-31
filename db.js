const mongoose = require('mongoose')
const MONGO_URL ='mongodb+srv://tehilla183:123456Aden@cluster0.0jwq3c9.mongodb.net/?retryWrites=true&w=majority'
function connect(){

try{
mongoose.connect( MONGO_URL )
.then(()=>{console.log('DB Connection Success');})
}
catch(error){
    console.log("mongoDB Error:", error);
}
}
module.exports = {connect}