import { Heading, useDisclosure, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { EmailProvider, GuestProvider } from "../../component/signIn";
import { ChoiceSosialContext } from "../_app";

import Layout from "../../component/layout";

export const SignUpPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isChoice, onChoice } = useContext(ChoiceSosialContext);
  return (
    <Layout>
      <>
        <VStack h={"100vh"} w={"100%"}>
          <Heading>SIGN IN</Heading>
          {/* {isChoice === 0 && <ChoiceModal />} */}
          {isChoice === 1 && <EmailProvider />}
          {isChoice === 3 && <GuestProvider />}
        </VStack>
      </>
    </Layout>
  );
};
export default SignUpPage;
