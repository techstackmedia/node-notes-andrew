const request = request("request");
const url = "weatherstack url&units=f";

/* request({ url: url, json: true }, (err, res) => {
  console.log(response.body.current);
}); */
// chrome extention: json formatter

//
// Print: It is a small forecast to the user
// 1. Print: "It is currently 9 degree out. It feels like 5 degree out."
// 2. Test your work!

request({ url: url, json: true }, (err, res) => {
  const currentTemp = res.body.current.temperature;
  const currentFeelsLike = res.body.current.feelslike;
  const weatherDescription = res.body.current.weather_description[0];
  console.log(
    `${weatherDescription}. It is currently ${currentTemp} degree out. It feels like ${currentFeelsLike} degree out.`
  );
});

// convert units - weatherstack.com/quickstart
//  - documentation - options - units parameters - units = s (kelvin) or units = f (ferenheit)
