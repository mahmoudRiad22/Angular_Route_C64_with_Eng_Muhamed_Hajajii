import { Component } from '@angular/core';
import { Child01Component, user } from './components/child01/child01.component';
import { Child02Component } from './components/child02/child02.component';
import { using } from 'rxjs';

@Component({
  selector: 'app-transfer-data',
  imports: [Child01Component, Child02Component],
  templateUrl: './transfer-data.component.html',
  styleUrl: './transfer-data.component.css',
})
export class TransferDataComponent {
  msg!: string;
  userInfo!: user;
  trigger = false
  sendDataToChildren(): void {
    this.msg = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex doloremque, natus corporis nulla odio earum maxime distinctio sit nisi. Dicta adipisci doloremque commodi optio, quidem sequi numquam architecto repudiandae eaque aspernatur facilis. Vitae dolorum sequi dolor earum aliquid minima velit illum quos eaque iusto. Voluptas eaque ratione adipisci officiis.
`;
    this.userInfo = {
      name: 'Mahmoud',
      age: 30,
      email: 'mahmoudraid@gmail.com',
    };
  }
  removeDataToChildren(): void {
    this.msg = '';
    this.userInfo = {
      name: null,
      age: null,
      email: null,
    };
  }
}
