const promiseOne = new Promise((resolve, reject) => {
    //Do an Async task
    //DataBase calls

    setTimeout(() => {
        console.log('Promise One');
        resolve();
    }, 1000);

})

promiseOne.then(() => {
    console.log('Promise One resolved');
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Two');
        resolve();
    }, 2000);
}).then(() => {
    console.log('Promise Two resolved');
})



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
     

        resolve({name:"Quasim Khan", email:"quasim@gmail.com"});
    }, 3000);
})
promiseThree.then(function(user){
console.log(user);
})


const promiseFour  = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({name:"Quasim Khan", email:"quasim@gmail.com"});
        }
        else{
            reject('Error: Something went wrong');
        }
    }, 4000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.name
}).then((name) => {
    console.log(name);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({name:"Kashif Khan", email:"kashif@gmail.com"});
        }
        else{
            reject('Error: Something kashif wrong');
        }
    }, 5000);
})

async function consumePromiseFive(){
// const response = await promiseFive     //It is an object not a function so we are not using ()
// console.log(response);


// to handle the error we use try and catch

try {
    const respone = await promiseFive
    console.log(respone);
} catch (error) {
    console.log(error);
}
}
consumePromiseFive()