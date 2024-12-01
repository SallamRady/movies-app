export const base_url = "https://api.themoviedb.org/3";
export const poster_base_url = "https://image.tmdb.org/t/p/original";

const moviesApis = {
  trending: `${base_url}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&language=en-US`,
  netflixOriginals: `${base_url}/discover/tv?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&with_networks=213`,
  topRated: `${base_url}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&language=en-US`,
  actionMovies: `${base_url}/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&with_genres=28`,
  comedyMovies: `${base_url}/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&with_genres=35`,
  HorrorMovies: `${base_url}/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&with_genres=27`,
  romanceMovies: `${base_url}/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&with_genres=10749`,
  documentaries: `${base_url}/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&with_genres=99`,
};

export default moviesApis;
