import moviesApis from "@/constants/MoviesApi";
import { getMovies } from "./getGenreMovies";
import { MovieType } from "@/types/Movie";

export default async function getAllGenresMovies(): Promise<
  AllGenresMoviesResponseType | undefined
> {
  try {
    const horrorMovies = await getMovies(moviesApis.HorrorMovies);
    const actionMovies = await getMovies(moviesApis.actionMovies);
    const comedyMovies = await getMovies(moviesApis.comedyMovies);
    const documentaries = await getMovies(moviesApis.documentaries);
    const romanceMovies = await getMovies(moviesApis.romanceMovies);
    const topRated = await getMovies(moviesApis.topRated);
    const trending = await getMovies(moviesApis.trending);

    return {
      trending,
      topRated,
      romanceMovies,
      documentaries,
      comedyMovies,
      actionMovies,
      horrorMovies,
    };
  } catch (error) {
    console.error("Error in get all movies", error);
  }
}

type AllGenresMoviesResponseType = {
  trending: MovieType[] | undefined;
  topRated: MovieType[] | undefined;
  romanceMovies: MovieType[] | undefined;
  documentaries: MovieType[] | undefined;
  comedyMovies: MovieType[] | undefined;
  actionMovies: MovieType[] | undefined;
  horrorMovies: MovieType[] | undefined;
};
