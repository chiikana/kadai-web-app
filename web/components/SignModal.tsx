import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import { FaUserCircle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { MdEmail } from "react-icons/md"
import { ChoiceSosialContext } from "@/pages/_app"

export const ChoiceSignupSosial = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { choice, setChoice } = useContext(ChoiceSosialContext)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const toggleNavHoverColor = useColorModeValue("teal.50", "teal.900")
  const navAccentColor = "teal.400"
  const navAccentHoverColor = "teal.300"
  return (
    <>
      <Button
        size={"lg"}
        colorScheme={"teal"}
        display={{ base: "none", md: "inline-flex" }}
        // fontSize={"sm"}
        // fontWeight={600}
        // color={"white"}
        // bg={navAccentColor}
        // _hover={{
        //   bg: navAccentHoverColor,
        // }}
        onClick={onOpen}
      >
        新規登録
      </Button>
      <>
        <Modal
          isCentered
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {
            // setChoice(0);
            console.log(choice)
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>新規登録</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Center p={8}>
                <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                  {/* Email */}
                  <Button
                    w={"full"}
                    colorScheme={"facebook"}
                    leftIcon={<MdEmail />}
                    onClick={() => {
                      setChoice(1)
                      onClose()
                      router.push("/signup/")
                    }}
                  >
                    <Center>
                      <Text>メールアドレスで新規登録</Text>
                    </Center>
                  </Button>

                  {/* Google */}
                  {/* <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                    onClick={() => {
                      setChoice(2);
                      onClose();
                      router.push("/Signup/");
                    }}
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button> */}
                </Stack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}

export const ChoiceSigninSosial = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { choice, setChoice } = useContext(ChoiceSosialContext)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button
        size={"lg"}
        colorScheme={"teal"}
        display={{ base: "none", md: "inline-flex" }}
        // fontSize={"md"}
        // fontWeight={400}
        onClick={onOpen}
      >
        ログイン
      </Button>
      <>
        <Modal
          isCentered
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {
            // setChoice(0);
            console.log(choice)
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ログイン</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Center p={8}>
                <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                  {/* Email */}
                  <Button
                    w={"full"}
                    colorScheme={"facebook"}
                    leftIcon={<MdEmail />}
                    onClick={() => {
                      setChoice(1)
                      onClose()
                      router.push("/signin/")
                    }}
                  >
                    <Center>
                      <Text>メールアドレスでログイン</Text>
                    </Center>
                  </Button>

                  {/* Google */}
                  {/* <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                    onClick={() => {
                      setChoice(2);
                      onClose();
                      router.push("/SignIn/");
                    }}
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button> */}

                  {/* Guest */}
                  <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FaUserCircle />}
                    onClick={() => {
                      setChoice(3)
                      onClose()
                      router.push("/signin/")
                    }}
                  >
                    <Center>
                      <Text>ゲストでログイン</Text>
                    </Center>
                  </Button>
                </Stack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}
