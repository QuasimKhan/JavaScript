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