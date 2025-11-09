import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [
    HomeHeaderComponent,
    HomeFooterComponent,
    FormsModule,
    HomeBodyComponent,
    NgTemplateOutlet,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
// implements
//   OnChanges,
//   OnInit,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
export class HomeComponent {
  userNameEntered!: string;
  flag: boolean = true;
  staticData: string = 'this world should be burn to hell';
  @ViewChild('ref01') H1!: ElementRef;
  showInConsole(): void {
    console.log(this.H1);
    console.log(this.H1.nativeElement.innerHTML);
  }

  // // >> Life Cycle Hooks:
  // @Input() user: any;
  // staticUser!: string;

  // DiplayInputOnConsole(){
  //   this.user
  // }
  // constructor() {
  //   console.log('1. Constructor');
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ngOnChanges', changes);
  // }

  // ngOnInit() {
  //   console.log('3. ngOnInit - Component initialized');
  // }

  // ngDoCheck() {
  //   console.log('4. ngDoCheck - Change detection run');
  // }

  // ngAfterContentInit() {
  //   console.log('5. ngAfterContentInit - Projected content ready');
  // }

  // ngAfterContentChecked() {
  //   console.log('6. ngAfterContentChecked - Projected content checked');
  // }

  // ngAfterViewInit() {
  //   console.log('7. ngAfterViewInit - View and child views ready');
  // }

  // ngAfterViewChecked() {
  //   console.log('8. ngAfterViewChecked - View and child views checked');
  // }

  // ngOnDestroy() {
  //   console.log('9. ngOnDestroy - Cleaning up');
  // }
}
