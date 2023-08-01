const fetchCrosswordData = require('./fetchCrosswordData');
const formatCrosswordData = require('./formatCrosswordData');

function generateCrosswordOutput(date) {
  return fetchCrosswordData(date)
    .then(data => formatCrosswordData(data))
    .then(output => {
      console.log(output);
      return output;
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

module.exports = generateCrosswordOutput;
