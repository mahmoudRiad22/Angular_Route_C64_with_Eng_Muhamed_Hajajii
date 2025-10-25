import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

//!Session01 Notes:
{
    /**
     * !Overview
     * >> 1- Data types [string, number, boolean, null, undefined, array, object].
     * >> 2- Union, tuple, type literal, custom type, enum, any, unknown.
     * >> 3- array
     * >> 4- object
     * >> 5- functions [parameters, return]
     * >> 6- generics using <>
     */
    // note: what need data types? :>> variables, functions[parameters, return], class[property, method].

    //>> Data Types:
    {
        //* 1- inference type
        let name = 'mahmoud';

        //* 2- assignment type
        let age: number = 30;

        //* 3- interface:
        interface user {
            name: string;
            age: number;
            email: string;
            data: string;
            gender: 'male' | 'female';
            married: boolean;
            address: undefined | string;
            car: any;
            friends: [string, string, string];
            siblings: object;
        }

        let user01: user = {
            name: 'mahmoud',
            age: 30,
            email: 'mahmoud@gmail.com',
            data: 'i like coding',
            gender: 'male',
            married: false,
            address: 'tanta, egypt',
            car: 'BMW',
            friends: ['mohammed', 'tarek', 'body'],
            siblings: {
                name: 'bassma',
                age: 32,
            },
        };

        // console.log(`hello`, user01);
    }

    //>> union and tuples:
    {
        //* union: basically combine multiple data types for same identifier
        let useId: string | number;
        useId = 2;

        //* tuple: is a fixed size array with specific data types for each member.
        let dic: [string, number, boolean, string];

        dic = ['first name', 121212, true, 'last name'];
    }

    //>> arrays VS tuples VS Union arrays
    {
        //* you can define the whole array data type:
        let array01: string[];
        array01 = ['01', '02', '03', '04', '05', '06'];
        // console.log('array01 :>> ', array01);

        //* tuple: fixed sized array with pre-defined data types for the members

        //* construct a tuple then destruct it into variables to be used directly later
        let user01: [string, number, boolean];
        user01 = ['John', 30, true];
        const [user01Name, user01Age, user01IsActive] = user01; //* destructing the tuple into variables
        // console.log('user01 :>> ', user01);

        // Function returning tuple
        function getUser(): [string, number] {
            return ['Mahmoud', 30];
        }

        const [userName, userAge] = getUser();

        // console.log(userName, userAge);

        let arr02: [string, ...any] = ['mahmoud', 30, undefined, null];
        // console.log('arr02 :>> ', arr02);
    }

    //>> literal types && Custom type:
    {
        //* literal type: is the type that is defined as a value in itself
        let isActive: 0 | 1;

        isActive = 1;
        // console.log('isActive :>> ', isActive);

        //* Custom type: is defined using the keyword "type".

        type car = string | number;

        const myCar: car = 'Nissan';
        const sisCar: car = 1234442;
        const fatherCar: car = '12BL320';

        // console.log('myCar :>> ', myCar);
    }

    //>> enum:
    {
        //* Syntax:
        enum theme {
            Dark = 'dark',
            Light = 'light',
            Auto = 'auto',
        }

        // console.log(theme.Auto);

        //* why use enum? ====> it create a clean code structure

        //* Types of Enums:

        //-- Numeric enums: auto increment
        enum Direction {
            Up, //0
            Down, //1
            Left,
            Right, //3
        }
        enum TransferStatus {
            Pending = 11,
            Approved = 22,
            Rejected = 33,
        }

        function canMoveRight(direction: Direction): boolean {
            return direction === Direction.Right;
        }

        // console.log(canMoveRight(Direction.Left)); // false
        // console.log(canMoveRight(Direction.Right)); // true

        function isApproved(myStatus: TransferStatus): boolean {
            return myStatus === TransferStatus.Approved;
        }

        // console.log('isApproved :>> ', isApproved(TransferStatus.Rejected));

        enum userRole {
            Admin = 'admin',
            Editor = 'editor',
            Viewer = 'viewer',
        }

        type User = {
            name: string;
            role: userRole;
        };

        const currentUser: User = {
            name: 'mahmoud',
            role: userRole.Admin,
        };

        // if (currentUser.role === userRole.Admin) console.log('Your are an Admin, Welcome');
        // else console.log(`you are an ${currentUser.role}, Welcome`);
    }

    //>> any
    {
        //- mostly used to figure out what the type of a response or something is
        let x: any = 50;
    }

    //>> Array:
    {
        //- define the data type of the array

        let userNames: string[] = [];

        userNames.push('mahmoud'); // add new member at the end
        userNames.push('mahmoud');
        userNames.push('mahmoud');
        userNames.push('mahmoud');
        userNames.pop(); // remove last member

        userNames.shift(); //removes 1st member
        userNames.unshift('02020202');

        // console.log(userNames);

        //- assign type to an array:

        let array01: string[];
        let array02: number[];

        let array03: (string | number)[]; // each member of array can be string or number
        let array04: string[] | number[]; // either whole array is string or whole array is number

        let array05: Array<number | string>; // generic type array
    }

    //>> functions:
    {
        function getSum(n1: number, n2: number): number {
            return n1 + n2;
        }

        // console.log(getSum(151548, 89658));

        function mirrorMe(input: string, reverse: boolean = false): string {
            if (reverse) {
                return [...input].reverse().join(' '); // join will combine with default separator ",".
            } else return input;
        }

        // console.log(mirrorMe('this is not reversed'));
        // console.log(mirrorMe('this is revered', true));
    }

    //>> Objects and Interfaces:
    {
        //? Operation can be done on interfaces:
        //* Extends & multiple extends (inheritance)
        //* auto declaration merging: interfaces with same identifier are joined.
        //* optional properties
        //* index signature
        //* readonly property
        interface IUser {
            readonly id: number;
            name: string;
            age: number;
            class: string;
        }

        interface IUser {
            dep: string;
            address: undefined | string;
        }

        interface ICurrentUser extends IUser {
            isActive: boolean;
        }

        let user: ICurrentUser = {
            id: 2006,
            name: 'ali',
            age: 23,
            class: 'C64',
            dep: 'Tech',
            address: undefined,
            isActive: false,
        };

        // console.log(user.id, user.name, user.address, user.dep, user.isActive);

        interface dictionary {
            [key: string]: string;
        }

        const dic: dictionary = {
            word1: 'hello',
            word2: 'WTF',
            word3: 'again!',
        };
        // console.log("dic['word2'] :>>", dic['word1']);

        //- interface with methods:
        interface IFullUser extends IUser {
            //? 1- method signature:
            getName(): string;
            updateAge(newAge: number): boolean;
            canTalk(): boolean;

            //? 2- arrow methods:
            add: (n1: number, n2: number) => number;
            multiply: (n1: number, n2: number) => number;

            //? 3- optional methods:
            log(msg: string): void;
            error(msg: string): void;
            warn?: (msg: string) => void;

            //? 4- method overload: multiple signature for same method

            // format(value: string): void;
            // format(value: number): void;
            // format(value: boolean): void;
            format<T>(value: T): void; //* a generic function
        }

        let newUser: IFullUser = {
            name: 'mahmoud Raid',
            age: 30,
            id: 212121,
            dep: 'Frontend',
            address: undefined,
            class: 'C64',
            canTalk(): boolean {
                return true;
            },
            updateAge(newAge): boolean {
                return !!(this.age = newAge);
            },
            getName() {
                return this.name;
            },
            add(n1, n2) {
                return n1 + n2;
            },
            multiply(n1, n2) {
                return n1 * n2;
            },
            // format(value) {
            //     console.log(typeof value);
            // },
            log: (msg) => {
                console.log('msg :>> ', msg);
            },
            error(msg) {
                console.error(msg);
            },
            warn(msg) {
                console.warn(msg);
            },

            format: function (value) {
                // console.log('this inside the format :>> ', this);
                console.log('value :>> ', value, typeof value);
            },
        };

        // newUser.format('a long msg');
        // newUser.format(12345);
        // newUser.format([1, 2, 3, 3, 4, 4]);
    }

    //>> Generics:
    {
        function getArray<T>(items: T[]): T[] {
            return new Array<T>().concat(items);
        }

        let numArray = getArray<number>([1, 2, 3, 4, 5]);
        let strArray = getArray<string>(['a', 'b', 'c', 'd']);

        // console.log('strArray :>> ', strArray);
        // console.log('numArray :>> ', numArray);
    }

    //>> Access modifiers [public, private, protected] && Getters && Setters && readOnly
    {
        class person {
            name: string = 'mahmoud Riad'; //* public by default
            private id: number = 2323; //* only accessible inside its own scope
            protected address: string = '106, Tanta, Egypt'; //* only accessible inside its own scope and its subclasses
        }
        class User extends person {
            isActive: boolean = true;
            age: number = 30;

            //>> Encapsulation for the protected property "address":
            get userAddress() {
                return this.address;
            }
            set userAddress(value: string) {
                this.address = value;
            }
        }

        const user = new User();

        // console.log(user.age);
        // console.log(user.name);
        // console.log(user.userAddress);
        // user.userAddress = '123,Cairo Egypt';
        // console.log(user.userAddress);
    }

}
