// darksky.net
// whether stack
// weatherstack.com
// API Access Key - to authenticate when making request to weatherstack - to track how many request you have made...
// list out various api endpoint that are accessible
// bas url - http://api.weatherstack.com/
// http://api.weatherstack.com/current?key=value&name=andrew
// http://api.weatherstack.com/current?access_key=value&query=37.8267,-122.4233

// npm request
// npm postman-request
const request = request("request");
const url = "weatherstack url";

/* request({ url: url }, (err, res) => {
  console.log(response);
}); */

request({ url: url }, (err, res) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
