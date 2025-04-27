const fetchData = require("../utils/fetchData");

async function checkApiKey(apiKey) {
  const url = `https://api.obscuraworks.com/api/check?apikey=${apikey}`;
  const response = await fetchData(url);
  return response; // Return response nya
}
// See docs on https://api.obscuraworks.com/api/help
// Thanks for using my WhatsApp script
module.exports = checkApiKey;
