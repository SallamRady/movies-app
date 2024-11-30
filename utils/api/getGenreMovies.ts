import axios from "axios";

import { MovieType } from "@/types/Movie";

export const getMovies = async (url: string) => {
  try {
    const res = await axios.get<{ results: MovieType[] }>(url);

    return res.data.results;
  } catch (error) {
    // Type the error as AxiosError
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
