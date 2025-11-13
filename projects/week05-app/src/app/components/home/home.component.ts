import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    userData: {} = {
        name: 'mahmoud',
        age: '30',
    };

    constructor() {
        // >> invoke the promise
        const promise01 = new Promise((resolved, rejected) => {
            resolved('promise 01 has bees resolved successfully.');
            rejected('promise 01 failed to be resolved');

            console.log(`%c` + 'this a general msg inside the promise', 'color: violet');
        })
            .then((msg) => {
                console.log(`%c` + msg, 'color: violet');
            })
            .catch((error) => {
                console.log(`%c` + error, 'color: violet');
            });

        // >> apply the observer
        const observable01 = new Observable((o) => {
            console.log(`%c` + 'msg01', 'color: violet');
            o.next('msg 02');
            o.next('msg 03');
            o.next('msg 04');
            o.next('msg 05');
            o.next('msg 06');
            o.next('msg 07');
            o.next('msg 08');
            o.next('msg 09');
            o.next(this.userData);
            o.error('Error');
        });
        observable01
            .subscribe({
                next: (oRes) => {
                    // const finalRes = typeof res === 'string' res: JSON.stringify()
                    console.log(`%c` + oRes, 'color: violet');
                },
                error: (oErr) => {
                    console.log(`%c` + oErr, 'color: red');
                },
            })
            .unsubscribe();
    }
}
