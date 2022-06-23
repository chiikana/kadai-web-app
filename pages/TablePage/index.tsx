import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";

export const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <VStack>
        <Heading>TABLE</Heading>
        <HStack>
          <Text
            onClick={() => {
              router.push("/");
            }}
            fontSize={"40px"}
          >
            1
          </Text>
          <Text
            onClick={() => {
              router.push("/TablePage");
            }}
            fontSize={"40px"}
          >
            2
          </Text>
        </HStack>
        <HStack>
          <Text
            onClick={() => {
              router.push("/EditPage");
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
      <Footer />
    </>
  );
};
export default HomePage;
