// In this code I will discuss about different typeof of loop like foreach and forof and forin
// This program is written by Quasim Khan

// ["","",""]
// [{},{},{}]

// forof

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (const val of array) {
//     console.log(val);
// }

// In forof loop we don't need to mention the index of array , It will automatically take the index

// forof loop used on array and map but not used on object

// To use on object we use forin loop

const userObj = {
    username: "Quasim",
    age: 21,
    email: "qXa6n@example.com",
};

for (const key in userObj) {
    
    // console.log(key);
    // /*output : username
    //   age
    //   email*/

    console.log(key, " : ", userObj[key]);

 /*
    output :
    username : Quasim
    age : 21
    email : qXa6n@example.com
 */   
}
