const button = document.querySelector(".btn");
const colorCode = document.querySelector("#color-code");

button.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorCode.innerText = randomColor;
})