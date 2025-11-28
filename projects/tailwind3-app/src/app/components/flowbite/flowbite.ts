import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-flowbite',
  imports: [],
  templateUrl: './flowbite.html',
  styleUrl: './flowbite.css',
})
export class Flowbite {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
