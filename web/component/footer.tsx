import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const toggleTextColor = useColorModeValue("gray.800", "white");
  const toggleBgColor = useColorModeValue("gray.50", "gray.800");
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900");
  const router = useRouter();
  return (
    <>
      {/* <Box as="p">フッター上だよ</Box> */}
      <Box
        bg={toggleBgColor}
        color={toggleTextColor}
        borderTop={1}
        borderStyle={"solid"}
        borderColor={toggleBorderColor}
        top={"100vh"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"/HomePage/"} passHref replace>
              <a>Home</a>
            </Link>
            <Link href={"/TablePage/"} passHref replace>
              <a>Table</a>
            </Link>
            <Link href={"/EditPage/"} passHref replace>
              <a>Edit</a>
            </Link>
            <Link href={"/"} passHref replace>
              <a>Start</a>
            </Link>
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© kanato suzaki. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Twitter"}
                onClick={() => {
                  router.push("/JumpPage/");
                }}
                // href={"/JumpPage/"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                onClick={() => {
                  router.push("/JumpPage/");
                }}
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                onClick={() => {
                  router.push("/JumpPage/");
                }}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
      {/* <Box as="p">フッター下だよ</Box> */}
    </>
  );
};
export default Footer;

const SocialButton = ({
  children,
  label,
  // href,
  onClick,
}: {
  children: ReactNode;
  label: string;
  // href: string;
  onClick: () => void;
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
  );
};
