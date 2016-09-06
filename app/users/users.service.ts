import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UsersService {
    private usersUrl = 'https://jsonplaceholder.typicode.com/users'
    
    constructor(private http: Http) { }

    getUsers() {
        return this.http.get(this.usersUrl)
            .map( res => res.json());
    }

    addUser(user: User) {
        return this.http.post(this.usersUrl,JSON.stringify(user))
            .map( res => res.json());
    }
}