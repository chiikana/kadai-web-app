import { Box } from "@chakra-ui/react";
import Navbar from "./navbar2";

export const Header = () => {
  return (
    <>
      <Box>
        <title>あぷりけーしょん</title>
        <Box as="p">へっだー上だよ</Box>
        <Navbar></Navbar>
        <Box as="p">へっだー下だよ</Box>
      </Box>
    </>
  );
};
export default Header;
