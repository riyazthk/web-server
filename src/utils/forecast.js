var request = require('request');

const foreCast = (latitude, longtitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=1a6260aa7c34d78d6cfc44ee47252d36`;
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('unable to connect interet forecast', undefined);
    } else if (response.body.code === '400') {
      callback('unable to find waether forecast', undefined);
    } else {
      callback(undefined, response.body);
    }
  });
};

module.exports = {foreCast};
