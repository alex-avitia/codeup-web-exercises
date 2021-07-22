"use strict";

$(document).ready(function(){
    let marker = new mapboxgl.Marker({
        color: "#568a7f",
        draggable: true
    });

    function error(err){
        console.log(err.code, err.message);
    }

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    navigator.geolocation.getCurrentPosition(function (pos){
        let userCords = pos.coords;
        let latLng = [userCords.longitude, userCords.latitude,];
        marker.setLngLat(latLng).addTo(map);
        map.flyTo({ center: latLng, zoom: 11 });
        marker.on("dragend", () => forecast([marker.getLngLat().lat, marker.getLngLat().lng]));
        forecast([userCords.latitude, userCords.longitude]);
    }, error, options);

//map
    mapboxgl.accessToken = mapboxToken;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.2625, 29.8752], // starting position [lng, lat]
        zoom: 9
    });

//search listener
    $("button").click(function (event) {
        event.preventDefault();
        let cityVar = $(".form-control").val();
        let cityString = cityVar.toString();
        console.log(cityVar);
        geocode(cityString, mapboxToken).then(function (data) {
            console.log(data);
            let latLng = {
                lat: data[1],
                lng: data[0]
            };
            marker.setLngLat([data[0],data[1]]);
            let cityArray = data.reverse();
            map.flyTo({ center: latLng, zoom: 11 });
            console.log(cityArray);
            console.log(forecast(cityArray));

            marker.on("dragend", () => forecast([marker.getLngLat().lat, marker.getLngLat().lng]));
        });
    });

// map option listener

    $('.form-check-input').change(function (){
        if (this.checked) {
            $('.map').removeClass('map-hidden');
        } else {
            $('.map').addClass('map-hidden');
        }
    })
//day option listener

    function markerLocation() {
        let searchCords = marker.getLngLat();
        forecast([searchCords.lat, searchCords.lng])
    };
    $("#day-select").change(function(){
        $(this).click(markerLocation());
    });

// weather

    function forecast(array) {
        reverseGeocode({lat: array[0], lng: array[1]}, mapboxToken).then(function (data){
            let locationArray = data.split(",")
            let locState = locationArray[2].split(" ");
            locState.length = 2;
            let locationHTML = `<h3>${locationArray[1]},${locState[1]}</h3>`
            $('.location-box').empty();
            $('.location-box').append(locationHTML);

        })
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lat: array[0],
            lon: array[1],
            appId: OPEN_WEATHER_APPID,
            units: "imperial",
            exclude: "minutely,hourly,alerts"
        }).done(function (results) {
            let currentWeather = results.current.weather[0].main;
            let currentClass = $('body').attr("class");
            switch (currentWeather) {
                case "Clouds":
                    $('body').removeClass(currentClass);
                    $('body').addClass('overcast');
                    break;
                case "Thunderstorm":
                    $('body').removeClass(currentClass);
                    $('body').addClass('thunderstorm');
                    break;
                case "Drizzle":
                    $('body').removeClass(currentClass);
                    $('body').addClass('overcast');
                    break;
                case "Snow":
                    $('body').removeClass(currentClass);
                    $('body').addClass('snowy');
                    break;
                case "Clear":
                    $('body').removeClass(currentClass);
                    $('body').addClass('sunny');
                    break;
                case "Rain":
                    $('body').removeClass(currentClass);
                    $('body').addClass('thunderstorm')
            }
            $('.weather-cards').empty();
            let dayInteval = $('#day-select').val();
            for(let dayIndex = 0; dayIndex <= dayInteval; dayIndex++) {
                let forecastData = results.daily[dayIndex];
                let html =
                    `<div class="card card-weather">
                    <div class="card-body">
                        <div class="weather-date-location">
                           <p class="text-gray"> <span class="weather-date">${new Date(forecastData.dt * 1000).toDateString()}</span> </p>
                        </div>
                        <div class="weather-data d-flex">
                            <div class="mr-auto">
                                <p class="display-3">Low ${forecastData.temp.min}°F High ${forecastData.temp.max}°F</p>
                                <img src="http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png">
                                <p>${forecastData.weather[0].description}</p>
                                <p>Humidity: ${forecastData.humidity}</p>
                                <p>Wind speed: ${forecastData.wind_speed}</p>
                                <p>Pressure: ${forecastData.pressure}</p>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>`
                $('.weather-cards').append(html);
            }
        });
    }
})