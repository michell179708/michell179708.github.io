const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=927515261fe9326455b3c33d9ad82144"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("current-temp").textContent = jsObject.main.temp;
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0]+".png";
    const desc = jsObject.weather[0].description;
    document.getElementById("imagesrc").textContent = imagesrc;
    document.getElementById("icon").setAttribute("src",imagesrc);
    document.getElementById("icon").setAttribute("alt",desc);
  });

