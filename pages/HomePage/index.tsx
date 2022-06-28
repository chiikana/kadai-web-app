import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  NumberInput,
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
        minW={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        <VStack>
          <Heading>HOME</Heading>
          <VStack spacing={3}>
            <FormControl>
              <HStack>
                <FormLabel fontSize={"lg"}>id:</FormLabel>
                <NumberInput placeholder="idを入力" size="lg"></NumberInput>
              </HStack>
            </FormControl>
            <FormControl>
              <HStack>
                <FormLabel fontSize={"lg"}>name:</FormLabel>
                <Input placeholder="名前を入力" size="lg"></Input>
              </HStack>
            </FormControl>
            <FormControl>
              <HStack>
                <FormLabel fontSize={"lg"}>stock:</FormLabel>
                <NumberInput placeholder="在庫数を入力" size="lg"></NumberInput>
              </HStack>
            </FormControl>
            <FormControl>
              <HStack>
                <FormLabel fontSize={"lg"}>bought:</FormLabel>
                <NumberInput defaultValue={"仕入金額を入力"}></NumberInput>
              </HStack>
            </FormControl>
            <FormControl>
              <HStack>
                <InputGroup>
                  <InputLeftAddon>selling</InputLeftAddon>
                  <Input placeholder="販売金額を入力"></Input>
                </InputGroup>
              </HStack>
            </FormControl>
          </VStack>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};
export default HomePage;
