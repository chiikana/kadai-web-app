import { Heading, Link, useDisclosure, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { EmailProvider, GuestProvider } from "../../component/signUp";
import { ChoiceSosialContext } from "../_app";

import { useRouter } from "next/router";
import Layout from "../../component/layout";

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
