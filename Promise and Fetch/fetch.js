// async function getData(){
//    const response = await fetch('https://api.thecatapi.com/v1/images/search')
//    const data = await response.json()
//    console.log(data)
// }

// getData()


fetch('https://api.thecatapi.com/v1/images/search')
.then(respone => respone.json())
.then((data) => {
    console.log(data)
})

.catch((error) =>{
    console.log(error)
})