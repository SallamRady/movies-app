import LoadingCard from "@/components/LoadingCard";
import { Flex } from "@radix-ui/themes";

export default function LoadingPage() {
  return (
    <Flex align={"center"} justify={"center"}>
      <LoadingCard />
    </Flex>
  );
}
