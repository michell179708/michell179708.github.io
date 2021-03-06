const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=927515261fe9326455b3c33d9ad82144&units=imperial"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("current-temp").textContent = jsObject.main.temp;
    
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.getElementById("imagesrc"+(day+1)).textContent = imagesrc;
    document.getElementById("icon"+(day+1)).setAttribute("src",imagesrc);
    document.getElementById("icon"+(day+1)).setAttribute("alt",desc);
  });

