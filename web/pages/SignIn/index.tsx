import { Center, Heading, useDisclosure, VStack } from "@chakra-ui/react"
import { useContext } from "react"
import { EmailSignin, GuestSignin } from "@/components/Signin"
import { ChoiceSosialContext } from "../_app"

import { Layout } from "@/components/Layout"

export const SigninPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { choice, setChoice } = useContext(ChoiceSosialContext)
  return (
    <Layout hasHeader={true}>
      <Center>
        {/* <VStack h={"100vh"} w={"100%"}> */}
        {/* <Heading>ログイン</Heading> */}
        {/* {choice === 0 && <ChoiceModal />} */}
        {choice === 1 && <EmailSignin />}
        {choice === 3 && <GuestSignin />}
      </Center>
    </Layout>
  )
}
export default SigninPage
