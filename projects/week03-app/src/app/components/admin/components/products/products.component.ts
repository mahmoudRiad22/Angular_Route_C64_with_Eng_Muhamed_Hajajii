import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

}
