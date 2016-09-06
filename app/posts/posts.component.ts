import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';
import { UsersService } from '../users/users.service';
import { Post } from './post';
import { SpinnerComponent } from '../shared/spinner.component';
import { User } from '../users/user';


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
    private selectedComments: any[];
    private posts: Post[];
    private postsLoaded: Post[];
    private users: User[];
    postsLoading = true;
    commentsLoading = true;

    constructor(private postService: PostService,
        private userService: UsersService) { }

    ngOnInit() {
        this.loadPosts();
        this.loadUsers();
    }

    private loadPosts() {
        this.postService.loadPosts().subscribe(
            posts => {
                this.postsLoaded = posts;
                this.posts = this.postsLoaded;
                this.postsLoading = false;
            }, err => { alert("Failed to load posts") }
        );
    }

    private loadUsers() {
        this.userService.getUsers().subscribe(
            users => {
                this.users = users;
            }
        );
    }

    selectPost(post: Post) {
        this.selectedPost = post;
        this.loadComments(post);
    }

    loadComments(post) {
        this.postService.loadComments(post).subscribe(
            result => {
                this.selectedComments = result;
                this.commentsLoading = false;
            },
            err => console.error("Couldn't load comments...")
        );
    }

    reloadPosts(filter) {
        this.selectedPost = null;
        this.selectedComments = null;
        if (filter.userId != "") {
            this.posts = this.postsLoaded.filter(function (el, index, array) {
                if (el.userId == filter.userId) {
                    return true;
                } else {
                    return false;
                }
            });
        } else {
            this.posts = this.postsLoaded;
        }
    }

}