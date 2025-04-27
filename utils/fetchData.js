async function fetchData(url) {
  try {
    // Dynamically import axios to work with ES module
    const axios = (await import('axios')).default;
    
    const response = await axios.get(url);
    return response.data; // Mengembalikan data respons API secara langsung
  } catch (error) {
    if (error.response) {
      console.error("[Error] Fetching Data:", error.response.data);
    } else {
      console.error("[Error] Fetching Data:", error.message);
    }
    throw error; // Lempar error agar dapat ditangani oleh pemanggil
  }
}

module.exports = fetchData;
