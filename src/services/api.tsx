import axios from 'axios';
import Category from '../utils/Category.tsx';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const DISCOVER_MOVIE = '/discover/movie';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const getCategoryParams = (category: Category): Record<string, any> => {
  const params: Record<string, any> = {};

  switch (category) {
    case Category.ROMANCE:
      params.with_genres = 10749; // Genre ID pour Romance
      break;
    case Category.SPORTS:
      params.with_genres = 10770; // Genre ID pour Sport
      break;
    case Category.KIDS:
      params.certification_country = 'FR';
      params['certification.lte'] = '12'; // Accessibles aux enfants de 12 ans
      break;
    case Category.HORROR:
      params.with_genres = 27; // Genre ID pour Horror
      break;
    case Category.ALL:
    default:
      break;
  }

  return params;
};

export const fetchMarvelMovies = async (category: Category) => {
  try {
    const params = {
      with_companies: 420, // ID de Marvel Studios
      ...getCategoryParams(category),
    };

    const response = await api.get(DISCOVER_MOVIE, {params});
    return response.data.results;
  } catch (error) {
    console.error('Erreur lors de la récupération des films Marvel :', error);
    throw error;
  }
};

export const fetchBestMovies = async (category: Category) => {
  try {
    const params = {
      sort_by: 'vote_average.desc',
      'vote_count.gte': 1000,
      ...getCategoryParams(category),
    };

    const response = await api.get(DISCOVER_MOVIE, {params});
    return response.data.results;
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des meilleurs films :',
      error,
    );
    throw error;
  }
};
