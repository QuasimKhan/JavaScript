const button = document.querySelector(".btn");
const img = document.querySelector("#img");

button.addEventListener("click", () => {
    img.setAttribute("src", `https://source.unsplash.com/random/?coding?${Math.floor(Math.random() * 1000)}`)
})




