// In this program I will see the concept of the filter function 
// In previous program , I have seen foreach loop return undefined but in filter function return new array


const myNum = [1,2,3,4,5,6,7,8,9,10];

// const myNewNum = myNum.filter((value)=> value > 5);         //Value Return Automatically but if we use currly braces in arrow function we have to mention return keyword to return value like given below;

const myNewNum1 = myNum.filter((value)=>{
   
    return (value>5)
})
console.log(myNewNum1);     //Output : [ 6, 7, 8, 9, 10 ]
