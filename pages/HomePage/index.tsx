import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Spacer,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Layout from "../../component/layout";

import json from "../../component/guestData_table.json";

type FormData = {
  id: string;
  name: string;
  stock: string;
  cost: string;
  price: string;
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
    // mode: "onBlur",
    // reValidateMode: "onChange",
    // defaultValues: {
    //   id: "0",
    //   name: "",
    //   stock: "0",
    //   cost: "0",
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
  console.log(watch("cost"));
  console.log(watch("price"));
  const toast = useToast();
  const { isOpen: isAlert, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Layout>
        <VStack h={"100vh"} w={"100%"}>
          <Heading pt={"10"} pb={"10"}>
            HOME
          </Heading>
          <VStack spacing={"5px"} w={"100%"}>
            <form>
              <FormControl w={"100%"}>
                <FormLabel>id</FormLabel>
                <Input
                  size={"lg"}
                  textAlign={"left"}
                  variant="outline"
                  placeholder="商品idを入力"
                  type="text"
                  {...register("id", {
                    required: true,
                    pattern: {
                      value: /^[1-9][0-9]*$/,
                      message: "数字を入力してください。",
                    },
                  })}
                ></Input>
                <ErrorMessage
                  errors={errors}
                  name="id"
                  render={({ message }) => (
                    <Text color={"red.400"}>{message}</Text>
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input
                  size={"lg"}
                  textAlign={"left"}
                  variant="outline"
                  placeholder="商品名を入力"
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                ></Input>
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => (
                    <Text color={"red.400"}>{message}</Text>
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>stock</FormLabel>
                <InputGroup size={"lg"}>
                  <Input
                    _after={{ content: `"個"` }}
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
                  <InputRightAddon>個</InputRightAddon>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="stock"
                  render={({ message }) => (
                    <Text color={"red.400"}>{message}</Text>
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>cost</FormLabel>
                <InputGroup size={"lg"}>
                  <Input
                    size={"lg"}
                    textAlign={"left"}
                    variant="outline"
                    placeholder="製作費を入力"
                    type="text"
                    {...register("cost", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                  <InputRightAddon>円</InputRightAddon>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="cost"
                  render={({ message }) => (
                    <Text color={"red.400"}>{message}</Text>
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>price</FormLabel>
                <InputGroup size={"lg"}>
                  <Input
                    size={"lg"}
                    textAlign={"left"}
                    variant="outline"
                    placeholder="販売金額を入力"
                    type="text"
                    {...register("price", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                  <InputRightAddon>円</InputRightAddon>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="price"
                  render={({ message }) => (
                    <Text color={"red.400"}>{message}</Text>
                  )}
                />
              </FormControl>
              <HStack mt={"5"} mb={12}>
                <Spacer></Spacer>
                <Button
                  // type="submit"
                  disabled={!isValid}
                  isLoading={isSubmitting}
                  onClick={() => {
                    toast({
                      title: "送信完了しました。",
                      status: "success",
                      position: "bottom",
                      duration: 5000,
                      isClosable: true,
                    });
                    const pushData = {
                      _id: "guest",
                      id: watch("id"),
                      name: watch("name"),
                      stock: watch("stock"),
                      bought: watch("cost"),
                      selling: watch("price"),
                    };
                    json.push(pushData);
                    reset();
                  }}
                >
                  追加
                </Button>
              </HStack>
            </form>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
};
export default HomePage;
