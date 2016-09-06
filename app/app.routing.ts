import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreventUnsavedChangesGuard } from './can-deactivate-on-dirty';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: '**', redirectTo: '' }
])