import { RouterLinkActive, RouterLink } from '@angular/router';
import { Component, provideZoneChangeDetection } from '@angular/core';
import { TaggedTemplateLiteral } from '@angular/compiler';

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
    imagesAlts: string[] = [];

    ngOnInit(): void {
        this.createImages();
    }
    exchangeImage(e: PointerEvent): void {
        const target = e.target as HTMLElement;

        if (target && target.attributes[2]) {
            const temp = target.getAttribute('src');
            // console.log('temp :>> ', temp);
            // console.log(target.setAttribute('src', this.images[0]));
            target.setAttribute('src', this.images[0]);
            this.images[0] = temp as string;
        }
    }
    createImages(): void {
        this.images = [];
        this.imagesAlts = [];
        for (let i = 0; i < 6; i++) {
            const randomNum = Math.floor(Math.random() * 61) + 1;
            this.images.push(`${this.imgUrl}${randomNum}.jpg`);
            this.imagesAlts.push(`${randomNum}.jpg`);
        }
        // console.log('this.images :>> ', this.images);
    }
}
