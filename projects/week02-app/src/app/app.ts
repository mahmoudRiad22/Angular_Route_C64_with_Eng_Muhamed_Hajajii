import { Component, signal } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NavbarComponent, FooterComponent, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = signal('week02-app');
}
