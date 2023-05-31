
const mongoose=require("mongoose")
var curr_aval=80
const seatBooking=new mongoose.Schema({
    no_of_tick:{type:Number},
    user:{type:mongoose.Types.ObjectId,ref:"users"}

},
{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}}
)


const ticket=(mongoose.model("tickets",seatBooking))
module.exports={ticket,curr_aval}