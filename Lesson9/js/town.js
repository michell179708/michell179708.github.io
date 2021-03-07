const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

.then(function (jsonObject) {
    // check for json object
    // console.table(jsonObject);

const townsdata = jsonObject['towns'];
    
// loop through the array
for (let i=0; i < townsdata.length; i++) {
    // declare each variable
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let year = document.createElement('p');
    let population = document.createElement('p');
    let annual = document.createElement('p');
    let image = document.createElement('img');
    let text= document.createElement('div')
    

    if (townsdata[i].name == 'Preston'|| townsdata[i].name == 'Fish Haven' || townsdata[i].name == 'Soda Springs') {
    
    h2.textContent = townsdata[i].name;
    h3.textContent = "Quote" + " " + townsdata[i].motto;    
    year.textContent = "Year Established:" + " " + townsdata[i].yearFounded;
    population.textContent = "Current Population:" + " " + townsdata[i].currentPopulation;
    annual.textContent = "Annual Rainfall:" + " " +  townsdata[i].averageRainfall;
    image.setAttribute('src', `../imagen/${townsdata[i].photo}`);
    image.setAttribute('alt', townsdata[i].name);
    image.setAttribute('class', 'imagen');
    card.setAttribute('class', "card-section" );
    text.setAttribute('class', 'text');


        card.appendChild(text);
        text.appendChild(h2);
        text.appendChild(h3);
        text.appendChild(year);
        text.appendChild(population);
        text.appendChild(annual);
        card.appendChild(image);}

    else {
        card.setAttribute('class', 'hide');
    }
        
     document.querySelector('div.cards').appendChild(card);
}
});


