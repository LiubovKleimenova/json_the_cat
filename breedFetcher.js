const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback("Your request is incorrect. Check the breed");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};

//fetchBreed(URL);