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
  
  let photo = document.createElement("img");
  let text = document.createElement("div")


    
  name.textContent = data[i].name;
  location.textContent = "Location:" +" "+ data[i].location;
  social.textContent ="Social Objective:"+" " + data[i].social;
  information.textContent = "Information:"+" " + data[i].information; 

  photo.setAttribute('src', `../images/${data[i].photo}`);
  photo.setAttribute('alt', data[i].name);
  photo.setAttribute('class', 'imagen-directory');
  information.setAttribute("class","paragraph-directory");
  social.setAttribute("class","paragraph-directory");
  location.setAttribute("class","paragraph-directory");
  seccion.setAttribute("class","seccion");
  text.setAttribute("class","div")
  name.setAttribute("class","title-directory");
  
  
  seccion.appendChild(text);
  text.appendChild(name);
  text.appendChild(location);
  text.appendChild(social);
  text.appendChild(information);
 
  seccion.appendChild(photo);
  document.querySelector("div.directory").appendChild(seccion);

 

}


});
