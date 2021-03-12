
// URL for the document API using the site openweather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=927515261fe9326455b3c33d9ad82144&units=imperial";

//we use the method fetch to request the server to upload the information of the API document.
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); //we use console log to check if the apiURL is correct 
    
    // we use ID to create information in our HTML using the array jsOBject which is our information. 
    document.getElementById("temp-min").textContent = jsObject.main.temp_min;
    document.getElementById("temp-max").textContent = jsObject.main.temp_max;
    document.getElementById("humidity").textContent = jsObject.main.humidity;
    document.getElementById("current-condition").textContent = jsObject.weather[0].description;
    document.getElementById("current-temp").textContent = jsObject.main.temp;
    

    //calculate the windchild
    let f;
    let tempF = jsObject.main.temp;
    let speedW = jsObject.wind.speed;

    if(tempF<=50 && speedW>3 ){
       f=( 35.74 + (0.6215 * tempF) - (35.75 * Math.pow (speedW,0.16)) + (0.4275 * tempF * Math.pow(speedW,0.16)));
      
      }
      else{
        f="N/A";
      }
      
      document.getElementById("child").textContent = f.toFixed(2);
    

  });