function formatCrosswordData(data) {
  return data.map(entry => JSON.stringify({
    answer: entry.answer,
    clue: entry.clue,
    length: entry.answer.length,
    date: entry.date,
    direction: entry.direction
  })).join('\n');
}

module.exports = formatCrosswordData;
