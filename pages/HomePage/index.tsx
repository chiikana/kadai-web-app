import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Spacer,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
import { ErrorMessage } from "@hookform/error-message";
import { motion } from "framer-motion";
import Layout from "../../component/layout";

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
    reset,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitted,
      isSubmitting,
      touchedFields,
      submitCount,
    },
  } = useForm<FormData>({
    mode: "all",
    // reValidateMode: "onChange",
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
  const toast = useToast();
  const { isOpen: isAlert, onOpen, onClose } = useDisclosure();

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
            <Heading>HOME</Heading>

            <VStack spacing={3} w={"80vw"} h={"80vh"}>
              <form>
                <FormControl>
                  <FormLabel>id</FormLabel>
                  <Input
                    textAlign={"left"}
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
                  <Box w={"100%"} h={"100%"}>
                    <p>
                      <ErrorMessage errors={errors} name={"id"}></ErrorMessage>
                    </p>
                  </Box>
                </FormControl>

                <FormControl>
                  <FormLabel>name</FormLabel>
                  <Input
                    textAlign={"left"}
                    variant="outline"
                    placeholder="商品名を入力"
                    type="text"
                    {...register("name", {
                      required: true,
                    })}
                  ></Input>
                  <Box w={"100%"} h={"100%"}>
                    <ErrorMessage errors={errors} name={"name"}></ErrorMessage>
                  </Box>
                </FormControl>
                <FormControl>
                  <FormLabel>stock</FormLabel>
                  <Input
                    textAlign={"left"}
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
                  <Box w={"100%"} h={"100%"}>
                    <ErrorMessage errors={errors} name={"stock"}></ErrorMessage>
                  </Box>
                </FormControl>
                <FormControl>
                  <FormLabel>bought</FormLabel>
                  <Input
                    textAlign={"left"}
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
                  <Box w={"100%"} h={"100%"}>
                    <ErrorMessage
                      errors={errors}
                      name={"bought"}
                    ></ErrorMessage>
                  </Box>
                </FormControl>
                <FormControl>
                  <FormLabel>selling</FormLabel>
                  <Input
                    textAlign={"left"}
                    variant="outline"
                    placeholder="販売金額を入力"
                    type="text"
                    {...register("selling", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                  <Box w={"100%"} h={"100%"}>
                    <ErrorMessage
                      errors={errors}
                      name={"selling"}
                    ></ErrorMessage>
                  </Box>
                </FormControl>
                <HStack>
                  <Spacer></Spacer>
                  <Button
                    // type="submit"
                    mt={4}
                    mb={12}
                    disabled={!isValid}
                    isLoading={isSubmitting}
                    onClick={() => {
                      toast({
                        title: "送信完了しました。",
                        status: "success",
                        position: "top",
                        isClosable: true,
                      });
                    }}
                  >
                    追加
                  </Button>
                </HStack>
              </form>
              <>
                {isAlert ? (
                  // <Alert status="success"

                  // >
                  //   <AlertIcon />
                  //   送信成功
                  //   <CloseButton onClick={onClose} />
                  // </Alert>
                  <motion.div>
                    <Alert status="success">
                      <AlertIcon />
                      送信成功
                      <CloseButton onClick={onClose} />
                    </Alert>
                  </motion.div>
                ) : (
                  <Button onClick={onOpen}></Button>
                )}
              </>
            </VStack>
          </VStack>
        </Box>
      </Layout>
    </>
  );
};
export default HomePage;
