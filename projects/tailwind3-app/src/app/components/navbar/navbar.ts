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
showNavLinks():void{
  console.log(this.toggle);
  this.toggle = !this.toggle
}
}
