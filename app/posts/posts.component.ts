import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';
import { Post } from './post';
import { SpinnerComponent } from '../shared/spinner.component';


@Component({
    templateUrl: 'app/posts/posts.component.html',
    directives: [SpinnerComponent],
    styles: [`
    .list-group-item:hover, .selected {
        background-color: #f5f5f5;
    }
    `
    ]
})
export class PostsComponent implements OnInit {
    private selectedPost: Post;
    private posts: Post[];
    isLoaded = false;

    constructor(private postService: PostService) {

    }

    ngOnInit() {
        this.postService.loadPosts().subscribe(
            posts => {
                this.posts = posts;
                this.isLoaded = true;
            }, err => { alert("Failed to load posts") }
        );
    }

    selectPost(post: Post) {
        this.selectedPost = post;
    }
}