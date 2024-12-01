import { getMovieGenres } from "@/utils/api/getMovieGenres";
import MoviesFilters from "./components/filters";
import { MoviesFiltersCxtProvider } from "./context";
import FilteredMoviesList from "./components/FilteredMoviesList";

export default async function AllMoviesPage() {
  const genres = await getMovieGenres();

  return (
    <MoviesFiltersCxtProvider>
      <MoviesFilters genres={genres ?? []} />
      <FilteredMoviesList />
    </MoviesFiltersCxtProvider>
  );
}
