import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
declare var bootstrap: any;
@Component({
    selector: 'app-community',
    imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
    templateUrl: './community.component.html',
    styleUrl: './community.component.css',
})
export class CommunityComponent {}
