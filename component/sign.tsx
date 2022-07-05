import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Modal,
  ModalBody,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { AppContext } from "../pages/_app";

export const ModalSignIn = (): JSX.Element => {
  const { isSign, setSign } = useContext(AppContext);
  type FormSign = {
    Uname: string;
    Email: string;
    Upass: string;
  };

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
  } = useForm<FormSign>({
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={400}
        onClick={onOpen}
      >
        Sign In
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => {
          reset({ Uname: "", Email: "", Upass: "" });
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="userName" isRequired>
              <FormLabel>User name</FormLabel>
              <Input
                placeholder="UserName"
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("Uname", {
                  required: true,
                  // pattern: {
                  //   value: /^[1-9][0-9]*$/,
                  //   message: "数字を入力してください。",
                  // },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="Uname"
                render={({ message }) => (
                  <Text color={"red.400"}>{message}</Text>
                )}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("Email", {
                  required: true,
                  pattern: {
                    value:
                      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                    message: "E-mailの書式ではありません。",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="Email"
                render={({ message }) => (
                  <Text color={"red.400"}>{message}</Text>
                )}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                _placeholder={{ color: "gray.500" }}
                type="password"
                {...register("Upass", {
                  required: true,
                  pattern: {
                    value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/i,
                    message: "半角英数字8文字以上32文字以下のパスワードを入力",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="Upass"
                render={({ message }) => (
                  <Text color={"red.400"}>{message}</Text>
                )}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
                // onClick={() => {
                //   reset({ Uname: "", Email: "", Upass: "" });
                // }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type={"submit"}
                isLoading={isSubmitting}
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  // toggleLogIn(true);
                  setSign(true);
                }}
              >
                Submit
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalSignUp = (): JSX.Element => {
  const { isSign, setSign } = useContext(AppContext);
  type FormSign = {
    Uname: string;
    Email: string;
    Upass: string;
  };

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
  } = useForm<FormSign>({
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        // href={"#"}
        _hover={{
          bg: "pink.300",
        }}
        onClick={onOpen}
      >
        Sign Up
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => {
          reset({ Uname: "", Email: "", Upass: "" });
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="userName">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar
                    size="xl"
                    // src="https://bit.ly/sage-adebayo"
                  >
                    <AvatarBadge
                      as={IconButton}
                      size="sm"
                      rounded="full"
                      top="-10px"
                      colorScheme="red"
                      aria-label="remove Image"
                      icon={<SmallCloseIcon />}
                    />
                  </Avatar>
                </Center>
                <Center w="full">
                  <Button w="full">Change Icon</Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="userName" isRequired>
              <FormLabel>User name</FormLabel>
              <Input
                placeholder="UserName"
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("Uname", {
                  required: true,
                  // pattern: {
                  //   value: /^[1-9][0-9]*$/,
                  //   message: "数字を入力してください。",
                  // },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="Uname"
                render={({ message }) => (
                  <Text color={"red.400"}>{message}</Text>
                )}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("Email", {
                  required: true,
                  pattern: {
                    value:
                      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                    message: "E-mailの書式ではありません。",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="Email"
                render={({ message }) => (
                  <Text color={"red.400"}>{message}</Text>
                )}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                _placeholder={{ color: "gray.500" }}
                type="password"
                {...register("Upass", {
                  required: true,
                  pattern: {
                    value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/i,
                    message: "半角英数字8文字以上32文字以下のパスワードを入力",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="Upass"
                render={({ message }) => (
                  <Text color={"red.400"}>{message}</Text>
                )}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
                // onClick={() => {
                //   reset({ Uname: "", Email: "", Upass: "" });
                // }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type={"submit"}
                isLoading={isSubmitting}
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  // toggleLogIn(true);
                  setSign(true);
                }}
              >
                Submit
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
