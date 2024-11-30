import { notFound } from "next/navigation";

import MoviesGenreList from "@/components/MoviesGenreList";
import { Flex } from "@radix-ui/themes";
import getAllGenresMovies from "@/utils/api/getAllGenresMovies";

export default async function Home() {
  // Vars
  const moviesGenres = await getAllGenresMovies();

  if (!moviesGenres) notFound();

  return (
    <Flex direction={"column"} gap={"3"}>
      <MoviesGenreList
        title="Trending Now"
        movies={moviesGenres?.trending ?? []}
      />
      <MoviesGenreList
        title="Top Rated"
        movies={moviesGenres?.topRated ?? []}
      />
      <MoviesGenreList
        title="Action Movies"
        movies={moviesGenres?.actionMovies ?? []}
      />
      <MoviesGenreList
        title="Comedy Movies"
        movies={moviesGenres?.comedyMovies ?? []}
      />
      <MoviesGenreList
        title="Romance Movies"
        movies={moviesGenres?.romanceMovies ?? []}
      />
      <MoviesGenreList
        title="Documentaries Movies"
        movies={moviesGenres?.documentaries ?? []}
      />
      <MoviesGenreList
        title="HorrorMovies"
        movies={moviesGenres?.horrorMovies ?? []}
      />
    </Flex>
  );
}
