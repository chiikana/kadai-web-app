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
import React, { useContext, useState } from "react";
import { AppContext, ChoiceSosialContext } from "../_app";
import { GuestProvider, EmailProvider } from "../../component/signUp";

import Layout from "../../component/layout";

export const SignUpPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isChoice, onChoice } = useContext(ChoiceSosialContext);
  return (
    <Layout>
      <>
        <>
          {/* {isChoice === 0 && <ChoiceModal />} */}
          {isChoice === 1 && <EmailProvider />}
          {isChoice === 2 && <GuestProvider />}
        </>
      </>
    </Layout>
  );
};
export default SignUpPage;
