import { EmailSignin, GuestSignin } from "@/components/Signin"
import { Center } from "@chakra-ui/react"
import { useContext } from "react"
import { ChoiceSosialContext } from "./_app"

import { Layout } from "@/components/Layout"

export const SigninPage = (): JSX.Element => {
  const { choice, setChoice } = useContext(ChoiceSosialContext)
  return (
    <Layout hasHeader={false}>
      <Center>
        {choice === 1 && <EmailSignin />}
        {choice === 3 && <GuestSignin />}
      </Center>
    </Layout>
  )
}
export default SigninPage
