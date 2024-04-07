const btn = document.getElementById('button');
const name = document.getElementById('name');
const img = document.getElementById('img');

async function getData() {

    const response = await fetch('img.json');
    const data = await response.json();
    name.innerText = data.Data.name;
    img.src = data.Data.img
}

btn.addEventListener('click', () => {
    getData()
})