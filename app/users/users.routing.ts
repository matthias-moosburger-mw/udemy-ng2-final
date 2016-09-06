
import { RouterModule  }    		  from '@angular/router';

import { UserFormComponent } 		  from './user-form.component';
import { UsersComponent }    		  from './users.component';
import { PreventUnsavedChangesGuard } from '../can-deactivate-on-dirty';

export const usersRouting = RouterModule.forChild([
	{ 
		path: 'users/:id', 
		component: UserFormComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'users/new', 
		component: UserFormComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
    { path: 'users', component: UsersComponent },
]);