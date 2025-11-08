import { Component, Input } from '@angular/core';
import { user } from '../child01/child01.component';

@Component({
  selector: 'app-child02',
  imports: [],
  templateUrl: './child02.component.html',
  styleUrl: './child02.component.css',
})
export class Child02Component {
  @Input({alias:'data2'}) userInfo!:user;

  @Input() msgData!: string;
}
