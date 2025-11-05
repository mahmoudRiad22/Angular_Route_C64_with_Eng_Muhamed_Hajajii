import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    navbarPadding = ' py-lg-4';

    @HostListener('document:scroll', ['$event'])
    changeNavbarPadding(event: Event): void {
        if (window.scrollY > 120) {
            this.navbarPadding = ' py-lg-3';
        } else {
            this.navbarPadding = ' py-lg-4';
        }
    }
}
