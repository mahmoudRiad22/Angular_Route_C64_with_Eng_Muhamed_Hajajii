import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-community-posts',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './community-posts.component.html',
  styleUrl: './community-posts.component.css',
})
export class CommunityPostsComponent {

}
