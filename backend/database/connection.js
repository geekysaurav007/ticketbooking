

const mongoose=require("mongoose")
const DB_url="mongodb+srv://ranjansaurav07:Saurav%40%407033@cluster0.aon8zci.mongodb.net/Tickets"
async function createConnection(params){
    const connection=await mongoose.connect(DB_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    connection?console.log("database connected"):console.log("not connected")
}
module.exports=createConnection