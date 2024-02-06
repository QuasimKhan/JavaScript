// In this program I will se many other properties and method of array which is important in production

const marvelHeroes = ["Thor", "Spider Man", "Captain America", "Iron Man"]
const indianHeroes = ["Hatim", "Baalveer", "ShaktiMan", "Krish"]


// const AddHeroes = marvelHeroes + indianHeroes       //If we add like that all the arrays convert into string so This method is not good to add arrays

// console.log(typeof AddHeroes)

// let push the array in each other

// marvelHeroes.push(indianHeroes)
// console.log(marvelHeroes)       //The result is quite disturbing mean add create nested array

// marvelHeroes.concat(indianHeroes)       //It required new variable to store concat all the element

// const allHeroes = marvelHeroes.concat(indianHeroes)     //Its a good way to merge both arrays

// console.log(allHeroes);

// But here a good option to merge two operators {Spread operator (...)}

const allHeroes = [...marvelHeroes,...indianHeroes]     //It is best way to concat or add two arrays
console.log(allHeroes)

