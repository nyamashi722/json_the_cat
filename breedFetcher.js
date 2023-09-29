const request = require("request");
const breedName = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback("Page not found", null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        return callback(null, (data[0].description));
      } else {
        return callback("Breed not found", null);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};