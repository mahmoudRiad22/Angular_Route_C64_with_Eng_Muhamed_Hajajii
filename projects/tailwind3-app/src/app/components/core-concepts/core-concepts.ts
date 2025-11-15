import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-core-concepts',
  imports: [NgClass],
  templateUrl: './core-concepts.html',
  styleUrl: './core-concepts.css',
})
export class CoreConcepts {
  toggle = true;
  showNavLinks(): void {
    console.log('it works');
    console.log(this.toggle);
    this.toggle = !this.toggle;
  }
}
