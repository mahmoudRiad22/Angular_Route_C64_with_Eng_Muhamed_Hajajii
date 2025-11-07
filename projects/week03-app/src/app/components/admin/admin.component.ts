import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {

}
