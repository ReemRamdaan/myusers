import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  myUsers:User[]=[];
  userNames:string[]=[]
  searchTerm:string="";
  searchByUserName:string="";
  p:number=1;
constructor(private _UsersService:UsersService,private _NgxSpinnerService:NgxSpinnerService ){ }
ngOnInit(): void {
  this._NgxSpinnerService.show();
 this._UsersService.getUsers().subscribe({
  next:(data)=>{
     this.myUsers=data;
     this._NgxSpinnerService.hide();
     this.sortByName(this.myUsers)
  },
  error:(err)=>{
    console.log(err)
  },  
 }) 
}
sortByName(users:User[]):void{
  users.sort((a,b)=>{
    if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()){
return -1;
    }
    if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()){
return 1;
    }
    return 0;
  })
  this.myUsers=users;  
}
}
