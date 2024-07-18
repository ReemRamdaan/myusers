import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor{
  constructor(){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token:any=localStorage.getItem('token');
   let updatedRequest= req.clone({
      headers:req.headers.set("token",token),
    })
    return next.handle(updatedRequest)
  }
  //The API which from i fetch data does not need headers so i could not activate this interceptor.
}
