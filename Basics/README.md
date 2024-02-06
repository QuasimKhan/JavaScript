# All Codes
## 01-Basics.js

```Javascript
// let name = "Quasim  Khan";

// console.log(name);


// Data type conversion

// let we take a score 

// let score = 33;     //here I know its a Number but how I know when this score came from a front-end form and i recognize it its string or a number

// let scoreString = "33"

// console.log(typeof score);      //Type Number 
// console.log(typeof scoreString);        //Type String

// // let convert score string into a number 

// let scoreNumber = Number(scoreString)       //Number() strict the to the Number, no matter what the date type Number() convert (Not convert the main variable but after conversion store in new variable) into Number.. --> It is a best practice during backend

// console.log(typeof scoreNumber);        //Number
// // console.log(typeof scoreString)      //String, as I said not change in real variable... --> scoreString is remained same (String)

// // But in above case, I was converted a pure number what will happen if I convert a string into number

// let scoreString = "123abc"

// let scoreNumber = Number(scoreString);

// console.log(scoreString ,typeof scoreString);       //123abc Type:String
// console.log(scoreNumber, typeof scoreNumber);       //Nan (Not a Number) Type:Number



// Conversion using parseInt(String, radix) --> radix is nothing but base of the number like 10 for decimal 2 for binary 

let scoreString = "123"

//  let scoreNumber = parseInt(scoreString,10);        //it not cumulsory to write radix 10

let scoreNumber = parseInt(scoreString)

 console.log(scoreString, typeof scoreString)
 console.log(scoreNumber, typeof scoreNumber)
```

## 02.String.js
```javascript
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
```

## 03_NumberandMath.js
```Javascript
// In this program I will learn about number and math in JS 

// const score = 4000000
// console.log(score);

// const age = new Number(18)
// console.log(age)

// Both ways are same but age will surely be a number 

// lets use some properties and method of number 

// console.log(score.toString())       //It converts it tpye into string but main score variable remaine same as number. we know it make a copy of score variable and change in copy not in original
//We can also use All string properties and methods after converting to string


// console.log(score.toFixed(2))       //It fixed upto 2 after decimal Output:400.00

// console.log(score.toExponential(0))         //covert into exponential

// console.log(score.toLocaleString('en-IN'))        // return a string with indain system commas




// ---------------+++++++++++++-------------++++++++++++---------

            // Maths

const score = 2000.1213244;

// console.log(Math.round(score))      //It gives round off vaule

// console.log(Math.cbrt(score))       //It return cube root 

// console.log(Math.floor(score))      //It only return integers and ignore the float value



```