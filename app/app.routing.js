System.register(['@angular/router', './home/home.component', './users/users.component', './users/newuser.component', './posts/posts.component', './can-deactivate-on-dirty'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, users_component_1, newuser_component_1, posts_component_1, can_deactivate_on_dirty_1;
    var routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (newuser_component_1_1) {
                newuser_component_1 = newuser_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (can_deactivate_on_dirty_1_1) {
                can_deactivate_on_dirty_1 = can_deactivate_on_dirty_1_1;
            }],
        execute: function() {
            exports_1("routing", routing = router_1.RouterModule.forRoot([
                { path: 'users', component: users_component_1.UsersComponent },
                { path: 'users/new', component: newuser_component_1.NewUserComponent, canDeactivate: [can_deactivate_on_dirty_1.PreventUnsavedChangesGuard] },
                { path: 'posts', component: posts_component_1.PostsComponent },
                { path: '**', component: home_component_1.HomeComponent }
            ]));
        }
    }
});
//# sourceMappingURL=app.routing.js.map