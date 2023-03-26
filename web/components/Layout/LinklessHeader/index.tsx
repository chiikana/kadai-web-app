import { ChoiceSigninSosial, ChoiceSignupSosial } from "@/components/SignModal"
import { useScrollContext } from "@/hooks/context/ScrollContext"
import { ToggleTheme } from "@/libs/utils/themes"
import { Box, Button, Flex, Stack, Text, useBreakpointValue, useColorMode } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FaMoon, FaSun } from "react-icons/fa"

export const LinklessHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { toggleTextColor, toggleMainBgColor, toggleBorderColor } = ToggleTheme()
  const router = useRouter()
  const { isScrolled } = useScrollContext()
  return (
    <Box pos={"sticky"} top={0} w={"full"} maxH={"60px"} zIndex={100}>
      <title>商品管理アプリ</title>
      <Box>
        <Flex bg={toggleMainBgColor} color={toggleTextColor} py={{ base: 2 }} px={{ base: 4 }}>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} alignItems={"center"}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontSize={useBreakpointValue({
                base: "lg",
                md: "3xl",
              })}
              color={toggleTextColor}
            >
              商品管理アプリ
            </Text>
          </Flex>

          <>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
              alignItems={"center"}
            >
              <Button display={{ base: "none", md: "inline-flex" }} onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </Button>
              <ChoiceSigninSosial />
              <ChoiceSignupSosial />
            </Stack>
          </>
        </Flex>
      </Box>
      {isScrolled ? (
        <Box
          borderBottom={"1px"}
          borderBottomStyle={"solid"}
          boxSizing={"border-box"}
          borderBottomColor={toggleBorderColor}
        ></Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  )
}
