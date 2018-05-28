import {Component, OnInit, ViewEncapsulation, AfterViewInit, NgZone} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

declare let mLayout: any;

@Component({
    selector: 'app-header-nav',
    templateUrl: './header-nav.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    params: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.route.params.subscribe((params) => {
            this.params = params;
        });
    }

    ngOnInit() {

    }

    ngAfterViewInit() {

        mLayout.initHeader();

    }

    goTo(params) {
        console.log(params);
        this.ngZone.run(() => {
            this.router.navigate(params);
        });
    }
}
