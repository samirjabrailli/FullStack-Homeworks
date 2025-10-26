const ApiKey = "85e899c19847f3555e3ad1a0a76c1e1b";
const city = "Qax";

async function getWeather() {
  try {
    // ✅ API sorğusunu gözləyirik
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
    );

    // Əgər cavab 404 və ya uğursuzdursa, error ataq
    if (!response.ok) {
      throw new Error(`Xəta: ${response.status} - ${response.statusText}`);
    }

    // ✅ JSON formatına çeviririk
    const data = await response.json();
    console.log(data);

    // ✅ HTML hissəsi
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = "black";
    divElement.style.padding = "10px";
    divElement.style.borderRadius = "10px";
    divElement.style.margin = "10px";
    document.body.appendChild(divElement);

    const title = document.createElement("h2");
    title.style.color = "white";
    title.textContent = `${data.name}`;
    divElement.appendChild(title);

    const paragTemp = document.createElement("p");
    paragTemp.style.color = "white";
    paragTemp.textContent = `Temperatur: ${data.main.temp} °C`;
    divElement.appendChild(paragTemp);

    const paragWeather = document.createElement("p");
    paragWeather.style.color = "white";
    paragWeather.textContent = `Hava: ${data.weather[0].description}`;
    divElement.appendChild(paragWeather);

  } catch (error) {
    
    console.error("Xəta baş verdi:", error);
  }
}


getWeather();












// const  ApiKey = "85e899c19847f3555e3ad1a0a76c1e1b";
//         const city = `Qax`

        

//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`)
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data);
//             const divElment = document.createElement('div')
//             divElment.style.backgroundColor = "black"
//             document.body.appendChild(divElment)

//             const title = document.createElement('h2')
//             divElment.appendChild(title)
//             title.style.color = "white"
//             title.textContent = `${data.name}`

//             const paragTemp = document.createElement('p')
//             divElment.appendChild(paragTemp)
//             paragTemp.style.color = "white"
//             paragTemp.textContent = `Temperatur: ${data.main.temp} °C`

//             const paragWather = document.createElement('p')
//             divElment.appendChild(paragWather)
//             paragWather.style.color = "white"
//             paragWather.textContent = `Hava: ${data.weather[0].description}` 

//         })

//         .catch(error => console.error("Xəta:", error));