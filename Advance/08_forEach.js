// In this program I will see the foreach loop in js

const progLang = ["JavaScript","c++","java","Ruby","Python"];

// progLang.forEach(function (value){  //we don't name the call back function thats why we don't write name of the function, Best funtion is use in this case is arrow function because if we don't need to store any function in variable we simply use arrow function
//     console.log(value);
// })

// let use arrow function in this case 

// progLang.forEach((values)=>{
//     console.log(values);
// })

//The result is same as above


// we can also print indexes and complete array by just using foreach funtion or loop 
progLang.forEach((values,indexes,completearray)=>{
    console.log(values,indexes,completearray);
})
/*
    output:
    JavaScript 0 [ 'JavaScript', 'c++', 'java', 'Ruby', 'Python' ]
    c++ 1 [ 'JavaScript', 'c++', 'java', 'Ruby', 'Python' ]
    java 2 [ 'JavaScript', 'c++', 'java', 'Ruby', 'Python' ]
    Ruby 3 [ 'JavaScript', 'c++', 'java', 'Ruby', 'Python' ]
    Python 4 [ 'JavaScript', 'c++', 'java', 'Ruby', 'Python' ]
*/


// Note :- for each loop return undefined or nothing 
