//useFilteredMoviesData
import { base_url } from "@/constants/MoviesApi";
import { MovieType } from "@/types/Movie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (name: string, genreId: string, page: number) => {
  // prepare helper methods
  let url = `${base_url}/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&language=en-US&page=${page}`;
  if (name.length) url += `&query=${name}`;
  if (genreId.length) url += `&with_genres=${genreId}`;

  const Response = await axios.get<FilteredMoviesResultType>(url);

  return Response.data;
};

export default function useCompaniesData(
  name: string,
  genreId: string,
  page: number
) {
  return useQuery({
    queryKey: [`filtered-movies-data`, name, genreId, page],
    queryFn: () => fetchData(name, genreId, page),
  });
}

export type FilteredMoviesResultType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
