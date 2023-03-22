import { Box, useColorModeValue } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
// import { ScrollContext } from "@/pages/_app"
import Navbar from "@/components/Layout/Navbar"
import { ToggleTheme } from "@/libs/utils/themes"
import { useScrollContext } from "@/hooks/context/ScrollContext"

export const Header = () => {
  const { toggleTextColor, toggleMainBgColor, toggleBorderColor } = ToggleTheme()
  // const toggleBorderColor = useColorModeValue("gray.200", "gray.500")

  // const { isScrolled, setScrolled } = useContext(ScrollContext)
  // const toggleVisibility = () => {
  //   window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility)
  //   return () => window.removeEventListener("scroll", toggleVisibility)
  // })
  const { isScrolled } = useScrollContext()
  return (
    <>
      <Box pos={"sticky"} top={0} left={0} w={"full"} h={"60px"} zIndex={100}>
        <title>在庫管理アプリ</title>
        <Navbar />
        {isScrolled ? (
          <Box
            borderBottom={"1px"}
            borderBottomStyle={"solid"}
            borderBottomColor={toggleBorderColor}
          ></Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    </>
  )
}
export default Header
