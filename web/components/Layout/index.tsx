import { ToggleTheme } from "@/libs/utils/themes"
import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LinklessHeader } from "./LinklessHeader"

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
  hasHeader?: boolean
}

export const Layout = (props: Props) => {
  const { children, hasHeader = true } = props
  const { toggleMainBgColor } = ToggleTheme()
  return (
    <Box
      display={"grid"}
      gridTemplateRows={"auto 1fr auto"}
      gridTemplateColumns={"100%"}
      minH={"100vh"}
      bg={toggleMainBgColor}
    >
      {hasHeader ? <Header /> : <LinklessHeader />}
      <Box
        as={"main"}
        bg={toggleMainBgColor}
        h={"calc(100vh - 60px - 60px)"}
        minW={"full"}
        display={"flex"}
        justifyContent={"center"}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
