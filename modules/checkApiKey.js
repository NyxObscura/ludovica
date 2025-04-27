const fetchData = require("../utils/fetchData");

async function checkApiKey(apiKey) {
  const url = `https://backend.obscuraworks.com/api/check?apikey=${apikey}`;
  const response = await fetchData(url); // Mendapatkan data dari API
  return response; // Mengembalikan respons data langsung
}

module.exports = checkApiKey;
