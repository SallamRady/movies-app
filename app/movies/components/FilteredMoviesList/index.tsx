"use client";

import { Flex } from "@radix-ui/themes";
import { useContext } from "react";
import { MoviesFiltersCxt } from "../../context";
import MovieCard from "@/components/MovieCard";
import Pagination from "../Pagenation";
import LoadingCard from "@/components/LoadingCard";

export default function FilteredMoviesList() {
  const { filteredMoviesResult, isLoadingFilteredMovies } =
    useContext(MoviesFiltersCxt);

  console.log("filteredMoviesResultfilteredMoviesResult", filteredMoviesResult);

  return (
    <Flex direction={"column"} gap={"6"}>
      <Flex wrap={"wrap"} gap={"4"} align={"center"} justify={"center"}>
        {/* loading case */}
        {isLoadingFilteredMovies && <LoadingCard />}
        {/* normal case */}
        {filteredMoviesResult?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Flex>
      <Pagination
        currentPage={filteredMoviesResult?.page}
        totalPages={filteredMoviesResult?.total_pages ?? 0}
      />
    </Flex>
  );
}
