import { Layout } from "@/components/Layout"
import useAuthUser from "@/hooks/useAuthUser"
import { ToggleTheme } from "@/libs/utils/themes"
import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react"
import { useRouter } from "next/router"

export const HomePage = () => {
  const router = useRouter()
  const { toggleBorderColor } = ToggleTheme()
  const user = useAuthUser()
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
              router.push("/createTablePage")
            }}
          >
            表を作成
          </Button>
          <Button
            w={"20rem"}
            h={"10rem"}
            colorScheme={"teal"}
            border="2px"
            borderColor={toggleBorderColor}
            fontSize={"4xl"}
            onClick={() => {
              router.push(`/table/${user.userId}`)
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
              router.push("/inputPage")
            }}
          >
            商品を登録
          </Button>
          {/* <Box></Box>
        <Box></Box> */}
        </SimpleGrid>
      </Center>
    </Layout>
  )
}
export default HomePage
