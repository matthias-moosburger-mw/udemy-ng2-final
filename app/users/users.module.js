System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', '@angular/http', './user-form.component', './users.component', './users.service', '../can-deactivate-on-dirty'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, router_1, http_1, user_form_component_1, users_component_1, users_service_1, can_deactivate_on_dirty_1;
    var UsersModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (can_deactivate_on_dirty_1_1) {
                can_deactivate_on_dirty_1 = can_deactivate_on_dirty_1_1;
            }],
        execute: function() {
            UsersModule = (function () {
                function UsersModule() {
                }
                UsersModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule, http_1.HttpModule],
                        exports: [users_component_1.UsersComponent, user_form_component_1.UserFormComponent],
                        declarations: [users_component_1.UsersComponent, user_form_component_1.UserFormComponent],
                        providers: [users_service_1.UsersService, can_deactivate_on_dirty_1.PreventUnsavedChangesGuard],
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersModule);
                return UsersModule;
            }());
            exports_1("UsersModule", UsersModule);
        }
    }
});
//# sourceMappingURL=users.module.js.map