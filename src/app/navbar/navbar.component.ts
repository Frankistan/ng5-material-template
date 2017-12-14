import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input('sidenav') sidenav: MatSidenav;

    title = 'Ng5 Material Template';

    constructor() {}

    ngOnInit() {}
}
