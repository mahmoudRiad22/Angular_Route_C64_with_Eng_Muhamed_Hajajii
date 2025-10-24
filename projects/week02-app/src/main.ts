import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { compileNgModule, CssSelector, escapeRegExp } from '@angular/compiler';
import { NumberValueAccessor } from '@angular/forms';
import { elementAt } from 'rxjs';
import { SlicePipe } from '@angular/common';

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

        console.log(theme.Auto);

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

        console.log(canMoveRight(Direction.Left)); // false
        console.log(canMoveRight(Direction.Right)); // true

        function isApproved(myStatus: TransferStatus): boolean {
            return myStatus === TransferStatus.Approved;
        }

        console.log('isApproved :>> ', isApproved(TransferStatus.Rejected));

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

        if (currentUser.role === userRole.Admin) console.log('Your are an Admin, Welcome');
        else console.log(`you are an ${currentUser.role}, Welcome`);
    }

}
