const requestURL = 'https://michell179708.github.io/bilbao/js/directory.json';

fetch(requestURL)
.then(function (response) {
 return response.json();
})
.then(function (jsonObject) {
 console.log(jsonObject);

 const data = jsonObject["directory"];

 for (let i=0;i<data.length;i++){

  let seccion = document.createElement("section");
  let name = document.createElement("h4");
  let information = document.createElement("p");
  let location = document.createElement("p");
  let social = document.createElement("p");
  let URL = document.createElement("p")
  let photo = document.createElement("photo");

 if(data[i].name == 'Oliver Design'|| data[i].name == 'Hotel Tamarises' || data[i].name == 'Ros'){
    
  name.textContent = data[i].name;
  location.textContent = data[i].location;
  social.textContent = data[i].social-objective;

 }

}


});
