import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({
    selector: '[href]',
})
export class HrefPreventDefaultDirective implements AfterViewInit {
    @Input() href: string;
    @HostListener('click') onClick($event) {
        this.preventDefault($event);
    }

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit() {

    }

    preventDefault(event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    }

}
