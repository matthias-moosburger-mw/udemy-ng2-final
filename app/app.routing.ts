import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

export const routing = RouterModule.forRoot([
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: HomeComponent }
])