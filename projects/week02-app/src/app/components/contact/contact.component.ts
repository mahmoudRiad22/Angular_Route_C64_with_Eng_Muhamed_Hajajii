import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

base = "../../../../public/images/"
imgUrl = this.base.slice(18)
images:string[] = [
  `${this.imgUrl}55.jpg`,

]
}
