const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// code for the section event ---- fish haven 
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == "Fish Haven"){
                let event = document.createElement('section')
                let div = document.createElement('div')
                let h2 = document.createElement('h4');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');

                div.setAttribute('class', 'evento')
                h2.textContent = 'Upcoming Events of the city ';
                h2.setAttribute = ("class", "titulo")
                p1.textContent = town.events[0];
                p1.setAttribute = ("class", "eventos");
                p2.textContent = town.events[1];
                p2.setAttribute = ("class","eventos");
                p3.textContent = town.events[2];
                p3.setAttribute = ("class", "eventos");
                p4.textContent = town.events[3];
                p4.setAttribute = ("class", "eventos");


              
                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                event.appendChild(div);

                document.querySelector('div.events').appendChild(event);
            }
        });

    });

  