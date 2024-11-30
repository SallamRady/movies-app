import { poster_base_url } from "@/constants/MoviesApi";
import { MovieType } from "@/types/Movie";
import { Badge, Box, Flex, Heading, Strong, Text } from "@radix-ui/themes";

export default function MovieCard(props: PropsType) {
  const { movie } = props;
  const movieName =
    movie?.title?.length > 12
      ? `${movie?.title?.slice(0, 9)}...`
      : movie?.title;

  return (
    <Box className="min-w-[260px] min-h-[330px] rounded-md mx-2 border border-gray-500 transition-transform duration-450 cursor-pointer hover:scale-105">
      <img
        height={"270px"}
        className="object-contain w-full max-h-[270px]"
        src={`${poster_base_url}/${movie?.poster_path}`}
        alt="Description"
      />
      {/* info */}
      <Flex
        direction={"column"}
        flexGrow={"1"}
        justify={"between"}
        gap={"3"}
        px={"2"}
      >
        {/* title and rate */}
        <Heading as="h5" title={movie?.title}>
          {movieName??'movie name'}
        </Heading>
        <Text as="p">
          rating:<Strong>{movie?.vote_average??'-'}/10</Strong>
        </Text>
        {/* genres */}
        <Flex gap="2">
          <Badge color="orange">Romantic</Badge>
          <Badge color="blue">Romantic</Badge>
          <Badge color="green">Romantic</Badge>
        </Flex>
      </Flex>
    </Box>
  );
}

type PropsType = {
  movie: MovieType;
};
