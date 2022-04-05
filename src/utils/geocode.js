var request = require('request');

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicml5YXo5OCIsImEiOiJjbDFkZjIxc2wwZ3F5M2NvMnpxeTU4NXQ3In0.sU1pID66RDPIKRsrokxO4g`;
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connection location services', undefined);
    } else if (response.body.features.length === 0) {
      callback('unable to find location', undefined);
    } else {
      callback(undefined, response.body.features);
    }
  });
};

module.exports = {geoCode};
