import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    let tid: NodeJS.Timeout
    const onload = () => {
      tid = setTimeout(() => {
        router.push("/HomePage/")
      }, 2000)
    }
    onload()
    return () => {
      clearTimeout(tid)
    }
  })
  return (
    <>
      <title>在庫管理アプリ</title>
      <Box
        minH={"100vh"}
        minW={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          router.push("/HomePage/")
        }}
      >
        <VStack>
          <Heading fontSize={"20vh"}>在庫管理アプリ</Heading>
          <Text fontSize={"20vh"}>Click to START</Text>
        </VStack>
      </Box>
    </>
  )
}

export default Home
