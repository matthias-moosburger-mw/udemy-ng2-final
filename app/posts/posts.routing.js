System.register(['@angular/router', './posts.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, posts_component_1;
    var postsRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            }],
        execute: function() {
            exports_1("postsRouting", postsRouting = router_1.RouterModule.forChild([
                {
                    path: 'posts',
                    component: posts_component_1.PostsComponent
                }
            ]));
        }
    }
});
//# sourceMappingURL=posts.routing.js.map