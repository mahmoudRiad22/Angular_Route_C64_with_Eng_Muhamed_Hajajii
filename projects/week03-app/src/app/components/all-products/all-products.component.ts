import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {

}
