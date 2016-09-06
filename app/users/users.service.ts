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

    getUser(id: number){
        return this.http.get(this.usersUrl + "/" + id)
                .map( res => res.json());
    }

    addUser(user: User) {
        return this.http.post(this.usersUrl,JSON.stringify(user))
            .map( res => res.json());
    }

    updateUser(user: User){
        return this.http.put(this.usersUrl + "/" + user.id, JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(user: User){
        return this.http.delete(this.usersUrl + "/" + user.id)
                .map(res => res.json());
    }
}