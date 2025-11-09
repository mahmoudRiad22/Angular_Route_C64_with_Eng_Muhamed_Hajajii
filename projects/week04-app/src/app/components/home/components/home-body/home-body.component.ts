import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-body',
  imports: [FormsModule],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css',
})
export class HomeBodyComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Output() userName: EventEmitter<string> = new EventEmitter(); //send it to the selector
  InputName!: string;
  saveInput(): void {
    console.log(this.userName);
    console.log('InputName :>> ', this.InputName);
    this.userName.emit(this.InputName);
  }

  // >> Life Cycle Hooks:
  @Input() user: any;
  staticUser!: string;

  DisplayInputOnConsole() {
    this.user;
  }
  constructor() {
    console.log('1. Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit - Component initialized');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck - Change detection run');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit - Projected content ready');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked - Projected content checked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit - View and child views ready');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked - View and child views checked');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy - Cleaning up');
  }
}
