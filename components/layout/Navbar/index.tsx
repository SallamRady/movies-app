import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Heading, Text } from "@radix-ui/themes";

import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu.Root className="h-24 flex items-center justify-between p-2 shadow-md shadow-gray-100">
      {/* app name */}
      <Heading as="h2">
        <Link href="/" passHref>
          Movies App
        </Link>
      </Heading>
      <Text>
      <Link href="/movies" passHref>
          All Movies
        </Link>
      </Text>
    </NavigationMenu.Root>
  );
}
