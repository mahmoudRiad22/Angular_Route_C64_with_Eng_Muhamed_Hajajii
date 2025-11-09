import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeBodyComponent } from "./components/home-body/home-body.component";

@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, HomeFooterComponent, FormsModule, HomeBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userNameEntered!:string

}
