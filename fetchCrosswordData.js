const axios = require('axios');

function fetchCrosswordData(date) {
  // Replace with the actual endpoint or method to get crossword data
  const url = `https://api.nytimes.com/crosswords/${date}`;

  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(`Failed to fetch crossword data for ${date}:`, error);
      throw error;
    });
}

module.exports = fetchCrosswordData;
