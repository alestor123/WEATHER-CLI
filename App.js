#!/usr/bin/env node
var axios = require('axios'),
    pck = require('./package.json'),  
city = process.argv[2] || 'Kochi',
country = process.argv[3] || 'India';
if(city=='-v' || city=='--version'){
    console.log( `${pck.version}`)
  process.exit(1);
  }
else if (city=='-h'|| city=='--help') { // checking undifined args
    console.log(`
    Usage: weather-cli <City> 
  `);
}
else{

    axios.get(`https://micro-weather.vercel.app/?city=${city}&country=${country}`)
  .then(function (response) {
    // handle success
  var aqi =  response.data.humidity
    if (aqi >= 0 && aqi <= 50) {
            day =  'Good';
          } else if (aqi >= 51 && aqi <= 100) {
            day = 'Moderate';
          } else if (aqi >= 101 && aqi <= 150) {
            day = 'Unhealthy for sensitive groups';
          } else if (aqi >= 151 && aqi <= 200) {
            day = 'Unhealthy';
          } else if (aqi >= 201 && aqi <= 300) {
            day = 'Very Unhealthy';
          } else if (aqi > 300) {
            day = 'Hazardous';
          }
    console.log(`Temprature:${response.data.temp}, Humidity:${response.data.humidity} ,Weather: ${response.data.condition} , Day:${day}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}