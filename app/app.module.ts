import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/newuser.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar.component';
import { UsersService } from './users/users.service';
import { PreventUnsavedChangesGuard } from './can-deactivate-on-dirty';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, CommonModule, ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent, UsersComponent, NewUserComponent, PostsComponent, HomeComponent, NavbarComponent ],
  providers:    [ UsersService, PreventUnsavedChangesGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }