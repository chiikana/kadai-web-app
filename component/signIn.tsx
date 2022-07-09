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
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { SmallCloseIcon } from "@chakra-ui/icons";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { AppContext, ChoiceSosialContext } from "../pages/_app";

import { app } from "../src/utils/firebase/init";
// import { useAuthContext } from "../src/context/AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const ModalSignIn = (): JSX.Element => {
  const { isSign, onSign } = useContext(AppContext);
  type FormSign = {
    Uname: string;
    Email: string;
    Upass: string;
  };

  const {
    register,
    // handleSubmit,
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
    // mode: "onBlur",
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
  const { isChoice, onChoice } = useContext(ChoiceSosialContext);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // const [isChoice, onChoice] = useState(0);
  // const [isGoogle, onGoogle] = useState(false);
  // const [isGuest, onGuest] = useState(false);
  // const [isEmail, onEmail] = useState(false);

  const ChoiceModal = () => {
    return (
      // <Modal
      //   initialFocusRef={initialRef}
      //   finalFocusRef={finalRef}
      //   isOpen={isOpen}
      //   onClose={onClose}
      //   onCloseComplete={() => {
      //     onChoice(0);
      //     console.log(isChoice);
      //   }}
      // >
      <>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Center p={8}>
              <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                {/* Email */}
                <Button
                  w={"full"}
                  colorScheme={"facebook"}
                  leftIcon={<MdEmail />}
                  onClick={() => {
                    onChoice(1);
                  }}
                >
                  <Center>
                    <Text>Sign in with Email</Text>
                  </Center>
                </Button>

                {/* Google */}
                <Button
                  w={"full"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                  onClick={() => {
                    onChoice(1);
                  }}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>

                {/* Guest */}
                <Button
                  w={"full"}
                  variant={"outline"}
                  leftIcon={<FaUserCircle />}
                  onClick={() => {
                    onChoice(2);
                  }}
                >
                  <Center>
                    <Text>Sign in with Guest</Text>
                  </Center>
                </Button>
              </Stack>
            </Center>
          </ModalBody>
        </ModalContent>
      </>
      // {/* </Modal> */}
    );
  };

  const EmailProvider = () => {
    return (
      // <Modal
      //   closeOnOverlayClick={false}
      //   initialFocusRef={initialRef}
      //   finalFocusRef={finalRef}
      //   isOpen={isOpen}
      //   onClose={onClose}
      //   onCloseComplete={() => {
      //     reset({ Uname: "", Email: "", Upass: "" });
      //     onChoice(0);
      //     console.log(isChoice);
      //   }}
      // >
      <>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile Edit</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              onChoice(0);
              reset({ Uname: "", Email: "", Upass: "" });
            }}
          />
          <ModalBody pb={6}>
            <form>
              <FormControl id="userName" isRequired>
                <FormLabel>Email Adress</FormLabel>
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
                  // onChange={handleChangeEmail}
                />
                <ErrorMessage
                  errors={errors}
                  name="Uname"
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
                      message:
                        "半角英数字8文字以上32文字以下のパスワードを入力",
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
            </form>
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
                onClick={() => {
                  onClose;
                  onChoice(0);
                  reset({ Uname: "", Email: "", Upass: "" });
                }}
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
                  onSign(true);
                }}
                disabled={!isValid}
              >
                Submit
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </>
      // {/* </Modal> */}
    );
  };
  const GuestProvider = () => {
    return (
      // <Modal
      //   closeOnOverlayClick={false}
      //   initialFocusRef={initialRef}
      //   finalFocusRef={finalRef}
      //   isOpen={isOpen}
      //   onClose={onClose}
      //   onCloseComplete={() => {
      //     reset({ Uname: "", Email: "", Upass: "" });
      //     onChoice(0);
      //     console.log(isChoice);
      //   }}
      // >
      <>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile Edit</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              onChoice(0);
              reset({ Uname: "", Email: "", Upass: "" });
            }}
          />
          <ModalBody pb={6}>
            <form>
              <FormControl id="userName" isRequired>
                <FormLabel>Email Adress</FormLabel>
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
                  // onChange={handleChangeEmail}
                />
                <ErrorMessage
                  errors={errors}
                  name="Uname"
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
                      message:
                        "半角英数字8文字以上32文字以下のパスワードを入力",
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
            </form>
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
                onClick={() => {
                  onClose;
                  onChoice(0);
                  reset({ Uname: "", Email: "", Upass: "" });
                }}
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
                  onSign(true);
                }}
                disabled={!isValid}
              >
                Submit
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </>
      // </Modal>
    );
  };
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
      <>
        <Modal
          closeOnOverlayClick={false}
          // initialFocusRef={initialRef}
          // finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {
            reset({ Uname: "", Email: "", Upass: "" });
            onChoice(0);
            console.log(isChoice);
          }}
        >
          {/* <ChoiceProvider /> */}
          {isChoice === 0 && <ChoiceModal />}
          {isChoice === 1 && <EmailProvider />}
          {isChoice === 2 && <GuestProvider />}
        </Modal>
      </>
    </>
  );
};
