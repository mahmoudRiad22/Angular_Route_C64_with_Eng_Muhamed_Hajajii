import { Component } from '@angular/core';

@Component({
    selector: 'app-image-handling',
    imports: [],
    templateUrl: './image-handling.component.html',
    styleUrl: './image-handling.component.css',
})
export class ImageHandlingComponent {
    base = '../../../../public/images/';
    imgUrl = this.base.slice(18);
    images: string[] = [`${this.imgUrl}55.jpg`];
}
