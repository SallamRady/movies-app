"use client";
import { MovieGenreType } from "@/types/MovieGenre";
import { Button, Flex, Select, TextField } from "@radix-ui/themes";
import { useContext, useState } from "react";
import { MoviesFiltersCxt } from "../../context";

export default function MoviesFilters(props: PropsType) {
  const { genres } = props;
  const [search, setSearch] = useState({ name: "", genre: "" });
  const { handleSearch } = useContext(MoviesFiltersCxt);

  // Methods
  const handleClick = () => {
    handleSearch(search.name, search.genre);
  };

  return (
    <Flex align={"center"} justify={"center"} my={"4"}>
      <Flex align={"center"} gap={"3"} width={"400px"}>
        {/* name */}
        <TextField.Root
          placeholder="Movie Name..."
          onChange={(e) =>
            setSearch((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {/* Genre Select Filter */}
        <Select.Root
          onValueChange={(val) =>
            setSearch((prev) => ({ ...prev, genre: val }))
          }
        >
          <Select.Trigger placeholder="Movies Genre" />
          <Select.Content>
            {genres?.map((item) => (
              <Select.Item key={item.id} value={item.id + ""}>
                {item.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        {/* search */}
        <Button variant="soft" onClick={handleClick}>
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

type PropsType = {
  genres: MovieGenreType[];
};
