const ApiKey = "85e899c19847f3555e3ad1a0a76c1e1b";

// Body-yə div əlavə edirik
const container = document.createElement("div");
container.style.margin = "20px";
document.body.appendChild(container);

// Input yaratmaq
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Şəhər adı yazın";
container.appendChild(input);

// Hava məlumatlarının göstəriləcəyi div
const weatherDiv = document.createElement("div");
weatherDiv.style.backgroundColor = "black";
weatherDiv.style.padding = "10px";
weatherDiv.style.borderRadius = "10px";
weatherDiv.style.margin = "10px";
weatherDiv.style.color = "white";
document.body.appendChild(weatherDiv);

// Hava məlumatını gətirən funksiya
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error(`Xəta: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        weatherDiv.innerHTML = ""; // əvvəlki məlumatları silirik

        const title = document.createElement("h2");
        title.textContent = `Hava Durumu - ${data.name}`;
        weatherDiv.appendChild(title);

        const paragTemp = document.createElement("p");
        paragTemp.textContent = `Temperatur: ${data.main.temp} °C`;
        weatherDiv.appendChild(paragTemp);

        const paragWeather = document.createElement("p");
        paragWeather.textContent = `Hava: ${data.weather[0].description}`;
        weatherDiv.appendChild(paragWeather);

    } catch (error) {
        console.error("Xəta baş verdi:", error);
        alert("Şəhər tapılmadı və ya API xətası baş verdi.");
    }
}

// Enter basılınca hava məlumatını göstər
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const city = this.value.trim();
        if (city) {
            getWeather(city);
        } else {
            alert("Zəhmət olmasa şəhər adı daxil edin!");
        }
    }
});
