const mongoose=require("mongoose")

const user=new mongoose.Schema({
    username:{type:String},
   

},
{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}}
)



const users=(mongoose.model("users",user))
module.exports={users}