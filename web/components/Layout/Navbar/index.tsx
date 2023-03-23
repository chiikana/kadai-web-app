import { ToggleTheme } from "@/libs/utils/themes"
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons"
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
// import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { UserNameContext } from "@/pages/_app"
import { ChoiceSigninSosial, ChoiceSignupSosial } from "@/components/SignModal"
import { useAuthContext } from "@/hooks/context/AuthContext"
import { useProfileFromUserId } from "@/hooks/useProfileFromUserId"
import { Profile } from "@/types/profile"
import { supabase } from "@/libs/utils/supabaseClient"

export const Navbar = () => {
  const userData = useAuthContext()
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  // const toggleTextColor = useColorModeValue("gray.800", "white")
  // const toggleMainBgColor = useColorModeValue("gray.50", "gray.800")
  const { toggleTextColor, toggleMainBgColor, toggleBorderColor } = ToggleTheme()
  const { userName, setUserName } = useContext(UserNameContext)
  const userProfile = useProfileFromUserId(userData.userData!.userId)
  // const username = userProfile!.username

  useEffect(() => {
    console.log(userProfile.username)
    setUserName(userProfile.username)
    console.log("userName=> ", userName)
  }, [userProfile])

  const handleSignout = async () => {
    supabase.auth.signOut()
    router.replace("/")
  }

  return (
    <Box minW={"full"} minH={"60px"}>
      <Flex bg={toggleMainBgColor} color={toggleTextColor} py={{ base: 2 }} px={{ base: 4 }}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} alignItems={"center"}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontSize={useBreakpointValue({
              base: "lg",
              md: "3xl",
            })}
            color={toggleTextColor}
          >
            在庫管理アプリ
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <>
          {/* {isSign ? ( */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            alignItems={"center"}
          >
            <Button display={{ base: "none", md: "inline-flex" }} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Flex
              // alignItems={"center"}
              direction={"row"}
            >
              <Menu>
                <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                  <HStack>
                    <Avatar size={"sm"} src={""} />
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  {/* <MenuItem value={userData?.userId.name}></MenuItem> */}
                  <MenuItem>{userName}</MenuItem>
                  <MenuDivider />
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  {/* <MenuItem>Billing</MenuItem> */}
                  <MenuDivider />
                  <MenuItem
                    onClick={() => {
                      handleSignout()
                    }}
                  >
                    ログアウト
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            {/* </HStack> */}
          </Stack>
          {/* ) : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
              alignItems={"center"}
            >
              <Button display={{ base: "none", md: "inline-flex" }} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <ChoiceSigninSosial />
              <ChoiceSignupSosial />
            </Stack>
          )} */}
        </>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}
export default Navbar

const DesktopNav = () => {
  const router = useRouter()
  // const linkColor = useColorModeValue("gray.800", "gray.200");
  const linkColor = useColorModeValue("gray.800", "white")
  // const linkHoverColor = useColorModeValue("gray.400", "white");
  const linkHoverColor = useColorModeValue("gray.400", "white")
  // const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const popoverContentBgColor = useColorModeValue("gray.50", "gray.800")
  return (
    <Stack direction={"row"} spacing={4}>
      {ROUTE_ITEMS.map((routeItem) => (
        <Box key={routeItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                onClick={() => {
                  router.push(`${routeItem.process ?? ""}`)
                }}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {routeItem.label}
              </Box>
            </PopoverTrigger>

            {routeItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {routeItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, process, subLabel }: routeItem) => {
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleMainBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900")
  const toggleSubNavHoverColor = useColorModeValue("teal.50", "teal.900")
  const subNavTextColor = "green.400"
  const router = useRouter()
  return (
    <Box
      // href={process}
      onClick={() => {
        router.push(`${process}`)
      }}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: toggleSubNavHoverColor }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: subNavTextColor }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={subNavTextColor} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  const [isLogIn, toggleLogIn] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleMainBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900")
  return (
    <Stack
      bg={toggleMainBgColor}
      p={4}
      display={{ md: "none" }}
      borderBottom={"1px"}
      borderBottomStyle={"solid"}
      borderBottomColor={toggleBorderColor}
    >
      {ROUTE_ITEMS.map((routeItem) => (
        <MobilerouteItem key={routeItem.label} {...routeItem} />
      ))}
    </Stack>
  )
}

const MobilerouteItem = ({ label, children, process }: routeItem) => {
  const { isOpen, onToggle } = useDisclosure()
  const router = useRouter()
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleMainBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBoderColor = useColorModeValue("gray.200", "gray.900")

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        onClick={() => {
          router.push(`${process ?? ""}`)
        }}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={toggleTextColor}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={toggleBoderColor}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                py={2}
                key={child.label}
                onClick={() => {
                  router.push(`${child.process}`)
                }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface routeItem {
  label: string
  subLabel?: string
  children?: Array<routeItem>
  process?: string
}

const ROUTE_ITEMS: Array<routeItem> = [
  {
    label: "Home",
    process: "/homePage",
  },
  {
    label: "Table",
    children: [
      {
        label: "DummyData-Table",
        subLabel: "ダミーデータを表示します。",
        process: "/tablePage",
      },
      {
        label: "GuestData-Table",
        subLabel: "HomePageで入力した値を表示します。",
        process: "/editPage",
      },
    ],
    // children: [
    //   {
    //     label: "DummyData-Table",
    //     subLabel: "View Table",
    //     process: "/TablePage/",
    //   },
    //   {
    //     label: "GuestData-Table",
    //     subLabel: "View Table",
    //     process: "/EditPage/",
    //   },
    // ],
  },
]
