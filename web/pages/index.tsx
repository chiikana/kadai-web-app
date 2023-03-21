import { Layout } from "@/components/Layout"
import { ChoiceSigninSosial, ChoiceSignupSosial } from "@/components/SignModal"
import { Box, Button, Center, HStack, SimpleGrid } from "@chakra-ui/react"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()

  return (
    <Layout hasHeader={false}>
      <Center>
        <HStack>
          {/* <Button
            size={"lg"}
            colorScheme={"teal"}
            onClick={() => {
              router.push("/signin/")
            }}
          >
            ログイン
          </Button> */}
          {/* <Button
            size={"lg"}
            colorScheme={"teal"}
            onClick={() => {
              router.push("/signup/")
            }}
            >
            新規登録
          </Button> */}
          <ChoiceSigninSosial />
          <ChoiceSignupSosial />
        </HStack>
      </Center>
    </Layout>
  )
}
export default Home
