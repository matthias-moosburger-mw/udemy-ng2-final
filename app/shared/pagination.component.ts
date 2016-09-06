import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: 'app/shared/pagination.component.html'
})
export class PaginationComponent implements OnChanges {
    @Input('items') items = [];
    @Input('page-size') pageSize = 10;
    @Output('pages-changed') pagesChanged = new EventEmitter();
    pages: any[] = [];
    currentPage;

    constructor() { }

    ngOnChanges() { 
        this.pages = [];
        this.currentPage = 1;
        var pagesCount = this.items.length / this.pageSize;
        for (var i = 1; i < pagesCount; i++) {
            this.pages.push(i);            
        }
    }

    changePage(page){
        this.currentPage = page;
        this.pagesChanged.emit(this.currentPage);
    }

    previous(){
        if (this.currentPage == 1 )
            return;
        this.currentPage--;
        this.pagesChanged.emit(this.currentPage);
    }

    next(){
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        this.pagesChanged.emit(this.currentPage);
    }
}