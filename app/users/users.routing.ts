
import { RouterModule  }    		  from '@angular/router';

import { NewUserComponent } 		  from './newuser.component';
import { UsersComponent }    		  from './users.component';
import { PreventUnsavedChangesGuard } from '../can-deactivate-on-dirty';

export const usersRouting = RouterModule.forChild([
	{ 
		path: 'users/:id', 
		component: NewUserComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'users/new', 
		component: NewUserComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
    { path: 'users', component: UsersComponent },
]);