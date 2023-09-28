const request = require("request");
const userInput = process.argv[2];



request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  if (error) {
    console.log("Page cannot be found");
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log("Breed not found");
    }
  }
});




