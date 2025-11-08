import { NavbarComponent } from './../../../navbar/navbar.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child01',
  imports: [],
  templateUrl: './child01.component.html',
  styleUrl: './child01.component.css',
})
export class Child01Component {
  @Input({alias:"data2"}) userInfo!: user;
  @Input() msgData!: string;
}

export interface user {
  name: string | null;
  age: number | null;
  email: string | null;
}
