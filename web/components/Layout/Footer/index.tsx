import { ToggleTheme } from "@/libs/utils/themes"
import { Box, Button, chakra, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react"
import { ReactNode } from "react"
import { FaGithub, FaTwitter } from "react-icons/fa"

export const Footer = () => {
  const { toggleTextColor, toggleMainBgColor, toggleBorderColor } = ToggleTheme()
  return (
    <Box
      bg={toggleMainBgColor}
      color={toggleTextColor}
      borderTop={"1px"}
      borderStyle={"solid"}
      boxSizing={"border-box"}
      borderColor={toggleBorderColor}
      maxH={"60px"}
    >
      <Box display={"grid"} gridTemplateColumns={"auto 1fr auto auto"} gridTemplateRows={"100%"}>
        <Text>© kanato suzaki. All rights reserved</Text>
        <Box></Box>
        <Button
          m={"5px"}
          colorScheme={"twitter"}
          onClick={() => {
            window.open("https://twitter.com/chiikana_dev")
          }}
        >
          <FaTwitter />
        </Button>
        <Button
          m={"5px"}
          border={"1px"}
          borderColor={toggleBorderColor}
          variant={"outline"}
          colorScheme={"gray"}
          onClick={() => {
            window.open("https://github.com/chiikana")
          }}
        >
          <FaGithub />
        </Button>
      </Box>
    </Box>
  )
}

const SocialButton = ({
  children,
  label,
  // href,
  onClick,
}: {
  children: ReactNode
  label: string
  // href: string;
  onClick: () => void
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      // href={href}
      onClick={onClick}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}
