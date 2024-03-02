// // In this program I will write for the project 
// // This Program is written by Quasim Khan

// const form = document.querySelector('form')


// // Now we know that when we submit the form, It will set or get to the server and it could be stop

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');


//     if (height === '' || height < 0 || isNaN(height)) {
//         results.innerHTML = `Please give a valid height ${height}`;
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTMl = `Please give a valid weight ${weight}`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         //show the result
//         results.innerHTML = `<span>${bmi}</span>`;
//       }


// })




const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',  (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

