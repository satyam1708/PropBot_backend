const fs = require('fs');
const path = require('path');

const logToFile = (entry) => {
  const logsPath = path.join(__dirname, '../data/logs.json');
  let logs = [];

  try {
    logs = JSON.parse(fs.readFileSync(logsPath));
  } catch (e) {}

  logs.push(entry);
  fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));
};

module.exports = logToFile;
