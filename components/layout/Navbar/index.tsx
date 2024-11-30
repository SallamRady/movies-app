import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Heading } from "@radix-ui/themes";

export default function Navbar() {
  return (
    <NavigationMenu.Root className="h-24 flex items-center justify-start p-2 shadow-md shadow-gray-100">
      {/* app name */}
      <Heading as="h2">Movies App</Heading>
    </NavigationMenu.Root>
  );
}
