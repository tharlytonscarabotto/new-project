const openWeatherKey = '531481bda653b42b67b37ccc7fcbf261'
const apiCountryFlag = 'https://flagsapi.com/BR/flat/64.png'

const cityInput = document.querySelector('#city-input')
const searchButton = document.querySelector('#search')

const cityElement = document.querySelector('#city')
const temperatureElement = document.querySelector('#temperature span')
const descriptionElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryFlagElement = document.querySelector('#country-flag')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherKey}&lang=en`

    const res = await fetch(apiWeatherURL);
    const data = await res.json()

    return data
    
}

const showWeatherData = async (city) => {

    const data = await getWeatherData(city)

    cityElement.innerText = data.name
    temperatureElement.innerText = parseInt(data.main.temp)
    descriptionElement.innerText = data.weather[0].description
    console.log(data)
}


searchButton.addEventListener('click', (event) =>{
    
    event.preventDefault()

    const city = cityInput.value

    showWeatherData(city)
})
