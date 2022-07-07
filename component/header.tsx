import { Box, useColorModeValue, Text, Flex } from "@chakra-ui/react";
import Navbar from "./navbar";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../pages/_app";

export const Header = () => {
  const { isScrolled, setScrolled } = useContext(ScrollContext);
  const toggleVisibility = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });
  return (
    <>
      <Box pos={"sticky"} top={0} left={0} w={"full"} h={"60px"} zIndex={100}>
        <title>あぷりけーしょん</title>
        {/* <Text>へっだー上だよ</Text> */}
        <Navbar></Navbar>
        {/* <Text>へっだー下だよ</Text> */}
        {isScrolled ? (
          <Box
            borderBottom={"1px"}
            borderBottomStyle={"solid"}
            borderBottomColor={"gray.500"}
          ></Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    </>
  );
};
export default Header;
