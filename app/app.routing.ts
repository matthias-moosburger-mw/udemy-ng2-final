import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreventUnsavedChangesGuard } from './can-deactivate-on-dirty';
import { NotFoundComponent } from './notfound.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'notfound', component: NotFoundComponent},
    { path: '**', redirectTo: '' }
])