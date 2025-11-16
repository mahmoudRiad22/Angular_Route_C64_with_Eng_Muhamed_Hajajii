import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-core-concepts',
  imports: [NgClass],
  templateUrl: './core-concepts.html',
  styleUrl: './core-concepts.css',
})
export class CoreConcepts {
  toggle01 = true;
  showNavLinks01(): void {
    console.log('it works');
    console.log(this.toggle01);
    this.toggle01 = !this.toggle01;
  }
  toggle02 = true;
  showNavLinks02(): void {
    console.log('it works');
    console.log(this.toggle02);
    this.toggle02 = !this.toggle02;
  }


}
