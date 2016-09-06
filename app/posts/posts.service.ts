import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class PostService {
    private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(private http: Http) {

     }

     loadPosts(){
         return this.http.get(this.baseUrl)
                 .map(res => res.json());
     }
}