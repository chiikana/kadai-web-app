import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  VStack,
  Avatar,
  Center,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ChoiceSignUpSosial, ChoiceSignInSosial } from "./signModal";
import { FormProvider } from "react-hook-form";
import { AppContext, UserNameContext } from "../pages/_app";
import {
  lightBorderColor,
  lightBgColor,
  lightTextColor,
  darkBorderColor,
  darkBgColor,
  darkTextColor,
} from "./color";
import { useAuthContext } from "../src/hooks/context/AuthContext";

export const Navbar = () => {
  const { userName, setUserName } = useContext(UserNameContext);
  const { isSign, onSign } = useContext(AppContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const toggleTextColor = useColorModeValue("gray.800", "white");
  const toggleBgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Box>
      <Flex
        // bg={useColorModeValue("gray.50", "gray.800")}
        bg={toggleBgColor}
        color={toggleTextColor}
        // minH={"100vh"}
        minW={"full"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        // align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontSize={useBreakpointValue({
              base: "xl",
              md: "3xl",
            })}
            color={toggleTextColor}
          >
            管理ソフト
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <>
          {isSign ? (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
              alignItems={"center"}
            >
              <Button
                display={{ base: "none", md: "inline-flex" }}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Flex
                // alignItems={"center"}
                direction={"row"}
              >
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar size={"sm"} src={""} />
                      <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>{userName}</MenuItem>
                    <MenuDivider />
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Billing</MenuItem>
                    <MenuDivider />
                    <MenuItem
                      onClick={() => {
                        onSign(false);
                      }}
                    >
                      Sign out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              {/* </HStack> */}
            </Stack>
          ) : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
              alignItems={"center"}
            >
              <Button
                display={{ base: "none", md: "inline-flex" }}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <ChoiceSignInSosial></ChoiceSignInSosial>
              <ChoiceSignUpSosial></ChoiceSignUpSosial>
            </Stack>
          )}
        </>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
export default Navbar;

const DesktopNav = () => {
  const router = useRouter();
  // const linkColor = useColorModeValue("gray.800", "gray.200");
  const linkColor = useColorModeValue("gray.800", "white");
  // const linkHoverColor = useColorModeValue("gray.400", "white");
  const linkHoverColor = useColorModeValue("gray.400", "white");
  // const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const popoverContentBgColor = useColorModeValue("gray.50", "gray.800");
  return (
    <Stack direction={"row"} spacing={4}>
      {ROUTE_ITEMS.map((routeItem) => (
        <Box key={routeItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                onClick={() => {
                  router.push(`${routeItem.process ?? ""}`);
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
  );
};

const DesktopSubNav = ({ label, process, subLabel }: routeItem) => {
  const toggleTextColor = useColorModeValue("gray.800", "white");
  const toggleBgColor = useColorModeValue("gray.50", "gray.800");
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900");
  const toggleSubNavHoverColor = useColorModeValue("teal.50", "teal.900");
  const subNavTextColor = "green.400";
  const router = useRouter();
  return (
    <Box
      // href={process}
      onClick={() => {
        router.push(`${process}`);
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
  );
};

const MobileNav = () => {
  const [isLogIn, toggleLogIn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const toggleTextColor = useColorModeValue("gray.800", "white");
  const toggleBgColor = useColorModeValue("gray.50", "gray.800");
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900");
  return (
    <Stack
      bg={toggleBgColor}
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
  );
};

const MobilerouteItem = ({ label, children, process }: routeItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const toggleTextColor = useColorModeValue("gray.800", "white");
  const toggleBgColor = useColorModeValue("gray.50", "gray.800");
  const toggleBoderColor = useColorModeValue("gray.200", "gray.900");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        onClick={() => {
          router.push(`${process ?? ""}`);
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
                  router.push(`${child.process}`);
                }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface routeItem {
  label: string;
  subLabel?: string;
  children?: Array<routeItem>;
  process?: string;
}

const ROUTE_ITEMS: Array<routeItem> = [
  {
    label: "Home",
    process: "/HomePage/",
  },
  {
    label: "Table",
    children: [
      {
        label: "Table",
        subLabel: "View Table",
        process: "/TablePage/",
      },
      {
        label: "Edit",
        subLabel: "Edit Table",
        process: "/EditPage/",
      },
    ],
  },
];
