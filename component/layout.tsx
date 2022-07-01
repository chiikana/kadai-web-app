import Footer from "./footer";
import { useColorModeValue, Box } from "@chakra-ui/react";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Box
        as={"main"}
        bg={useColorModeValue("gray.50", "gray.600")}
        minH={"full"}
        minW={"full"}
        display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        {/* <Box
          minH={"50vh"}
          minW={"50vw"}
          pos={"absolute"}
          top={"50vh"}
          left={"50vw"}
          borderLeft={"solid"}
          borderTop={"solid"}
          borderRight={"solid"}
          borderBottom={"solid"}
          
        ></Box>
        <Box
          minH={"50vh"}
          minW={"50vw"}
          pos={"absolute"}
          top={"0vh"}
          left={"0vw"}
          borderLeft={"solid"}
          borderTop={"solid"}
          borderRight={"solid"}
          borderBottom={"solid"}
        ></Box> */}
        {children}
      </Box>
      <Footer />
    </>
  );
}
