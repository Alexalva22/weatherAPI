let mainContainer = document.querySelector(".render");

function searchCity() {
    let city = document.querySelector('.inputCity').value;

    let url = `https://api.weatherapi.com/v1/current.json?key=8a686dca7950422e873164527230905&q=${city}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            let object = data;
            console.log(object);

            let addCard = `
            
            <div class="middleSection">
            <h2>${object.current.temp_c}°C</h2>
            <h3>${object.current.condition.text}</h3>
            
        </div>
        <div class="footerSection">
            <div class="ubication">
                <span> ${object.location.name}, ${object.location.region}, ${object.location.country}, ${object.location.localtime}</span>
            </div>
            <div class="weatherData">
                <div class="wind">
                    <img src="assets/WIND.png" alt="">
                    <h4>VEL DEL VIENTO</h4>
                    <span>${object.current.wind_kph} kmh</span>
                    <span>${object.current.wind_mph} mph</span>
                </div>
                <div class="wind">
                    <img src="assets/TEMP.png" alt="">
                    <h4>SENS TERMICA</h4>
                    <span>${object.current.feelslike_c}°C</span>
                    <span>${object.current.feelslike_f}°F</span>
                </div>
                <div class="wind">
                    <img src="assets/BRUJULA.png" alt="">
                    <h4>DIR DEL VIENTO</h4>
                    <span>${object.current.wind_dir}</span>
                    
                </div>
                <div class="wind">
                    <img src="assets/HUMIDITY.png" alt="">
                    <h4>HUMEDAD</h4>
                    <span>${object.current.humidity}%</span>
                    
                </div>
            </div>

        </div>

             `



             mainContainer.innerHTML = addCard;
        })
        .catch((error) => {
            console.log(error);
        });
}