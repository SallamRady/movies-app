import { Flex, Heading } from "@radix-ui/themes";
import MovieCard from "../MovieCard";
import { MovieType } from "@/types/Movie";

export default function MoviesGenreList(props: PropsType) {
  // Vars
  const { title, movies } = props;

  return (
    <Flex gap="2" direction={"column"} my={"4"}>
      {/* title */}
      <Heading as="h3" mx={"2"}>
        # {title}
      </Heading>
      {/* list */}
      <Flex
        gap="3"
        className="overflow-x-auto"
        align={"center"}
        height={"420px"}
      >
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Flex>
    </Flex>
  );
}

type PropsType = {
  title: string;
  movies: MovieType[];
};
