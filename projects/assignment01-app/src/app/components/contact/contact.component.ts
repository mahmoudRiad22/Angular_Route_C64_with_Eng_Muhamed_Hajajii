import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent {
    userNameActive: boolean = true;
    userAgeActive: boolean = true;
    userEmailActive: boolean = true;
    userPasswordActive: boolean = true;

    showUserNameLabel(event: Event): void {
        const input = event.target as HTMLInputElement;
        console.log('input :>> ', input.getAttribute('id'));

        if (input.value && input.getAttribute('id') === 'userName') this.userNameActive = false;
        else this.userNameActive = true;
    }

    showUserAgeLabel(event: Event): void {
        const input = event.target as HTMLInputElement;
        console.log('input :>> ', input.getAttribute('id'));

        if (input.value && input.getAttribute('id') === 'userAge') this.userAgeActive = false;
        else this.userAgeActive = true;
    }

    showUserEmailLabel(event: Event): void {
        const input = event.target as HTMLInputElement;
        console.log('input :>> ', input.getAttribute('id'));

        if (input.value && input.getAttribute('id') === 'userEmail') this.userEmailActive = false;
        else this.userEmailActive = true;
    }

    showUserPasswordLabel(event: Event): void {
        const input = event.target as HTMLInputElement;
        console.log('input :>> ', input.getAttribute('id'));

        if (input.value && input.getAttribute('id') === 'userPassword')
            this.userPasswordActive = false;
        else this.userPasswordActive = true;
    }
}
