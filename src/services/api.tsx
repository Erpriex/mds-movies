import axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchMarvelMovies = async () => {
  try {
    const response = await api.get('/discover/movie', {
      params: {
        with_companies: 420, // ID de Marvel Studios
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erreur lors de la récupération des films Marvel :', error);
    throw error;
  }
};

export const fetchBestMovies = async () => {
  try {
    const response = await api.get('/discover/movie', {
      params: {
        sort_by: 'vote_average.desc',
        vote_count: { gte: 1000 },
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erreur lors de la récupération des meilleurs films :', error);
    throw error;
  }
};
