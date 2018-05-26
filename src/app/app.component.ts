import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Helpers} from './helpers';
import {ScriptLoaderService} from './services/script-loader.service';
declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    globalBodyClass = `m-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2
    m-header--fixed m-header--fixed-mobile m-footer--push`;

    constructor(private _router: Router, private _script: ScriptLoaderService) {
    }

    ngOnInit() {
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/theme/scripts.bundle.js'], true)
            .then(result => {
                // optional js to be loaded once
                // this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
            });
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                Helpers.setLoading(true);
                Helpers.bodyClass(this.globalBodyClass);
                (<any>mLayout).closeMobileAsideMenuOffcanvas();
                (<any>mLayout).closeMobileHorMenuOffcanvas();
                (<any>mApp).scrollTop();
                // hide visible popover
                (<any>$('[data-toggle="m-popover"]')).popover('hide');
            }
            if (route instanceof NavigationEnd) {
                Helpers.setLoading(false);
                // init required js
                (<any>mApp).init();
                (<any>mUtil).init();
                // content m-wrapper animation
                const animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);
            }
        });
    }
}
