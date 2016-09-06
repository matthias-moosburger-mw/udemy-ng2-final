import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {
    private usersUrl = 'https://jsonplaceholder.typicode.com/users'
    
    constructor(private http: Http) { }

    getUsers() {
        return this.http.get(this.usersUrl)
            .map( res => res.json());
    }
}