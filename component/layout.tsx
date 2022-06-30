import Navbar from "./navbar";
import Footer from "./footer";
import { useColorModeValue, Box } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Box
        as={"main"}
        bg={useColorModeValue("yellow.50", "gray.800")}
        minH={"100vh"}
        minW={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        <Box
          minH={"100vh"}
          minW={"100vw"}
          pos={"absolute"}
          top={"50vh"}
          left={"50vw"}
          borderLeft={"solid"}
          borderTop={"solid"}
          borderRight={"solid"}
          borderBottom={"solid"}
        ></Box>
        <Box
          minH={"100vh"}
          minW={"100vw"}
          pos={"absolute"}
          top={"0vh"}
          left={"0vw"}
          borderLeft={"solid"}
          borderTop={"solid"}
          borderRight={"solid"}
          borderBottom={"solid"}
        ></Box>
        {children}
      </Box>
      <Footer />
    </>
  );
}
