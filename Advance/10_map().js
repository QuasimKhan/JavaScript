// in this program I will discuss about map loop

// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const myNewNum = myNum.map((value)=>{
//     return value * 2
// })

// console.log(myNewNum);

// channing in methods 

// We can use multiple method at once in one line or multiple lines of code

const number = [1,2,3,4,5,6,7,8,9,10];

const myNewNum = number.map((value)=>value * 10).map((value)=>value + 5).filter((value)=>value > 50)

// like that we can do multiple map and filter in one statement 
// const number = [1,2,3,4,5,6,7,8,9,10];

// const myNewNum = number.map((value) => value * 10)
//                        .map((value) => value + 5)
//                        .filter((value) => value > 50);

// console.log(myNewNum);

console.log(myNewNum)