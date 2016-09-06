System.register(['@angular/core', './posts.service', '../shared/spinner.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, posts_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(postService) {
                    this.postService = postService;
                    this.isLoaded = false;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.postService.loadPosts().subscribe(function (posts) {
                        _this.posts = posts;
                        _this.isLoaded = true;
                    }, function (err) { alert("Failed to load posts"); });
                };
                PostsComponent.prototype.selectPost = function (post) {
                    this.selectedPost = post;
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/posts.component.html',
                        directives: [spinner_component_1.SpinnerComponent],
                        styles: ["\n    .list-group-item:hover, .selected {\n        background-color: #f5f5f5;\n    }\n    "
                        ]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map