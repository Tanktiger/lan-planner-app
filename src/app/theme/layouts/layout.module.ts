import {NgModule} from '@angular/core';
import {HeaderNavComponent} from './header-nav/header-nav.component';
import {AsideNavComponent} from './aside-nav/aside-nav.component';
import {FooterComponent} from './footer/footer.component';
import {ScrollTopComponent} from './scroll-top/scroll-top.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        HeaderNavComponent,
        AsideNavComponent,
        FooterComponent,
        ScrollTopComponent,
    ],
    exports: [
        HeaderNavComponent,
        AsideNavComponent,
        FooterComponent,
        ScrollTopComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}
