
// URL for the document API using the site openweather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=927515261fe9326455b3c33d9ad82144&units=imperial";

//we use the method fetch to request the server to upload the information of the API document.
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });