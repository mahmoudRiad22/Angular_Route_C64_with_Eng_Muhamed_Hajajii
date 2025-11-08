import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NavbarComponent, FooterComponent, RouterOutlet],
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

// was working on understanding OOP in TypeScript
abstract class name {
  constructor(parameters: string) {
    this.firstName = parameters;
  }
  lastName: string = 'Riad';
  firstName: string;

  abstract sayHello(): string;
}

class myName extends name {
  sayHello(): string {
    return 'hello';
  }
}

const me = new myName('mahmoud');

console.log(me.firstName, me.lastName, 'says', me.sayHello());
