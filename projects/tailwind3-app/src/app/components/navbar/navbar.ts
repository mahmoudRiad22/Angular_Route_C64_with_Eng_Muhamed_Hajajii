import { NgClass } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


  toggle = true
@ViewChild('navLinks') navLinks!:ElementRef
showNavLinks():void{
  // if ((this.navLinks.nativeElement as HTMLElement).classList.contains('hidden'))
  //     (this.navLinks.nativeElement as HTMLElement).classList.remove('hidden')
  console.log(this.toggle);
  this.toggle = !this.toggle
}
}
