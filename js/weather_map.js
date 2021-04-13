 "use strict";

 const searchForm = document.getElementById("searchForm");
 const searchInput = document.getElementById("searchInput");
 const searchBtn = document.getElementById("searchBtn");

 searchForm.addEventListener("submit", (e) => {
     e.preventDefault();
 });

 searchBtn.addEventListener("click", async () => {
     if (searchInput.value === "") return;
     const weatherData = await weather.getData(searchInput.value);
     view.setSearchResult(weatherData);
 });

//mapbox token
 mapboxgl.accessToken = mapboxToken;

 var mapOptions = {
     container: 'map', // container ID
     style: 'mapbox://styles/mapbox/dark-v10', // style URL
     center: [-98.4861, 29.5252], // starting position [lng, lat]
     zoom: 10
 }

 var map = new mapboxgl.Map(mapOptions);

 var marcoMap = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-98.4861, 29.526],
    zoom: 8
})

    //console logs weather in SA
 $.get("https://api.openweathermap.org/data/2.5/onecall", {
    appid: OPEN_WEATHER_APPID,
    lat: 29.423017,
    lon: -98.48527,
    units: "imperial",
    exclude: "current,minutely,hourly,alerts"
}).done(function(results){
    console.log(results);
})

    //dis my marker
 var currentLocationMarker = new mapboxgl.Marker({color: "#ffc107", draggable: true})
    .setLngLat([-98.4861, 29.426])
    .addTo(marcoMap);

 currentLocationMarker.on("dragend", () => markerDragEnd());
    //displays coords of marker
    function markerDragEnd() {
    var markerCoords = currentLocationMarker.getLngLat();
    console.log(markerCoords)
}

    // -Update your layout and AJAX request(s) to display a five day forecast for the city you live in that looks like the screenshot below.
    //
    // -If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.
    //
    // -Refer to your Mapbox API exercise. Recreate the map below your 5 day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).
    //
    // -Add a Mapbox text input to search by location and have the forecast update when a new location is searched.
    //
    // -As a bonus make sure you can update the marker's position to the new search result.


