import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchPipe } from './search.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbyuserNamePipe } from './searchbyuser-name.pipe';
import { HeaderInterceptor } from './header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    SearchPipe,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent,
    SearchbyuserNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
    
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:HeaderInterceptor
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
