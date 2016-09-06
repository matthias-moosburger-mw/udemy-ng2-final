import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BasicValidators } from '../shared/email.validator';
import { UsersService } from './users.service'

import { User } from './user';

@Component({
    templateUrl: 'app/users/newuser.component.html'
})
export class NewUserComponent implements OnInit {
    form: FormGroup;
    user = new User();

    constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {
        this.buildForm();
    }

    ngOnInit() {
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
        this.userService.addUser(this.form.value).subscribe(
            res => {
                this.form.markAsPristine();
                this.router.navigate(['users'])
            }
        );
    }
}