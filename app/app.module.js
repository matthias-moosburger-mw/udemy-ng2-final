System.register(['@angular/core', '@angular/platform-browser', './users/users.module', './posts/posts.module', './app.component', './home/home.component', './navbar.component', './notfound.component', './users/users.routing', './posts/posts.routing', './app.routing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, users_module_1, posts_module_1, app_component_1, home_component_1, navbar_component_1, notfound_component_1, users_routing_1, posts_routing_1, app_routing_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (users_module_1_1) {
                users_module_1 = users_module_1_1;
            },
            function (posts_module_1_1) {
                posts_module_1 = posts_module_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (notfound_component_1_1) {
                notfound_component_1 = notfound_component_1_1;
            },
            function (users_routing_1_1) {
                users_routing_1 = users_routing_1_1;
            },
            function (posts_routing_1_1) {
                posts_routing_1 = posts_routing_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, posts_routing_1.postsRouting, users_routing_1.usersRouting, app_routing_1.routing, users_module_1.UsersModule, posts_module_1.PostsModule],
                        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, navbar_component_1.NavbarComponent, notfound_component_1.NotFoundComponent],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map