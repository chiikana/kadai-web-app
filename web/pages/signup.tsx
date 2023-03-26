import { EmailSignup } from "@/components/MSignup"
import { Center } from "@chakra-ui/react"
import { useContext } from "react"
import { ChoiceSosialContext } from "./_app"

import { Layout } from "@/components/Layout"
import { useRouter } from "next/router"

export const SignUpPage = (): JSX.Element => {
  const router = useRouter()
  const { choice, setChoice } = useContext(ChoiceSosialContext)
  return (
    <Layout hasHeader={false}>
      <Center>
        {choice === 1 && <EmailSignup />}
        {/* {choice === 3 && <GuestSignup />} */}
      </Center>
    </Layout>
  )
}
export default SignUpPage
