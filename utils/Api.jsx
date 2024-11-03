import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": 'aac0ff0f75mshd743eece1cfde18p19d055jsn070988841985',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com", // Removed leading space
  },
};

export async function FetchDataApi(url) {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw error;
  }
}
