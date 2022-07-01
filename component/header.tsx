import { Box } from "@chakra-ui/react";
import Navbar2 from "./navbar2";

export const Header = () => {
  return (
    <>
      <Box pos={"sticky"} top={0} left={0} w={"full"} h={"60px"} zIndex={100}>
        <title>あぷりけーしょん</title>
        {/* <Box as="p">へっだー上だよ</Box> */}
        <Navbar2></Navbar2>
        {/* <Box as="p">へっだー下だよ</Box> */}
      </Box>
    </>
  );
};
export default Header;
