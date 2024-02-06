// Any changes occur in array change the original array. They share refrences in heap memory not copy in stack 

// const arr = [1,"Quasim Khan"]
// const arr1 = []
// arr.push("Khan")        // it is use to add new element in array
// console.log(arr)


// arr1.push("Quasim", "Khan")     //push() method is used to enter in array, It will affect in original array
// console.log(arr1)
// arr1.pop()      //pop() method is used to delete the last element from the array and it recive no arguments
// console.log(arr1);

// arr.unshift(12)     //It add element in 0th index and shift all the previous elements with 1 index forward --> Pervious 0th position's element shift forward to 1th position
// console.log(arr);

// arr.shift()     //It is like pop() but unlike pop() it delete element from the 0th position and shif all the elements backward


// let isElementPresent = function(para){

//    return arr.includes(para)
// }
// console.log(isElementPresent(0));

// slice and splice 


// const myArray = [10,20,30,40,50]

// console.log("A ", myArray);

// const sliceArray = myArray.slice(3)
// console.log(sliceArray)
// console.log("After Slice ", myArray);

// const spliceArray = myArray.splice(3)
// console.log(spliceArray);
// console.log("After Splice ", myArray);