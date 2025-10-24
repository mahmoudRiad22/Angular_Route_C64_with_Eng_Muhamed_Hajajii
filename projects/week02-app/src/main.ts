import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { compileNgModule } from '@angular/compiler';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

{//!Session01 Notes:



/**
 * !Overview
 * >> 1- Data types [string, number, boolean, null, undefined, array, object].
 * >> 2- Union, tuple, type literal, custom type, enum, any, unknown.
 * >> 3- array
 * >> 4- object
 * >> 5- functions [parameters, return]
 * >> 6- generics using <>
 */

{//>> Data Types:

//* 1- inference type
let name = "mahmoud";

//* 2- assignment type
let age:number = 30;

//* 3- interface: 
interface user{
  name:string,
  age:number,
  email:string,
  data:string,
  gender: "male" | "female",
  married:boolean
  address:undefined|string,
  car:any,
  friends:[string,string,string],
  siblings:object
}

let user01:user = {
  name:"mahmoud",
  age:30,
  email:"mahmoud@gmail.com",
  data:"i like coding",
  gender: "male",
  married:false,
  address: "tanta, egypt",
  car: "BMW",
  friends:['mohammed', 'tarek', 'body'],
  siblings:{
    name:'bassma',
    age:32
  }
}


// console.log(`hello`, user01);

/////////////////////////////////////////////////

}

{//>> union and tuples:

  //* union: basically combine multiple data types for same identifier
  let useId:string|number;
  useId = 2

  //* tuple: is a fixed size array with specific data types for each member.
  let dic:[string, number, boolean, string];

  dic = ['first name', 121212, true, 'last name']
}

{//>> arrays VS tuples VS Union arrays

//* you can define the whole array data type:
let array01:string[];
array01 = ["01",'02','03','04','05','06']
// console.log('array01 :>> ', array01);

//* tuple: fixed sized array with pre-defined data types for the members

//* construct a tuple then destruct it into variables to be used directly later
let user01: [string, number, boolean];
user01 = ['John', 30, true]
const [user01Name,user01Age ,user01IsActive ] = user01; //* destructing the tuple into variables
// console.log('user01 :>> ', user01);



// Function returning tuple
function getUser(): [string, number] {
    return ['Mahmoud', 30];
}

const [userName, userAge] = getUser();

// console.log(userName, userAge);



let arr02:[string, ...any] = ['mahmoud', 30, undefined, null]
console.log('arr02 :>> ', arr02);
}

{//>> enum:

}

}