import { Center, Heading, Link, useDisclosure, VStack } from "@chakra-ui/react"
import { useContext } from "react"
import { EmailSignup } from "@/components/MSignup"
import { ChoiceSosialContext } from "../_app"

import { useRouter } from "next/router"
import { Layout } from "@/components/Layout"

export const SignUpPage = (): JSX.Element => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { choice, setChoice } = useContext(ChoiceSosialContext)
  return (
    <Layout hasHeader={false}>
      <Center>
        {/* <VStack h={"100vh"} w={"100%"}> */}
        {/* <Heading>SIGN UP</Heading> */}
        {/* {choice === 0 && <ChoiceModal />} */}
        {choice === 1 && <EmailSignup />}
        {/* {choice === 3 && <GuestSignup />} */}
        {/* </VStack> */}
      </Center>
    </Layout>
  )
}
export default SignUpPage
