import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-university',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './university.component.html',
  styleUrl: './university.component.css',
})
export class UniversityComponent {

}
