const API_KEY = "dd10e16"; // Your OMDb API key
const BASE_URL = "https://www.omdbapi.com/";

// Fetch "popular" movies (fixed search term "Avengers")
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=Avengers`);
    const data = await response.json();
    return data.Search || [];
  } catch (err) {
    console.error("Error fetching popular movies:", err);
    return [];
  }
};

// Search movies by user query
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.Search || [];
  } catch (err) {
    console.error("Error searching movies:", err);
    return [];
  }
};
