import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/users/users.service';

@Component({
    templateUrl: 'app/users/users.component.html'
})
export class UsersComponent implements OnInit {
    users[] : any;

    constructor(private service: UsersService) { }

    ngOnInit() { 
        this.service.getUsers().subscribe(
            users => this.users = users;
        );
    }
}