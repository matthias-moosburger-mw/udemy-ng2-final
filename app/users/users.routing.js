System.register(['@angular/router', './newuser.component', './users.component', '../can-deactivate-on-dirty'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, newuser_component_1, users_component_1, can_deactivate_on_dirty_1;
    var usersRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (newuser_component_1_1) {
                newuser_component_1 = newuser_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (can_deactivate_on_dirty_1_1) {
                can_deactivate_on_dirty_1 = can_deactivate_on_dirty_1_1;
            }],
        execute: function() {
            exports_1("usersRouting", usersRouting = router_1.RouterModule.forChild([
                {
                    path: 'users/:id',
                    component: newuser_component_1.NewUserComponent,
                    canDeactivate: [can_deactivate_on_dirty_1.PreventUnsavedChangesGuard]
                },
                {
                    path: 'users/new',
                    component: newuser_component_1.NewUserComponent,
                    canDeactivate: [can_deactivate_on_dirty_1.PreventUnsavedChangesGuard]
                },
                { path: 'users', component: users_component_1.UsersComponent },
            ]));
        }
    }
});
//# sourceMappingURL=users.routing.js.map