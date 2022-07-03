import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";

export const Header = () => {
  return (
    <>
      <Box pos={"sticky"} top={0} left={0} w={"full"} h={"60px"} zIndex={100}>
        <title>あぷりけーしょん</title>
        {/* <Box as="p">へっだー上だよ</Box> */}
        <Navbar></Navbar>
        {/* <Box as="p">へっだー下だよ</Box> */}
      </Box>
    </>
  );
};
export default Header;
