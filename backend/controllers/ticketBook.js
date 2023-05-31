const { ticket, curr_aval } = require("../models/trainbook")
const { users } = require("../models/user")
curr_ticket = 80

// async function getNoOfTicket(){
//     return await ticket.tickets()
// }
async function userSave(req, resp) {
    value = req.body
    data = await users(value).save()
    return resp.json({ data })
}

async function bookTicket(req, resp, next) {

    console.log(req.body.ticket)
    let req_tkt = req.body.ticket
    curr_ticket = parseInt(curr_ticket) - parseInt(req_tkt)
    console.log(curr_ticket)
    return resp.json({ aval: curr_ticket })



}

module.exports = { bookTicket, userSave }