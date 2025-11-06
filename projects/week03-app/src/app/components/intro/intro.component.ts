import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {


  textAreaInput !:string
  isShow:boolean = true
  readInput(event:Event):void{
    this.textAreaInput = (event.target as HTMLInputElement).value
    // console.log('this.textAreaInput :>> ', this.textAreaInput);
  }

  toggleShow():void{
    this.isShow = !this.isShow
  }
}
