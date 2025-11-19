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

  toggleFlag = false
  toggle():void{
    this.toggleFlag=!this.toggleFlag
    console.log(this.toggleFlag);
  }
}
