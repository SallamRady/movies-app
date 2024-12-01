import { Flex } from "@radix-ui/themes";
import './index.css'

export default function LoadingCard() {
  return (
    <Flex align={"center"} justify={"center"} height={"400px"}>
      <div className="loader"></div>
    </Flex>
  );
}
