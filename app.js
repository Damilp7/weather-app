let inputname = document.querySelector('#nameinput')
let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
  let nameval = inputname.value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    let locationval = data['name']
    let descrip = data['weather']['0']['description']
    let tempature = data['main']['temp']
    let wndspd = data['wind']['speed']
    city.innerHTML= `${nameval}, Here's Today's Weather Forecast for <span>${locationval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  })

  .catch(err => alert('You entered Wrong city name'))
})

// Country Facts Section

let division = document.querySelector(".division");
let facts = document.querySelector('.factoutput')
let parag = document.createElement('p');
facts.append(parag);
let btn2 = document.querySelector('#btn2');
let country = document.querySelector('#country')

btn2.addEventListener('click', () =>{
  fetch("https://api-ninjas.com/api/country" + country.value)
  .then(response => response.json())

  .then(data => {
      console.log(data)
      let countryval = data['name']
      let unemployed = data['max_unemployment']
      parag.innerHTML = `${countryval}'s maximum unemployment rate according to recent data is ${unemployed}%`
  })

  .catch(err => alert('Oops! We are currently unable to fetch data for your country.'))
})