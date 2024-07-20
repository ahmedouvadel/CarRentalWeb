import { Component, OnInit } from "@angular/core";
import { UsersService } from "../Services/userservice/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.css",
})
export class UsersComponent implements OnInit {
  User:any[] = [] // type array and the array content same arrays

  constructor( private userService:UsersService){}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.User=[];
    this.userService.getAllUsers().subscribe({
      next:(data:any)=>{
        this.User=data
      },
      error:err=>{
        console.log(err)
      }
    })

  }
}
