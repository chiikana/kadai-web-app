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
  FormHelperText,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
import { useForm } from "react-hook-form";

type FormData = {
  id: string;
  name: string;
  stock: string;
  bought: string;
  selling: string;
};

export const HomePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
  });
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
                <InputGroup>
                  <InputLeftAddon>id</InputLeftAddon>
                  <Input
                    variant="outline"
                    placeholder="idを入力"
                    type="text"
                    {...register("id", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                </InputGroup>
              </HStack>
            </FormControl>
            <FormControl>
              <HStack border={"1px solid #ddd"} borderRadius={"md"} w={""}>
                <FormLabel margin={"0 auto"} ps={"4"} pe={"2"}>
                  name
                </FormLabel>
                <Input
                  size={"sm"}
                  variant="outline"
                  placeholder="名前を入力"
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                ></Input>
                {/* <FormHelperText pe={"4"}>販売金額を入力</FormHelperText> */}
              </HStack>
            </FormControl>
            <FormControl>
              <HStack>
                <InputGroup>
                  <InputLeftAddon>stock</InputLeftAddon>
                  <Input
                    variant="outline"
                    placeholder="在庫数を入力"
                    type="text"
                    {...register("stock", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                </InputGroup>
              </HStack>
            </FormControl>
            <FormControl>
              <HStack>
                <InputGroup>
                  <InputLeftAddon>bought</InputLeftAddon>
                  <Input variant="outline" placeholder="仕入金額を入力"></Input>
                </InputGroup>
              </HStack>
            </FormControl>
            <FormControl variant="outline">
              {/* <HStack>
                <InputGroup>
                  <InputLeftAddon>selling</InputLeftAddon>
                  <Input variant="outline" placeholder="販売金額を入力"></Input>
                </InputGroup>
              </HStack> */}
              <HStack border={"1px solid #ddd"} borderRadius={"md"} w={""}>
                <FormLabel margin={"0 auto"} ps={"4"} pe={"2"}>
                  selling
                </FormLabel>
                <NumberInput
                  height={"100%"}
                  size={"sm"}
                  step={1}
                  precision={0}
                  defaultValue={0}
                  min={0}
                  clampValueOnBlur={false}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormHelperText pe={"4"}>販売金額を入力</FormHelperText>
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
