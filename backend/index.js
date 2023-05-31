const express=require("express")
require('./database/connection')()

const morgan=require("morgan")
const {ticketRouter}=require("./router/trainrouter")

const app=express()
app.use(express.json())
app.use(morgan("dev"))

const cors=require("cors")
app.use(cors())

app.listen(5000,()=>{
    console.log("listening on port 5000")
})

const trainApi=express.Router()
app.use("/",trainApi)




trainApi.use("/tickets",ticketRouter)
