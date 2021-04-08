const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.3479&lon=-3.0088&exclude=hourly,minutely&appid=927515261fe9326455b3c33d9ad82144&units=imperial";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
 console.log(jsObject);


// document.getElementById("current-condition").textContent = jsObject.weather[0].description;
 document.getElementById("temp").textContent = jsObject.current.temp;
 document.getElementById("humidity").textContent = jsObject.current.humidity;

});




