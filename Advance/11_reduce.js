// In this program I will se the reduce function in javascript
// This program is written by Quasim Khan

// const myNum = [1,2,3,4,5];

// const myNewNum =  myNum.reduce((total,curr)=>total+curr,0);
// console.log(myNewNum);      //Output : 15

// Example :-

const shoppingCart = [
    {
        courseName : "JavaScript",
        price : 100

    },
    {
        courseName : "Python",
        price : 200
    },

    {
        courseName : "C++",
        price : 300
    }
]

const price = shoppingCart.reduce((total,curr)=>total+curr.price,0)

console.log(price)