import { CreateDatabase } from "@/components/CreateDatabase"
import { Layout } from "@/components/Layout"
import useAuthUser from "@/hooks/useAuthUser"
import { ToggleTheme } from "@/libs/utils/themes"
import { Button, Center, SimpleGrid } from "@chakra-ui/react"
import { useRouter } from "next/router"

export const HomePage = () => {
  const router = useRouter()
  const { toggleBorderColor } = ToggleTheme()
  const { user, userId, profileId } = useAuthUser()
  return (
    <Layout>
      <Center h={"calc(100% - 120px)"}>
        <SimpleGrid w={"100%"} columns={2} gap={"40%"}>
          <Button
            w={"20rem"}
            h={"10rem"}
            colorScheme={"teal"}
            border="2px"
            borderColor={toggleBorderColor}
            fontSize={"4xl"}
            onClick={() => {
              router.push(`/table/${userId}`)
            }}
          >
            商品を表示
          </Button>
          <Button
            w={"20rem"}
            h={"10rem"}
            colorScheme={"teal"}
            border="2px"
            borderColor={toggleBorderColor}
            fontSize={"4xl"}
            onClick={() => {
              router.push("/formPage")
            }}
          >
            商品を登録
          </Button>
          <CreateDatabase />
        </SimpleGrid>
      </Center>
    </Layout>
  )
}
export default HomePage
