import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";

export const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <VStack>
        <Heading>HOME</Heading>
        <HStack>
          <Box
            onClick={() => {
              router.push("/");
            }}
          >
            1
          </Box>
          <Box>2</Box>
        </HStack>
        <HStack>
          <Box>3</Box>
          <Box>4</Box>
        </HStack>
      </VStack>
      <Footer />
    </>
  );
};
export default HomePage;
