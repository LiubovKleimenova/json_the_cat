const request = require("request");
//const fs = require("fs");

let name = process.argv[2];
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
const fetcher = function(url) {
  request(url, (error, response, body) => {
    console.error("error:", error);
    const data = JSON.parse(body);
    //console.log(typeof data);
    if (!data[0]) {
      console.log("Your request is incorrect. Check the breed");
    } else {
      console.log(data[0].description);
    }
  });
};

fetcher(URL);