import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { TicketBookingService } from './services/ticket-booking.service';
import { createMayBeForwardRefExpression } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unstop_frontend';
  curr_ticket: any = 80
  flag: boolean = true
  flag1: boolean = false
  my_val: any = []
  iter = new Array()
  mk_chair: boolean = false


  ngOnInit(): void {

  }
  constructor(private bookservice: TicketBookingService) { }
  ticketForm = new FormGroup({
    ticket: new FormControl('', Validators.required)
  })
  submitName = new FormGroup({
    username: new FormControl("", Validators.required)
  })

// for user registration------------------------
  submitNamef(data1: any) {
    this.bookservice.userRegistration(data1).subscribe((res: any) => {
      this.my_val = res
      console.warn(this.my_val["data"].username)
      console.warn(this.my_val["data"]._id)
      localStorage.setItem("user_id", this.my_val["data"]._id)
      this.flag1 = true
      this.flag = false
      this.ticketForm.reset()
    })
  }
// for generating random number-----------------------------
ge():any{
  let x=Math.ceil(Math.random ()*10)
  return x
}
// for booking ticket----------------------->>>
  bookTicket(data: any): any {
    if (data.ticket < this.curr_ticket) {
      this.bookservice.ticketBook(data, localStorage.getItem("user_id")).
        subscribe((res: any) => {
          this.curr_ticket = res.aval
          for(let i=0;i<data.ticket;i++){
            this.iter.push("1")
          }
         
          console.warn(this.iter)
          alert(`remaining tickets  are ${res.aval}`)

        })


    }



  }


}
