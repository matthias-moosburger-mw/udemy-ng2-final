import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BasicValidators } from '../shared/email.validator';
import { UsersService } from './users.service'

import { User } from './user';

@Component({
    templateUrl: 'app/users/user-form.component.html'
})
export class UserFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    user = new User();

    constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router, private route: ActivatedRoute) {
        this.buildForm();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            var id = +params["id"];
            this.title = id ? "Edit User" : "Add User";
            console.log(params);

            if (!id)
                return;

            this.userService.getUser(id).subscribe(
                user => { this.user = user },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['notfound']);
                    }
                }
            );
        })
    }

    buildForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
            phone: [],
            address: this.formBuilder.group({
                street: [],
                suite: [],
                city: [],
                zip: ['', Validators.maxLength(5)]
            })
        });
    }

    onSubmit() {
        var result;
        if (this.user.id) {
            result = this.userService.updateUser(this.user);
        } else {
            result = this.userService.addUser(this.form.value);
        }

        result.subscribe(
            result => {
                this.form.markAsPristine();
                this.router.navigate(['users'])
            });
    }
}