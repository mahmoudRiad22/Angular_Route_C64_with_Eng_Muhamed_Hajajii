import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-host-listener',
    imports: [],
    templateUrl: './host-listener.component.html',
    styleUrl: './host-listener.component.css',
})
export class HostListenerComponent {
    p1newClasses!: string;
    p2Width = 'w-100';
    p3BgColor = 'bg-dark text-white';
    // change color upon resizing:
    @HostListener('window:resize', ['$event'])
    onWindowResizing(event: Event): void {
        // console.log('Window is changing');
        // console.log('event :>> ', window.innerWidth);
        if (window.innerWidth > 800) this.p1newClasses = 'bg-black text-white';
        else this.p1newClasses = 'bg-info text-black';
    }

    @HostListener('click', ['$event'])
    @HostListener('dblclick', ['$event'])
    @HostListener('auxclick', ['$event'])
    onClickAndDbClick(event: Event): void {
        // console.log('event :>> ', event.type);

        if (event.type == 'click') {
            console.log('event is a click');
            this.p2Width = 'w-75';
        }
        if (event.type == 'dblclick') {
            console.log('event is a double click');
            this.p2Width = 'w-50';
        }
        if (event.type == 'auxclick') {
            console.log('event is a auxclick');
            this.p2Width = 'w-100';
        }
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
        if (window.scrollY >= 150 && window.scrollY < 300) {
            // console.log('scroll just happened', window.scrollY);
            this.p3BgColor = 'bg-danger text-black';
        }
        if (window.scrollY >= 300) {
            // console.log('scroll ', window.scrollY);
            this.p3BgColor = 'bg-secondary text-white';
        } else if (window.scrollY > 60 && window.scrollY < 150) {
            // console.log('scroll ', window.scrollY);
            this.p3BgColor = 'bg-dark text-white';
        }
    }
}
