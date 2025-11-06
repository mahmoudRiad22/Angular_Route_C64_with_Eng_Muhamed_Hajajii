import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intro',
  imports: [FormsModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {


  textAreaInput:string =''
  userData = {
    name:'',
    email:'',
    password:''
  }
  isShow:boolean = true
  readInput(event:Event):void{
    this.textAreaInput = (event.target as HTMLInputElement).value
    // console.log('this.textAreaInput :>> ', this.textAreaInput);
  }

  toggleShow():void{
    this.isShow = !this.isShow
  }

  showUserData():void{
    console.log('userData :>> ', this.userData);
  }
}
