import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userId:any;
  userDetails:any;
constructor(private _UsersService:UsersService,private _ActivatedRoute:ActivatedRoute,private _NgxSpinnerService:NgxSpinnerService ){
  this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
    this.userId=params.get('userId');
  }
})
}
ngOnInit(): void {
  this._NgxSpinnerService.show()
  this._UsersService.getUserDetails(this.userId).subscribe({
    next:(data)=>{
       this.userDetails=data;
       this._NgxSpinnerService.hide() 
    },
    error:(err)=>console.log(err),  
   })
}
}
