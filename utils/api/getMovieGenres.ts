import axios from "axios";

import { MovieGenreType } from "@/types/MovieGenre";

export const getMovieGenres = async () => {
  try {
    const res = await axios.get<{ genres: MovieGenreType[] }>(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&language=en-US`
    );

    return res.data.genres;
  } catch (error) {
    // Type the error as AxiosError
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
