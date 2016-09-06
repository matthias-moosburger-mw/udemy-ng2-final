import { NgModule } from '@angular/core';
import { HttpModule }          from '@angular/http';
import { CommonModule }        from '@angular/common';

import { PostsComponent }   from './posts.component';
import { PostService }   from './posts.service';
import { SpinnerComponent } from '../shared/spinner.component';

@NgModule({
    imports: [HttpModule, CommonModule],
    exports: [PostsComponent],
    declarations: [PostsComponent, SpinnerComponent],
    providers: [PostService],
})
export class PostsModule { }
