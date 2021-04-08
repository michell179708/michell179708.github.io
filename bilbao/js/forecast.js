const api = "https://api.openweathermap.org/data/2.5/forecast?id=3121007&appid=927515261fe9326455b3c33d9ad82144&units=imperial";

fetch(api)
.then((response) => response.json())
.then((jsObject) => {
 console.log(jsObject)//we probe our link in console log

 //code for the weekdays
 let day = 0;
 const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // array to find the weekdays
 // we filtered the odject than only have the hour 6.00pm => this our condition in our filtered.

 
 const Fivedays = jsObject.list.filter((element) =>
  element.dt_txt.includes("18:00:00")
 );
 // console.log(Fivedays); //we probe if our filter is fine.
  Fivedays.forEach(x => { // we go through our filter array with the method for each
    
  let d = new Date(x.dt_txt); //we assign our date
  
  document.getElementById("diasDesemana"+(day+1)).textContent = weekdays[d.getDay()]; // we get our day
  document.getElementById("forecast"+(day+1)).textContent = Math.round(Fivedays[day].main.temp) + ' °F' //we get the forecast
   //code for the icon images
  const imagesrc = `https://openweathermap.org/img/w/${Fivedays[day].weather[0].icon}.png`;
  const desc = Fivedays[day].weather[0].description;
  
  document.getElementById("icon"+(day+1)).setAttribute("src",imagesrc);
  document.getElementById("icon"+(day+1)).setAttribute("alt",desc);

  day++;

});
});