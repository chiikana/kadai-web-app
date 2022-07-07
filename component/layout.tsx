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
        {children}
      </Box>
      <Footer />
    </>
  );
}
