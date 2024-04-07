const button = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const city = document.getElementById('city');
const cityTemp = document.getElementById('city-temp');
const localTime = document.getElementById('local-time');

async function getData(cityName){
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=96e8630f31d94b478df202229242203&q=${cityName}&aqi=yes`);
  return await promise.json();
}

button.addEventListener('click', async () => {
    const value = cityName.value;
    const result = await getData(value)
    city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTemp.innerText = `${result.current.temp_c}°C`
    localTime.innerText = `${result.location.localtime}`
});


