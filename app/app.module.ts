import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,UsersComponent, PostsComponent, HomeComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }