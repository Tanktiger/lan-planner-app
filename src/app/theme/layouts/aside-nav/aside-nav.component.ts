import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';

declare let mLayout: any;

@Component({
    selector: 'app-aside-nav',
    templateUrl: './aside-nav.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {


    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {

        mLayout.initAside();

    }

}
