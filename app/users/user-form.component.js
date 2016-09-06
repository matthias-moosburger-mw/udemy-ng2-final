System.register(['@angular/core', '@angular/forms', '@angular/router', '../shared/email.validator', './users.service', './user'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, email_validator_1, users_service_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (email_validator_1_1) {
                email_validator_1 = email_validator_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(formBuilder, userService, router, route) {
                    this.formBuilder = formBuilder;
                    this.userService = userService;
                    this.router = router;
                    this.route = route;
                    this.user = new user_1.User();
                    this.buildForm();
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        var id = +params["id"];
                        _this.title = id ? "Edit User" : "Add User";
                        console.log(params);
                        if (!id)
                            return;
                        _this.userService.getUser(id).subscribe(function (user) { _this.user = user; }, function (response) {
                            if (response.status == 404) {
                                _this.router.navigate(['notfound']);
                            }
                        });
                    });
                };
                UserFormComponent.prototype.buildForm = function () {
                    this.form = this.formBuilder.group({
                        name: ['', forms_1.Validators.required],
                        email: ['', email_validator_1.BasicValidators.email],
                        phone: [],
                        address: this.formBuilder.group({
                            street: [],
                            suite: [],
                            city: [],
                            zip: ['', forms_1.Validators.maxLength(5)]
                        })
                    });
                };
                UserFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var result;
                    if (this.user.id) {
                        result = this.userService.updateUser(this.user);
                    }
                    else {
                        result = this.userService.addUser(this.form.value);
                    }
                    result.subscribe(function (result) {
                        _this.form.markAsPristine();
                        _this.router.navigate(['users']);
                    });
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/user-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.ActivatedRoute])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map