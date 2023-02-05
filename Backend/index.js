const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': 'e9a88a7a73msh610e41f3046a971p16b749jsna67c26546105',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});