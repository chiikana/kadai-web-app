import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  VStack,
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
  Link,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext, ChoiceSosialContext } from "../_app";
import { GuestProvider, EmailProvider } from "../../component/signUp";

import Layout from "../../component/layout";
import { useRouter } from "next/router";

export const SignUpPage = (): JSX.Element => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isChoice, onChoice } = useContext(ChoiceSosialContext);
  return (
    <Layout>
      <>
        <VStack h={"100vh"} w={"100%"}>
          <Heading>SIGN UP</Heading>
          {/* {isChoice === 0 && <ChoiceModal />} */}
          {isChoice === 1 && <EmailProvider />}
          {isChoice === 3 && <GuestProvider />}
          <Link
            onClick={() => {
              router.replace("/SignIn");
            }}
            // href={"/SignIn/"}
          >
            <a>すでに登録している人はこちら</a>
          </Link>
        </VStack>
      </>
    </Layout>
  );
};
export default SignUpPage;
