import Footer from "./footer";
import { useColorModeValue, Box } from "@chakra-ui/react";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children }: Props) {
  const toggleBgColor = useColorModeValue("gray.50", "gray.800");
  return (
    <>
      <Header />
      <Box
        as={"main"}
        bg={toggleBgColor}
        minH={"full"}
        minW={"full"}
        display={"flex"}
        justifyContent={"center"}
        zIndex={0}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
