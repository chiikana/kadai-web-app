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
import Layout from "../../component/layout";

export const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Box
          bg={useColorModeValue("yellow.50", "gray.800")}
          minH={"100vh"}
          minW={"100vw"}
          display={"flex"}
          justifyContent={"center"}
          // alignItems={"center"}
        >
          <VStack>
            <Heading>EDIT</Heading>
            <HStack>
              <Box>
                <Text
                  onClick={() => {
                    router.push("/HomePage/");
                  }}
                  fontSize={"40px"}
                >
                  1
                </Text>
              </Box>
              <Box>
                <Text
                  onClick={() => {
                    router.push("/TablePage/");
                  }}
                  fontSize={"40px"}
                >
                  2
                </Text>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <Text
                  onClick={() => {
                    router.push("/EditPage/");
                  }}
                  fontSize={"40px"}
                >
                  3
                </Text>
              </Box>
              <Box>
                <Text
                  onClick={() => {
                    router.push("/");
                  }}
                  fontSize={"40px"}
                >
                  4
                </Text>
              </Box>
            </HStack>
            <Box pos="absolute" top="0" left="calc(50vw - 13em)">
              Absolute with top and left
            </Box>
            <Box pos="fixed" w="100%" zIndex={2}>
              Fixed with zIndex
            </Box>
          </VStack>
        </Box>
      </Layout>
    </>
  );
};
export default HomePage;
