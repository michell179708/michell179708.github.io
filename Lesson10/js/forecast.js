
// URL for the document API using the site openweather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=927515261fe9326455b3c33d9ad82144&units=imperial";

//we use the method fetch to request the server to upload the information of the API document.
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject); //we use console log to check if the apiURL is correct 
    
    // we use ID to create information in our HTML using the array jsOBject which is our information. 
    document.getElementById("speed").textContent = jsObject.wind.speed;
    document.getElementById("humidity").textContent = jsObject.main.humidity;
    document.getElementById("current-condition").textContent = jsObject.weather[0].description;
    document.getElementById("temp").textContent = jsObject.main.temp;

    

    //calculate the windchild
    let t = parseFloat(document.getElementById("temp").innerHTML);
    let w = parseFloat(document.getElementById("speed").innerHTML);
     
    if (t <= 50 && w >= 3) {
      let f =
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(w, 0.16) +
        0.4275 * t * Math.pow(w, 0.16);
    
      f = document.getElementById("windchill").innerHTML =
        f.toFixed(2) + "&deg; " + "F";
    } else {
      f = "Not Applicable";
    
      document.getElementById("windchill").innerHTML = f;
    } 
      
  
    

  });