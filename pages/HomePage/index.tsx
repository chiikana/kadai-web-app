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
  Spacer,
  Button,
  InputRightAddon,
  Alert,
  AlertIcon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  id: string;
  name: string;
  stock: string;
  bought: string;
  selling: string;
};

export const HomePage = () => {
  const router = useRouter();
  const [submited, submitState] = useState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    // defaultValues: {
    //   id: "0",
    //   name: "",
    //   stock: "0",
    //   bought: "0",
    //   selling: "0",
    // },
  });
  // フォーム送信ボタンを押された時の処理
  const onsubmit = (data: FormData) => {
    console.log(data);
    reset(); // フォームに入力した値をリセット
  };
  // nameを監視
  // 入力のたびに更新される
  console.log(watch("id"));
  console.log(watch("name"));
  console.log(watch("stock"));
  console.log(watch("bought"));
  console.log(watch("selling"));

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
          {submitState.isSubmitted ? (
            <Alert status="success" mb={4}>
              <AlertIcon />
              送信完了しました。
            </Alert>
          ) : (
            <>
              <VStack spacing={3}>
                <form>
                  <FormControl>
                    <FormLabel>id</FormLabel>
                    <Input
                      textAlign={"right"}
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
                    <FormErrorMessage>{errors.id?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>name</FormLabel>
                    <Input
                      textAlign={"right"}
                      variant="outline"
                      placeholder="商品名を入力"
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>stock</FormLabel>
                    <Input
                      textAlign={"right"}
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
                  </FormControl>
                  <FormControl>
                    <FormLabel>bought</FormLabel>
                    <Input
                      textAlign={"right"}
                      variant="outline"
                      placeholder="仕入れ金額を入力"
                      type="text"
                      {...register("bought", {
                        required: true,
                        pattern: {
                          value: /^[1-9][0-9]*$/,
                          message: "数字を入力してください。",
                        },
                      })}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>selling</FormLabel>
                    <Input
                      textAlign={"right"}
                      variant="outline"
                      placeholder="販売金額を入力"
                      type="text"
                      {...register("selling", {
                        required: "数字を入力",
                        pattern: {
                          value: /^[1-9][0-9]*$/,
                          message: "数字を入力してください。",
                        },
                        onChange: () => {
                          console.log();
                        },
                      })}
                    ></Input>
                  </FormControl>
                  <HStack>
                    <Spacer></Spacer>
                    <Button
                      type="submit"
                      mt={4}
                      mb={12}
                      disabled={!formState.isValid}
                      isLoading={formState.isSubmitting}
                    >
                      追加
                    </Button>
                  </HStack>
                </form>
              </VStack>
            </>
          )}
        </VStack>
      </Box>
      <Footer />
    </>
  );
};
export default HomePage;
