const weatherLoading = async (countryName) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=d19df69dafb235ab968fefc7027e26b6`)
    const data = await res.json()
    displayData(data);
}

// display data
const displayData = (data) => {
    console.log(data);
    const currentTempContainer = document.getElementById('tempContainer');
    currentTempContainer.textContent = '';
    // console.log(currentTempContainer);
    const tempdiv = document.createElement('div');
    tempdiv.classList = `text-2xl text-center font-semibold text-white flex flex-col gap-4 mt-20`;
    tempdiv.innerHTML = `
                            <h1>${data.name} Temp : ${Math.ceil(data.main.temp - 273.15)}<sup>০</sup>C</h1>
                            <h1>Speed : <span>${data.wind.speed} km per/hour</span></h1>
                            <h1>Humidity : <span>${data.main.humidity}%</span></h1>
                            <p>Descriptions : <span>${data.weather[0].description}</span></p>
   `
    currentTempContainer.appendChild(tempdiv);
}

// search handle 
const searchHandle = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    weatherLoading(inputText);

}
// weatherLoading('sylhet'); 