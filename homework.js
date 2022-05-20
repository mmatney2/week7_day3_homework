// //==========Exercise #1 ===========//
// /*
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }
]
}
const function1=(person3)=>{
for (let key in person3){
    console.log(person3[key])
    if(person3.pizza[key]){
        console.log(key, person3[value]) 
    }
}
}
function1(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }  
}
let age = 0
const printInfo=()=>{
    // let age = 0; 
    function add_to_count(){
        age+=1;
        return age;
    }
    return add_to_count
}
let mom = new Person('Pat', 25)
console.log(mom)
console.count(mom.age)

let daughter = new Person('Sophia', 9)
console.log(daughter)
console.count(daughter.age)

// class Mom{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     returnInfo(){`Name: ${this.name} \nAge: ${this.age} `
//                 //overroad the true on line 69
//     }
// }



// const printInfo3=()=>{
//     let counter = 0; //this is a private variable
//     function add_to_count3(){
//         counter+=3;
//         return counter*3;
//     }
//     return add_to_count3
// }

// let add3 = printInfo3();
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())

// class Daughter{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     returnInfo2(){`Name: ${this.name} \nAge: ${this.age} `
//                 //overroad the true on line 69
//     }
// }



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
// let text = "Hello World!";
// let length = text.length;
// const isGreaterThanTen = (word) =>{
//     return new Promise(
//         (resolve, reject)=>{
//             if(word.length>10){
//                 resolve(true)
//             }else{
//                 reject(false)
//             }
//         }
//     )
// }
// isGreaterThanTen("hellokjjghjgkjg").then(
//     (result)=>{
//         // if resolved/accepted
//         console.log(`is greater than ${result}`)
//         }
//     ).catch(
//         (error)=>{
//             console.log(`is less than ${error}`)
//         }

//     )
