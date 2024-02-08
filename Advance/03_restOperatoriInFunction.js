// In this program we will see about rest operator in function and more

// let take a function to add in cart 

const addItemsInCart = (...items) =>{     //... means rest operator in function, it is also spread operator in array and object but the work is deffrent in function, rest opeartor is used to combine multiple arguments into an array
    return items;
}

console.log(addItemsInCart(200,300,400,500,600)); //Output:[200, 300, 400, 500, 600]



let sumOfAllItems = null;
for(let i = 0; i < addItemsInCart(200,300,400,500,600).length; i++){
    sumOfAllItems = sumOfAllItems + addItemsInCart(200,300,400,500,600)[i];
}
console.log(sumOfAllItems);