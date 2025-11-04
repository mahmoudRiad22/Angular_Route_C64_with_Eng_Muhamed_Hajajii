import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-protfolio',
    imports: [],
    templateUrl: './protfolio.component.html',
    styleUrl: './protfolio.component.css',
})
export class ProtfolioComponent {
    flag: boolean = true;
    ClickedImg: string = '';
    openOverlay(event: PointerEvent): void {
        const target = event.target as HTMLElement;
        const imgElement = target.closest('.col-lg-4')?.querySelector('img') as HTMLImageElement;

        if (imgElement?.src) {
            console.log('Image source:', imgElement.src.slice(21));
            this.ClickedImg = imgElement.src;
            this.flag = false;
        }
    }
    closeOverlay(): void {
        console.log('close this now');
        this.flag = !this.flag;
    }
}
