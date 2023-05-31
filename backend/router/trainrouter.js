const express=require("express")

const {bookTicket,userSave}=require('../controllers/ticketBook')

const ticketRouter=express.Router()
ticketRouter.post("/save",userSave)

ticketRouter.post('/:id',bookTicket)

module.exports={ticketRouter,}