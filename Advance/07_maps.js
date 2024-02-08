// In this program we will discuss about maps in javascript

const user = new Map();

user.set('name', "Quasim Khan")
user.set('age', 21)


//Map is like object, it is also taken key value pair
// console.log(user)

// let use forof loop on map 

// for (const key of user) {

//     console.log(key);  //The Output is in array and key and value

    
// }

// But we want without array 

for (const [key,value] of user) {
    console.log(key, "->", value)      
    // The out are output: name -> Quasim Khan age -> 21
}