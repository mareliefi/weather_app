$(function () { 
  $.get("http://api.openweathermap.org/data/2.5/forecast?q=Pretoria,za&units=metric&APPID=ad072cb9c0700a66a327e65573d6cee8", function(response) {
    var weatherResult = response;
    console.log(weatherResult);
    var temp = weatherResult.list[0].main.temp + "°C";
    var tempMax = "High" + "<br>" + weatherResult.list[0].main.temp_max + "°C";
    var tempMin = "Low" + "<br>" + weatherResult.list[0].main.temp_min + "°C";
    var pressure = "Pressure " + "<br>" + weatherResult.list[0].main.pressure + " Pa";
    var humidity = "Humidity " + "<br>" + weatherResult.list[0].main.humidity + " g/m3";
    var current_date = new Date();
    var forecastDay1 = weatherResult.list[8].dt_txt + "<br>" + weatherResult.list[8].main.temp + "°C" + "<br>";
    var forecastDay2 = weatherResult.list[16].dt_txt + "<br>" + weatherResult.list[16].main.temp + "°C" + "<br>";
    var forecastDay3 = weatherResult.list[24].dt_txt + "<br>" + weatherResult.list[24].main.temp + "°C" + "<br>";
    var forecastDay4 = weatherResult.list[32].dt_txt + "<br>" + weatherResult.list[32].main.temp + "°C" + "<br>";

    if(weatherResult.list[0].weather.length > 0) {
      var weatherDescription = "Weather circumstances are: " + weatherResult.list[0].weather[0].main;
      if (weatherResult.list[0].weather[0].main == "Clouds") {
        document.getElementById("curtemppic").src = "icons/cloudy.jpg";
      } else {
        document.getElementById("curtemppic").src = "icons/Partly-Sunny-Thinkstock2.jpg";
      }
    } else {
      var weatherDescription = "No weather description avaiable";    
    }

    if(weatherResult.list[8].weather.length > 0) {
      var weatherDescription1 = forecastDay1 + weatherResult.list[8].weather[0].main;
      if (weatherResult.list[8].weather[0].main == "Clouds") {
        //document.getElementById("curtemppic1").src = "icons/cloudy.jpg";
        $('#curtemppic1').html('<img class="current-temperature__icon" alt="" src="icons/cloudy.jpg">')
      } else {
        document.getElementById("curtemppic1").src = "icons/Partly-Sunny-Thinkstock2.jpg";
      }
    } else {
      var weatherDescription1 = "No weather description avaiable";    
    }

    if(weatherResult.list[16].weather.length > 0) {
      var weatherDescription2 = forecastDay2 + weatherResult.list[16].weather[0].main;
      if (weatherResult.list[16].weather[0].main == "Clouds") {
        document.getElementById("curtemppic2").src = "icons/cloudy.jpg";
      } else {
        document.getElementById("curtemppic2").src = "icons/Partly-Sunny-Thinkstock2.jpg";
      }
    } else {
      var weatherDescription1 = "No weather description avaiable";    
    }

    if(weatherResult.list[24].weather.length > 0) {
      var weatherDescription3 = forecastDay3 + weatherResult.list[24].weather[0].main;
      if (weatherResult.list[24].weather[0].main == "Clouds") {
        document.getElementById("curtemppic3").src = "icons/cloudy.jpg";
      } else {
        document.getElementById("curtemppic3").src = "icons/Partly-Sunny-Thinkstock2.jpg";
      }
    } else {
      var weatherDescription1 = "No weather description avaiable";    
    }

    if(weatherResult.list[32].weather.length > 0) {
      var weatherDescription4 = forecastDay4 + weatherResult.list[32].weather[0].main;
      if (weatherResult.list[32].weather[0].main == "Clouds") {
        document.getElementById("curtemppic4").src = "icons/cloudy.jpg";
      } else {
        document.getElementById("curtemppic4").src = "icons/Partly-Sunny-Thinkstock2.jpg";
      }
    } else {
      var weatherDescription1 = "No weather description avaiable";    
    }

    document.getElementById("current_date").innerHTML = current_date
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempMax").innerHTML = tempMax;
    document.getElementById("tempMin").innerHTML = tempMin;
    document.getElementById("pressure").innerHTML = pressure;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("weatherDescription").innerHTML = weatherDescription;
    document.getElementById("forecastDay1").innerHTML = weatherDescription1;
    document.getElementById("forecastDay2").innerHTML = weatherDescription2;
    document.getElementById("forecastDay3").innerHTML = weatherDescription3;
    document.getElementById("forecastDay4").innerHTML = weatherDescription4;
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    document.getElementById("weatherHeading").innerHTML = "Error:" + "</br>" + errorThrown;
  });
});



  

