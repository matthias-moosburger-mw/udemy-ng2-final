import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersModule } from './users/users.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar.component';

import { usersRouting } from './users/users.routing';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, usersRouting, routing, UsersModule ],
  declarations: [ AppComponent, HomeComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }