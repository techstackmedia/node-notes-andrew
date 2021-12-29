const request = request("request");
const url = "weatherstack url&units=f";

request({ url: url, json: true }, (err, res) => {
  // error.info - success is false
  //   console.log(err); // but commentout all other statements below
  if (err) {
    console.log("Unable to connect to weather service");
  } else if (res.body.error) {
    console.log("Unable to find location");
  } else {
    const currentTemp = res.body.current.temperature;
    const currentFeelsLike = res.body.current.feelslike;
    const weatherDescription = res.body.current.weather_description[0];
    console.log(
      `${weatherDescription}. It is currently ${currentTemp} degree out. It feels like ${currentFeelsLike} degree out.`
    );
  }
});

//
// Goal: Handle errors for geocoding request
//
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

// avoid the long stack trace

const geocodeURL = "http://...";
// messup the location to check if err is handled properly

request({ url: geocodeURL, json: true }, (err, res) => {
  if (err) {
    console.log("Unable to connect to location services");
  } else if (res.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = res.body.features[0].center[1];
    const longitude = res.body.features[0].center[0];
    console.log(`${latitude} ${longitude}`);
  }
});
