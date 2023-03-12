import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendMovies = async () => {
  const res = await axios.get(
    '/trending/all/day?api_key=bea7dcda7b46099606e243fc961918ee'
  );
  console.log('trendMovies', res.data.results);
  return res.data.results;
};

export const fetchMovie = async movieId => {
  const movie = await axios.get(
    `/movie/${movieId}?api_key=bea7dcda7b46099606e243fc961918ee&language=en-US`
  );

  console.log('movie', movie.data);
  return movie.data;
};

export const fetchMovieSearch = async query => {
  const movies = await axios.get(
    `/search/movie?api_key=bea7dcda7b46099606e243fc961918ee&query=${query}&language=en-US&page=1&include_adult=false`
  );

  console.log('movies', movies.data);
  if (movies.status !== 200) {
    return Promise.reject(new Error(`Sorry, something go wrong...`));
  } else if (movies.data.total_results === 0) {
    return Promise.reject(
      new Error(`Sorry, there are no movies named "${query}"`)
    );
  } else return movies.data;
};

export const fetchCast = async movieId => {
  const actors = await axios.get(
    `/movie/${movieId}/credits?api_key=bea7dcda7b46099606e243fc961918ee&language=en-US`
  );

  console.log('actors', actors.data);
  return actors.data;
};

export const fetchReviews = async movieId => {
  const reviews = await axios.get(
    `/movie/${movieId}/reviews?api_key=bea7dcda7b46099606e243fc961918ee&language=en-US&page=1`
  );

  console.log('reviews', reviews.data);
  return reviews.data;
};
