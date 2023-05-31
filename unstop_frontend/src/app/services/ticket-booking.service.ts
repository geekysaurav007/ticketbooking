import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private router:Router,private http:HttpClient) { }

  ticketBook(data:any,data1:any){
    return this.http.post(`http://localhost:5000/tickets/${data1}`,data,data1)
  }

  userRegistration(data1:any){
   return this.http.post("http://localhost:5000/tickets/save",data1)
  }
}
