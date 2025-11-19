import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-engineering',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './engineering.component.html',
  styleUrl: './engineering.component.css',
})
export class EngineeringComponent {

  csToggleFlag = true
  McToggleFlag = true
  computerScienceToggle():void{
    this.csToggleFlag=!this.csToggleFlag
    console.log(this.csToggleFlag);
  }
  mechanicalToggle():void{
    this.McToggleFlag=!this.McToggleFlag
    console.log(this.McToggleFlag);
  }
}
