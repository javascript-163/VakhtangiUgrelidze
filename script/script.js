let city1 = document.getElementById("city1");
let adgili = document.getElementById("adgili")
let gradusi1 = document.getElementById("gradusi1");
let qarissichqare = document.getElementById("qarissichqare")


let citytext = "";

city1.addEventListener("input", (x) => {
  console.log(x.target.value);
  citytext = x.target.value;
});

async function sumbit() {
  await fetch(`https://geocode.maps.co/search?q=${citytext}`)
    .then((res) => {
      return res.json();
    })
    .then(async(x) => {
      console.log(x[0]);

      adgili.innerHTML = `ადგილის დასახელება: ${x[0].display_name}`
      await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${x[0].lat}&longitude=${x[0].lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,rain,windspeed_10m`)
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);
        gradusi1.innerHTML=`<span>ტემპერატურა: </span> ${x.current_weather.temperature} ${x.current_weather_units.temperature}`;
        
        qarissichqare.innerHTML= `<span>ქარის სიჩქარე: </span> ${x.current_weather.windspeed} ${x.current_weather_units.windspeed}`;
        
      });
    });
}
