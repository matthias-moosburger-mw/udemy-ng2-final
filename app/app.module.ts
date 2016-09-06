import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar.component';
import { NotFoundComponent } from './notfound.component';

import { usersRouting } from './users/users.routing';
import { postsRouting } from './posts/posts.routing';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, postsRouting, usersRouting, routing, UsersModule, PostsModule ],
  declarations: [ AppComponent, HomeComponent, NavbarComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }