import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
msg: string = 'this msg came from inside the TS file';

    private Name: string = 'MahmoudRiad';
    private Age: number = 30;
    private Address: string = '106, Tanta Egypt';

    get userName(): string {
        return this.Name;
    }
    get userAge(): number {
        return this.Age;
    }
    get userAddress(): string {
        return this.Address;
    }

    // set userAddress(newAddress: string) {
    //     this.Address = newAddress;
    // }

    // set userName(name: string) {
    //     this.Name = name;
    // }

    // set userAge(age: number) {
    //     this.Age = age;
    // }
}
