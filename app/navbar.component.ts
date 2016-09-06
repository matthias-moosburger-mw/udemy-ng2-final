import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './app/navbar.component.html'
})
export class NavbarComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
}