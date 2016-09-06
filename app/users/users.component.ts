import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
    templateUrl: 'app/users/users.component.html'
})
export class UsersComponent implements OnInit {
    users: User[];

    constructor(private service: UsersService) { }

    ngOnInit() {
        this.service.getUsers().subscribe(
            users => { this.users = users }
        );
    }

    deleteUser(user: User) {
        var index = this.users.indexOf(user);
        // Optimistic deleting
        if (confirm("Do you really want to delete user: " + user.name + "?")) {
            this.service.deleteUser(user).subscribe(
                result => this.users.splice(index, 1),
                err => {
                    alert("Could not delete user: " + user.name);
                    this.users.splice(index, 0, user)
                }
            );

        }
    }
}