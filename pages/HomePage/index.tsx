import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";

export const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Box
        bg={useColorModeValue("yellow.50", "gray.800")}
        minH={"100vh"}
        minW={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Heading>HOME</Heading>
          <HStack>
            <Text
              onClick={() => {
                router.push("/HomePage/");
              }}
              fontSize={"40px"}
            >
              1
            </Text>
            <Text
              onClick={() => {
                router.push("/TablePage/");
              }}
              fontSize={"40px"}
            >
              2
            </Text>
          </HStack>
          <HStack>
            <Text
              onClick={() => {
                router.push("/EditPage/");
              }}
              fontSize={"40px"}
            >
              3
            </Text>
            <Text
              onClick={() => {
                router.push("/");
              }}
              fontSize={"40px"}
            >
              4
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};
export default HomePage;
