import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { ChoiceSosialContext } from "../pages/_app";

export const ChoiceSignUpSosial = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isChoice, onChoice } = useContext(ChoiceSosialContext);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const toggleNavHoverColor = useColorModeValue("teal.50", "teal.900");
  const navAccentColor = "teal.400";
  const navAccentHoverColor = "teal.300";
  return (
    <>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={navAccentColor}
        _hover={{
          bg: navAccentHoverColor,
        }}
        onClick={onOpen}
      >
        Sign Up
      </Button>
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {
            // onChoice(0);
            console.log(isChoice);
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
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
                      onClose();
                      router.push("/SignUp/");
                    }}
                  >
                    <Center>
                      <Text>Sign in with Email</Text>
                    </Center>
                  </Button>

                  {/* Google */}
                  {/* <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                    onClick={() => {
                      onChoice(2);
                      onClose();
                      router.push("/SignUp/");
                    }}
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button> */}
                </Stack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export const ChoiceSignInSosial = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isChoice, onChoice } = useContext(ChoiceSosialContext);

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
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {
            // onChoice(0);
            console.log(isChoice);
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
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
                      onClose();
                      router.push("/SignIn/");
                    }}
                  >
                    <Center>
                      <Text>Sign in with Email</Text>
                    </Center>
                  </Button>

                  {/* Google */}
                  {/* <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                    onClick={() => {
                      onChoice(2);
                      onClose();
                      router.push("/SignIn/");
                    }}
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button> */}

                  {/* Guest */}
                  <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FaUserCircle />}
                    onClick={() => {
                      onChoice(3);
                      onClose();
                      router.push("/SignIn/");
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
        </Modal>
      </>
    </>
  );
};
