const button = document.getElementById('get-location');
const city = document.getElementById('city');
const cityTemp = document.getElementById('city-temp');
const localTime = document.getElementById('local-time');

async function getData(lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=96e8630f31d94b478df202229242203&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}

async function gotLocation(position) {
    try {
        const result = await getData(position.coords.latitude, position.coords.longitude);
    city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;
    localTime.innerText = `${result.location.localtime}`;
    } catch (error) {
        city.innerHTML = 'Something went wrong',error;
    }
}

function failedToGetLocation() {
    console.log('Something went wrong');
}

button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
});
