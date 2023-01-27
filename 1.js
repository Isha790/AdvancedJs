//In javascript,we can declare a variable in 3 ways
// by using var
//by using let
//by using const

// var myName="John";
// console.log(myName);
// const myName=[];

// console.log(myName);
// myName.push("Isha");
// console.log(myName);

// let myName="John";
// console.log(myName);
// myName="Alex";
// console.log(myName);
// var myName="John";
// console.log(myName);
//  myName=5;
// console.log(myName);
// var myName="Taylor";
// console.log(myName);

// {
//     var num=5;
// }
// console.log(num);


//String Interpolation

let firstName="Isha";
let lastName="Khatri";
// console.log(firstName+ " "+lastName);
// let fullName=firstName+" "+lastName    (it is gonna wate extra memory)
// let fullName=`${firstName} ${lastName}`
// console.log(fullName);

//Default Params

// function addTwoNumber(num1,num2){
//     return num1+num2;
// }
// console.log(addTwoNumber(1,2));

//Arrow function
// let addTwoNumber=(num1,num2)=>{
//     return num1+num2;
// };
// let addTwoNumber=(num1,num2)=>num1+num2;
// console.log(addTwoNumber(1,2));

// let addTwoNumber=(num1,num2=5)=>{
//     console.log(num1);
//     console.log(num2);
//     return num1+num2;
// };
// console.log(addTwoNumber(1));
// console.log(addTwoNumber(1,10));

//Rest and spread operator are applicable in arrays and objects in js
// let array=[5,10,15,20,25];
//Spread -> ...
// console.log(...array,30,35,40);
// console.log(array);
// let newArray=[100,75,...array];
// console.log(newArray);

//Rest-> ...
// let maxOfTwoNumbers=(num1,num2)=>Math.max(num1,num2);
// let maxOfThreeNumbers=(num1,num2,num3)=>Math.max(num1,Math.max(num2,num3));
// let maxOfNumbers=(...numbers)=>{
//     console.log(numbers);
// };
// maxOfNumbers(1,2,3,4,5,6,7,8,9,10);
// let maxOfNumbers=(...numbers)=>{
//     let maximum=Number.MIN_VALUE;
//     for(let number of numbers){
//         maximum=Math.max(maximum,number);
//     }
//     return maximum;
// };
// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

//for objects
let obj={
    name:"John",
    age:24,
    address:{
        city:"New York",
        state:"Y",
        country:"USA"
        },
};
// let obj2={...obj};
let obj2=JSON.parse(JSON.stringify(object));
obj2.address.city="Newark";
console.log(obj);

//clone of object
let object2 = {...object,country:"USA", favoriteSong:"Letsgo"};
//Shallow copy
console.log(object2)
object2.address.city1 = "Mumbai";
console.log(object)
// Deep copy
let object3 = JSON.parse(JSON.stringify(object));
console.log(object3)

























