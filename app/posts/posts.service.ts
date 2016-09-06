import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Post } from './post';

@Injectable()
export class PostService {
    private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(private http: Http) {

     }

     loadPosts(){
         return this.http.get(this.baseUrl)
                 .map(res => res.json());
     }

     loadComments(post: Post){
        return this.http.get(this.baseUrl + "/" + post.id + "/comments")
                .map(res => res.json());
     }
}