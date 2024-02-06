// In this program we will study about String in depth

const firstName = "Quasim Khan"
const surName = "Khan"
const age = 18
// console.log(firstName + surName)        //As we know the output in concanitate //Output: Quasim Khan

// console.log(`My name is ${firstName + surName}`)

// console.log(firstName.toUpperCase());       //QUASIM

// console.log(firstName.charAt(2))        //a

// console.log(firstName.indexOf('s'))     //3 Indexing start with 0

// const newName = firstName.substring(0, 6)       //0 start point and 6 end point and 6th position will not be counted
// console.log(newName)

// const name1 = firstName.slice(0,6)          //It is same as substring but it takes negative number also, and negatve number help to reverse the string 
// console.log(name1)
// console.log(firstName)

// const name2 = firstName.trim()      //it removes the spaces before the strings and after the sting, but in between space remane same 
// console.log(name2)


const name3 = firstName.replace("Khan", "Shahbaz")      //First argument is which one want to replace , and second argument is what you want to change
console.log(firstName)
console.log(name3)