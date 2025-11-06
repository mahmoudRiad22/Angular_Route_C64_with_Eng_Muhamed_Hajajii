import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-community',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {

}
