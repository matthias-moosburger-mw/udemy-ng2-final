import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/newuser.component';
import { PostsComponent } from './posts/posts.component';
import { PreventUnsavedChangesGuard } from './can-deactivate-on-dirty';

export const routing = RouterModule.forRoot([
    { path: 'users', component: UsersComponent },
    { path: 'users/new', component: NewUserComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: HomeComponent }
])