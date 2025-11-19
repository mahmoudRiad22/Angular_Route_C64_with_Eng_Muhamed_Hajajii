import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-business',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css',
})
export class BusinessComponent {
  csToggleFlag = false
  McToggleFlag = false
  computerScienceToggle():void{
    this.csToggleFlag=!this.csToggleFlag
    console.log(this.csToggleFlag);
  }
  mechanicalToggle():void{
    this.McToggleFlag=!this.McToggleFlag
    console.log(this.McToggleFlag);
  }
}
