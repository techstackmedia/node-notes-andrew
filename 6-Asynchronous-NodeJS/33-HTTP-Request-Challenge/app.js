const request = request("request");
const url = "weatherstack url&units=f";

request({ url: url, json: true }, (err, res) => {
  const currentTemp = res.body.current.temperature;
  const currentFeelsLike = res.body.current.feelslike;
  const weatherDescription = res.body.current.weather_description[0];
  console.log(
    `${weatherDescription}. It is currently ${currentTemp} degree out. It feels like ${currentFeelsLike} degree out.`
  );
});

// Geocoding converts the location to latitude and longitude
// Address -> lat/long - weather
// mapbox.com;
// After sign up -> Access token -> copy the default public token
// click Mapbox web services link - search service - geocoding - forward geocoding
// GET /geocoding/v5/{endpoint}/{search_text}.json

// run below on terminal
// $ curl "http...&limit=1"
// query let's us know what we provided

//
// Goal: Print the lat/long for Los Angeles

// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3.Print both the latitude and longitude to the terminal
// 4. Test your work!

const geocodeURL = "http://...";

request({ url: geocodeURL, json: true }, (err, res) => {
  const latitude = res.body.features[0].center[1];
  const longitude = res.body.features[0].center[0];
  console.log(`${latitude} ${longitude}`);
});
