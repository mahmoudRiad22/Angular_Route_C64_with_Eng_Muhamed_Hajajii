import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-body',
  imports: [FormsModule],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css',
})
export class HomeBodyComponent {
   @Output() userName: EventEmitter<string> = new EventEmitter(); //send it to the selector
  InputName!:string
  saveInput(): void {
    console.log(this.userName);
    console.log('InputName :>> ', this.InputName);
    this.userName.emit(this.InputName)
  }
  
}
