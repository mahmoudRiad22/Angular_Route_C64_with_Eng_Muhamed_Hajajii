import { Component } from '@angular/core';
import { asapScheduler, asyncScheduler, concatAll, from, Observable, of, scheduled } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  //>> how a promise works:
  // -- once its instantiated its immediately called and enter the "Pending" state.
  // -- once a resolved or rejected state is found then the promise can move on to the next "then","catch" or "finally".
  // promise1 = new Promise((resolved) => {
  //   console.log(`%c` + '1- mahmoud says hi', 'color: violet');
  //   // resolved('promise is done');
  //   // rejected('something went wrong❌❌❓');

  //   fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
  //     data.json().then((data) => {
  //       resolved(data);
  //     });
  //   });
  // });

  // >> how observables work:
  observable1 = new Observable((subscribers) => {
    // console.log('object :>> ', 'new observable has been created');
    console.log(`%c` + 'new observable has been created', 'color: violet');
    subscribers.next('new data 01');
    subscribers.next('new data 02');
    subscribers.complete();
    subscribers.next('new data 03');
    subscribers.next('new data 04');
    // subscribers.error('something went wrong❌❌');
    subscribers.next('new data 05');
  });

  observable2 = scheduled(
    [
      'mahmoud',
      1252,
      'something new',
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((data) => data),
    ],
    asyncScheduler
  );

  observable3 = from(fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()));
  ngOnInit(): void {
    // >>Promises
    // console.log(this.promise1); //this will happen synchronously with state of "Pending".
    // this.promise1 // start all the promises then schedule the next
    //   .then((data) => {
    //     console.log('promise is fulfilled');
    //     // console.log('object :>> ', data);
    //   })
    //   .catch((errorMsg) => {
    //     console.log(`%c` + errorMsg, 'color: violet');
    //   })
    //   .finally(() => {
    //     console.log(this.promise1);
    //     console.log(`%c` + 'Promise is Completed✅✅✅', 'color: violet');
    //     console.log(`%c` + '=================================', 'color: violet');
    //   });
    //*//////////////////////////////////////////////////////////
    //*//////////////////////////////////////////////////////////
    // >>Observables:
    // this.observable1.subscribe({
    //   next: (info) => {
    //     console.log(`%c` + info, 'color: violet');
    //   },
    //   error: (errorMsg) => {
    //     console.log(`%c` + errorMsg, 'color: violet');
    //   },
    //   complete: () => {
    //     console.log(`%c` + 'observable has finished.', 'color: green');
    //   },
    // });
    // this.observable1.subscribe({
    //   next: (info) => {
    //     console.log(`%c` + info, 'color: violet');
    //   },
    //   error: (errorMsg) => {
    //     console.log(`%c` + errorMsg, 'color: violet');
    //   },
    //   complete: () => {
    //     console.log(`%c` + 'observable has finished.', 'color: green');
    //   },
    // });
    //*//////////////////////////////////////////////////////////
    //*//////////////////////////////////////////////////////////
    // this.observable2.subscribe({
    //   next: (data) => {
    //     console.log(`%c` + data, 'color: violet');
    //   },
    //   complete: () => {
    //     console.log(`%c` + 'Done!!!!!!', 'color: violet');
    //   },
    // });

    this.observable2.subscribe({
      next: (res) => {
        console.log(res);
      },
    });

    this.observable3.subscribe((data) => {
      // console.log(data);
    });
  }
}
