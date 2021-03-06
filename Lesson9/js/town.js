const requestURL= "https://michell179708.github.io/Lesson9/js/info.town.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
   const town = jsonObject["town"];
  for (let i = 0; i < town.length; i++ ) {

        let information = document.createElement("section");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let image =document.createElement("img");

        h2.textContent = town[i].name;
        h4.textContent = town[i].motto;

        p.textContent = "Year founded:" + town[i].yearFounded + "Population:" + town[i].currentPopulation

        image.setAttribute("src", town[i].imageurl);
        information.appendChild(h2);
        information.appendChild(h4);
        information.appendChild(p);
        information.appendChild(image);

        document.querySelector("div.information").appendChild(information);


    
   









    }
});

  

