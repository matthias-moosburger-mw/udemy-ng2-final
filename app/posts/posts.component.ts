import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';
import { UsersService } from '../users/users.service';
import { Post } from './post';
import { SpinnerComponent } from '../shared/spinner.component';
import { PaginationComponent } from '../shared/pagination.component';
import { User } from '../users/user';
import * as _ from 'underscore';


@Component({
    templateUrl: 'app/posts/posts.component.html',
    directives: [SpinnerComponent, PaginationComponent],
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
    private posts: Post[] = [];
    private postsLoaded: Post[];
    private users: User[];
    private pagedPosts = [];
    public pageSize = 10;
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
                this.pagedPosts = _.take(this.posts, this.pageSize);
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
            this.pagedPosts = _.take(this.posts, this.pageSize);
                        console.log('posts length', this.posts.length)
            console.log('loadedposts length', this.postsLoaded.length)
        } else {
            this.posts = this.postsLoaded;
            console.log('posts length', this.posts.length)
            console.log('loadedposts length', this.postsLoaded.length)
            this.pagedPosts = _.take(this.posts, this.pageSize);
        }
    }

    getPostsInPage(page){
        var startIndex = (page - 1 ) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }

}