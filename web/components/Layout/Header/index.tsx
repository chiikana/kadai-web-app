import Navbar from "@/components/Layout/Navbar"
import { useScrollContext } from "@/hooks/context/ScrollContext"
import { ToggleTheme } from "@/libs/utils/themes"
import { Box } from "@chakra-ui/react"

export const Header = () => {
  const { toggleBorderColor } = ToggleTheme()

  const { isScrolled } = useScrollContext()
  return (
    <>
      <Box pos={"sticky"} top={0} left={0} w={"full"} maxH={"60px"} zIndex={100}>
        <title>商品管理アプリ</title>
        <Navbar />
        {isScrolled ? (
          <Box
            borderBottom={"1px"}
            boxSizing={"border-box"}
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
