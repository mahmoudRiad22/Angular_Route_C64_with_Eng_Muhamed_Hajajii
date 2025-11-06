import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [NavbarComponent, FooterComponent, FormsModule],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = signal('week03-app');

    textAreaInput!: string;

    showText() {
        console.log('textAreaInput :>> ', this.textAreaInput);
  }
}
