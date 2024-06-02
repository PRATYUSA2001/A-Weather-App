const getWeather = async (city) => {
    try {
      // Display city name
      document.getElementById("cityName").innerHTML = city;
  
      const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "16432adf4dmsh978033c35cc4cddp1bf8cajsn217bd467bfa1",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };
  
      const response = await fetch(url, options);
      const result = await response.json(); // Parse response as JSON
  
      // Display weather data
      //document.getElementById("cloud_pct").innerHTML = result.cloud_pct;
      document.getElementById("temp").innerHTML = result.temp;
      document.getElementById("temp2").innerHTML = result.temp;
      document.getElementById("feels_like").innerHTML = result.feels_like;
      document.getElementById("humidity").innerHTML = result.humidity;
      document.getElementById("humidity2").innerHTML = result.humidity;
      document.getElementById("min_temp").innerHTML = result.min_temp;
      document.getElementById("max_temp").innerHTML = result.max_temp;
      document.getElementById("wind_speed").innerHTML = result.wind_speed;
      document.getElementById("wind_speed2").innerHTML = result.wind_speed;
      document.getElementById("wind_degrees").innerHTML = result.wind_degrees;
      document.getElementById("sunrise").innerHTML = result.sunrise;
      document.getElementById("sunset").innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  };
  
  // Assuming you have HTML elements with IDs 'cityName', 'city', and 'Submit'
  const submitButton = document.getElementById("submit");
  const cityInput = document.getElementById("city");
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(cityInput.value);
  });
  
  // Initially fetch weather for a default city
  getWeather(); // You can change 'Delhi' to any default city you want