import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, NgModel } from '@angular/forms';
import { IntroComponent } from "./components/intro/intro.component";

@Component({
    selector: 'app-root',
    imports: [FormsModule, IntroComponent, NavbarComponent, FooterComponent],
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
