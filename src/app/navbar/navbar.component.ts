import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogin:boolean=false;
constructor(private _UsersService:UsersService){
  this._UsersService.userData.subscribe({
    next:()=>{
      if(this._UsersService.userData.getValue()!==null){
             this.isLogin=true;   
      }else{
        this.isLogin=false;
      }
    }
  })
}
logOut():void{
  this._UsersService.logout();
}
}
