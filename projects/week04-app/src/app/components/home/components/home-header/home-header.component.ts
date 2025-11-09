import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-header',
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css',
})
export class HomeHeaderComponent {
  @Input() headerName: string = '';
  // alias
  // required
  // transform: () => {}
  
}
