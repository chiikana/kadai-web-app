import { Layout } from "@/components/Layout"
import { ChoiceSigninSosial, ChoiceSignupSosial } from "@/components/SignModal"
import { Center, HStack } from "@chakra-ui/react"

const Home = () => {
  return (
    <Layout hasHeader={false}>
      <Center>
        <HStack>
          <ChoiceSigninSosial />
          <ChoiceSignupSosial />
        </HStack>
      </Center>
    </Layout>
  )
}
export default Home
