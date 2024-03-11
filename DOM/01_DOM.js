// // In this program, we will see the DOM in action.
// // This program is written by Quasim Khan

// const title = document.getElementById("title")

// // title.innerHTML         //it shows all the text as well as the html inside the title
// // title.innerText         //it shows only visible text, if hidden property is true it shows nothing
// // title.textContent       //It shows all the text in the title either it is hidden or visible 

// title.innerHTML = 'Heading 1'

// const paragraph = document.querySelector("#paragraph")

// paragraph.style.color = 'red'

// paragraph.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto ipsa error dolores porro iure, reiciendis blanditiis accusantium ab at aliquid sapiente dolore minima fuga et earum quaerat, hic expedita'  + '<p>Paragraph</p>'

// const paragraph_firstChild = document.querySelector("p:first-child")

// paragraph_firstChild.style.color = 'blue'

// Now let see query Selector all 

// const listItems = document.querySelectorAll("li")

// listItems.forEach((item) => {
//     item.style.color = 'red'
//     item.style.backgroundColor = 'black'
//     item.style.listStyle = 'none'
// })

// Now let see about class name selector 

// const listItems = document.getElementsByClassName('list-item');
// // listItems.item(0).style.color = 'red';

// // It gave HTML colllection as return, we are not able to use any loop in HTML collection 

// // First we need to convert HTML colllection to array

// let ListItemArray = Array.from(listItems);
// let NewLiItem = document.createElement('li');
// NewLiItem.setAttribute('class', 'list-item')
// NewLiItem.innerHTML = 'Four';

// ListItemArray.push(NewLiItem);

// document.querySelector('ul').append(...ListItemArray)



// // Now Add Mutiple Elements in the DOM

// const listItems = document.getElementsByClassName('list-item');
// let ListItemArray = Array.from(listItems);

// // Array of content for new li items
// let newLiContent = ['Four', 'Five', 'Six'];

// // Create an empty array to store the new li elements
// let newLiElements = [];

// // Loop through the content array and create new li elements for each item
// newLiContent.forEach(content => {
//     let newLiItem = document.createElement('li');
//     newLiItem.setAttribute('class', 'list-item');
//     newLiItem.innerHTML = content;
//     newLiElements.push(newLiItem);
// });

// // Append the new li elements to the parent list
// let parentElement = document.querySelector('ul');
// newLiElements.forEach(item => {
//     parentElement.appendChild(item);
// });

// // Add the new li elements to the existing list item array
// ListItemArray = ListItemArray.concat(newLiElements);

// console.log(ListItemArray);



