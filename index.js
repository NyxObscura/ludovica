#!/usr/bin/env node

const checkApiKey = require("./modules/checkApiKey");

if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  const apiKey = args[1];
  const id = args[2];

  if (!command || !apiKey) {
    console.error("Usage: <command> <api_key> [additional_params]");
    console.error(
      "Commands: check"
    );
    process.exit(1);
  }

  switch (command) {
    case "check":
      checkApiKey(apiKey).then((data) => console.log(data)).catch(console.error);
      break;
    default:
      console.error("Error: Invalid command.");
  }
}

// Ekspor semua fungsi sebagai modul
module.exports = {
  checkApiKey
};
