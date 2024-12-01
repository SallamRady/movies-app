"use client";
// types
import type { ReactNode } from "react";

// Hooks
import { createContext, useState } from "react";
import useCompaniesData, {
  FilteredMoviesResultType,
} from "../hooks/useFilteredMoviesData";

// import packages
export const MoviesFiltersCxt = createContext<MoviesFiltersCxtType>({
  handleChangePage: (page: number) => {},
  filteredMoviesResult: undefined,
  handleSearch: (name, gerne) => {},
});

export const MoviesFiltersCxtProvider = (props: PropsType) => {
  // ** declare and define component state and variables
  const { children } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const { data: filteredMoviesResult } = useCompaniesData(
    movieName,
    movieGenre,
    currentPage
  );
  // ** handle side effects

  // ** declare and define component helper methods
  function handleSearch(name: string, gerne: string) {
    setMovieName(name);
    setMovieGenre(gerne);
  }

  function handleChangePage(page: number) {
    setCurrentPage(page);
  }

  // ** return component ui
  return (
    <MoviesFiltersCxt.Provider
      value={{ handleSearch, handleChangePage, filteredMoviesResult }}
    >
      {children}
    </MoviesFiltersCxt.Provider>
  );
};

type PropsType = {
  children: ReactNode;
};

type MoviesFiltersCxtType = {
  handleChangePage(page: number): void;
  handleSearch(name: string, gerne: string): void;
  filteredMoviesResult: FilteredMoviesResultType | undefined;
};
