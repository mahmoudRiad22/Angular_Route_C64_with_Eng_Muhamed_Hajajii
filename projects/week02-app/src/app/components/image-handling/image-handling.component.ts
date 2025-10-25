import { RouterLinkActive, RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-image-handling',
    imports: [RouterLink],
    templateUrl: './image-handling.component.html',
    styleUrl: './image-handling.component.css',
})
export class ImageHandlingComponent {
    base = '../../../../public/images/';
    imgUrl = this.base.slice(18);
    images: string[] = [];
    imagesAlts:string[] = [];
    // Returns: 1 to 61 (inclusive)
    createImages(): void {
        this.images = [];
        this.imagesAlts =[];
        for (let i = 0; i < 6; i++) {
            const randomNum = Math.floor(Math.random() * 61) + 1;
            this.images.push(`${this.imgUrl}${randomNum}.jpg`);
            this.imagesAlts.push(`${randomNum}.jpg`)
        }
        console.log('this.images :>> ', this.images);
    }
    // imagesAlts: string[] = [`${this.images[0].slice(8)}`];
}
