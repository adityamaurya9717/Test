import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  
 fun(){
   alert("hello")
  
 }
  title = "aditya";
  temp=""
 
  array:Array<string>=["Java","Angular","React","HTML","CSS"]
  
  //student=[{"name":"Aditya","age":"45","city":"noida"},{"name":"Ankit","age":"45","city":"noida"},
  //{"name":"rohit","age":"45","city":"noida"}]
  student=null
  
  data2=[
      {
        "name":"aditya",
        "profile":"adadad",
        "contact":"7984121",
        "email":"dajklnd@gmail.com",
        "address":"Delhi",
        "salary":"4643"
      },
      {
        "name":"ankit",
        "profile":"adadad",
        "contact":"7984121",
        "email":"dajklnd@gmail.com",
        "address":"Delhi",
        "salary":"4643"
      },
      {
        "name":"rohit",
        "profile":"adadad",
        "contact":"7984121",
        "email":"dajklnd@gmail.com",
        "address":"Delhi",
        "salary":"4643"
      }

  ]
}
