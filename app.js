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

// Activity Suggestiions Section

let division = document.querySelector(".division");
let facts = document.querySelector('.factoutput')
let parag = document.createElement('p');
facts.append(parag);
let btn2 = document.querySelector('#btn2');
let country = document.querySelector('#country')
let parag2 = document.createElement ("p");
facts.append(parag2);
parag2.style.color = "red";
parag2.style.backgroundColor = "white";
parag2.style.textAlign = "center";
parag.style.color = "white";
parag.style.textAlign = "center";
parag.style.marginTop = "20px";
parag.style.backgroundColor = "rgba(0, 128, 0, 0.664)";
parag2.style.borderRadius = "10px";
parag.style.borderRadius = "10px";


btn2.addEventListener('click', () => {
  fetch('https://www.boredapi.com/api/activity')
  .then(res => {
    console.log(res);
    res.json()

    .then(data => {
      console.log(data)
      parag.textContent = data.activity
    })
  })
  .catch(error => 
    parag2.textContent = "Ouch! Brain Freeze!!!"
  );
})
  

