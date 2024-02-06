// In this program I will learn about object

// Object literals
const key = Symbol("my kay 1");     //We initialize the key like this
const JSuser = {
    name : "Quasim Khan",
    [key] : "myValue, 1",
    age : 21,
    phoneNumber : {
        mobile : 1234567890,
        home : 987654321
    },
    Email : "quasimkhanpersonal@gmail.com", 
    isLoggedIn : false
    // all keys store as a string its mean key name store as "name" but js automatic take as string we have not necesssery to define as a string 
}
JSuser["phoneNumber"] = {
    mobile : 9794094606,
    home : 965441866
}
console.log(JSuser["phoneNumber"])

// if we want to make Object unchangeable we can use Object.freeze()

Object.freeze(JSuser);

JSuser.name = "Khan Quasim";
console.log(JSuser["name"])