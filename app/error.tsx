'use client'
import { Flex, Strong, Text } from "@radix-ui/themes";

export default function ErrorPage() {
  return (
    <Flex align={"center"} justify={"center"}>
      <Text>
        <Strong>Unexpected Error | :(</Strong>
      </Text>
    </Flex>
  );
}
