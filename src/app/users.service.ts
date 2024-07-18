import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isExist:any="yes";
  userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('token')!==null){  
      this.userData.next(this.isExist);
    }
  }
 getUsers():Observable<any>{
  return this._HttpClient.get("https://jsonplaceholder.typicode.com/users")
 }
 getUserDetails(userId:number):Observable<any>{
  return this._HttpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
 }
 logout():void{
  this.userData.next(null);
  localStorage.removeItem('token');
  this._Router.navigate(['/login']);
}
}
