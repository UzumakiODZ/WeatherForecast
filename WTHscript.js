const searchQuery = document.getElementById("cityInput");
const showArea = document.getElementById("showArea"); // Assuming you have an element with id "showArea"

searchQuery.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("buttonInput").click();
    }
  });

async function searchWeather() {
    const apiKey = '13723652ff7a4de6afc54240242401';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery.value}&aqi=no`;

    try {
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();

        console.log(data);

        // Access data properties as needed
        const cityName = data.location.name;
        console.log(cityName);

        const temperature = data.current.temp_c+"°c";
        console.log(temperature);


        // Do something with the data (e.g., update UI)
        showArea.innerHTML = "Temperature-" + temperature + "<br>City-" + cityName;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
