import {
  Box,
  Heading,
  HStack,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  useToast,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import React, { useContext, useRef, useState } from "react"
import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import { AppContext, ChoiceSosialContext, UserNameContext } from "@/pages/_app"
import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useRouter } from "next/router"
import { useAuthContext } from "@/hooks/context/AuthContext"

// export const EmailProvider = () => {
//   // const { user } = useAuthContext();
//   const auth = getAuth(app)
//   // const isLoggedIn = !!user;
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [Error, setError] = useState("")

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     await signInWithEmailAndPassword(auth, email, password)
//     router.push("/HomePage/")
//   }
//   const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.currentTarget.value)
//   }
//   const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.currentTarget.value)
//   }
//   const handleClose = () => {
//     router.push("/HomePage/")
//   }

//   const { isSign, onSign } = useContext(AppContext)
//   type FormSign = {
//     Uname: string
//     Email: string
//     Upass: string
//   }

//   const {
//     register,
//     reset,
//     formState: { errors, isValid, isSubmitting },
//   } = useForm<FormSign>({
//     mode: "all",
//   })

//   const router = useRouter()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const { choice, setChoice } = useContext(ChoiceSosialContext)
//   const { userName, setUserName } = useContext(UserNameContext)

//   const initialRef = useRef(null)
//   const finalRef = useRef(null)

//   const toggleNavHoverColor = useColorModeValue("teal.50", "teal.900")
//   const navAccentColor = "teal.400"
//   const navAccentHoverColor = "teal.300"
//   return (
//     <Center>
//       <VStack overflowX="auto" overflowY="auto">
//         <form onSubmit={handleSubmit}>
//           <FormControl id="email" isRequired>
//             <FormLabel>Email Adress</FormLabel>
//             <Input
//               placeholder="your-email@example.com"
//               _placeholder={{ color: "gray.500" }}
//               type="email"
//               {...register("Email", {
//                 required: true,
//                 pattern: {
//                   value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
//                   message: "E-mailの書式ではありません。",
//                 },
//               })}
//               onChange={handleChangeEmail}
//             />
//             <ErrorMessage
//               errors={errors}
//               name="Uname"
//               render={({ message }) => <Text color={"red.400"}>{message}</Text>}
//             />
//           </FormControl>
//           <FormControl id="password" isRequired>
//             <FormLabel>Password</FormLabel>
//             <Input
//               placeholder="password"
//               _placeholder={{ color: "gray.500" }}
//               type="password"
//               {...register("Upass", {
//                 required: true,
//                 pattern: {
//                   value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/i,
//                   message: "半角英数字8文字以上32文字以下のパスワードを入力",
//                 },
//               })}
//               onChange={handleChangePassword}
//             />
//             <ErrorMessage
//               errors={errors}
//               name="Upass"
//               render={({ message }) => <Text color={"red.400"}>{message}</Text>}
//             />
//           </FormControl>
//         </form>

//         <Stack spacing={6} direction={["column", "row"]}>
//           <Button
//             bg={"red.400"}
//             color={"white"}
//             w="full"
//             _hover={{
//               bg: "red.500",
//             }}
//             onClick={() => {
//               onClose
//               setChoice(0)
//               reset({ Uname: "", Email: "", Upass: "" })
//               // handleClose;
//               router.push("/HomePage/")
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             type={"submit"}
//             isLoading={isSubmitting}
//             bg={"blue.400"}
//             color={"white"}
//             w="full"
//             _hover={{
//               bg: "blue.500",
//             }}
//             onClick={() => {
//               const auth = getAuth()
//               signInWithEmailAndPassword(auth, email, password)
//                 .then((userCredential) => {
//                   // Signed in
//                   const user = userCredential.user
//                   setUserName(email.split("@")[0])
//                   onSign(true)
//                   reset({ Uname: "", Email: "", Upass: "" })
//                   setChoice(0)
//                   router.push("/homePage/")
//                   // ...
//                 })
//                 .catch((error) => {
//                   const errorCode = error.code
//                   const errorMessage = error.message
//                   console.log(errorCode)
//                   console.log(errorMessage)
//                   setError("アカウントが見つかりません")
//                 })
//               // handleClose;
//             }}
//             disabled={!isValid}
//           >
//             Sign In
//           </Button>
//         </Stack>
//         <Text textColor={"red"}>{Error}</Text>
//       </VStack>
//     </Center>
//   )
// }

// export const GuestProvider = () => {
//   const { user } = useAuthContext()
//   const auth = getAuth(app)

//   // const isLoggedIn = !!user;
//   const router = useRouter()
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const { isSign, onSign } = useContext(AppContext)
//   const { choice, setChoice } = useContext(ChoiceSosialContext)
//   const { userName, setUserName } = useContext(UserNameContext)

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     await signInWithEmailAndPassword(auth, email, password)
//     setChoice(0)
//     router.push("/HomePage/")
//     onSign(true)
//   }
//   const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.currentTarget.value)
//   }
//   const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.currentTarget.value)
//   }
//   const handleClose = async () => {
//     await router.push("/HomePage/")
//   }
//   const setGuest = () => {
//     setEmail(`"test@test.com"`)
//     setPassword(`"test1111"`)
//     setUserName(`"Guest"`)
//   }
//   const submitted = () => {
//     setEmail(`"test@test.com"`)
//     setPassword(`"test1111"`)
//     setUserName(`"Guest"`)
//     signInWithEmailAndPassword(auth, email, password)
//     setChoice(0)
//     onSign(true)
//     // router.push("/HoemPage/");
//   }

//   type FormSign = {
//     Uname: string
//     Email: string
//     Upass: string
//   }

//   const {
//     register,
//     reset,
//     formState: { errors, isValid, isSubmitting },
//   } = useForm<FormSign>({
//     mode: "all",
//   })

//   const initialRef = React.useRef(null)
//   const finalRef = React.useRef(null)

//   const toggleNavHoverColor = useColorModeValue("teal.50", "teal.900")
//   const navAccentColor = "teal.400"
//   const navAccentHoverColor = "teal.300"

//   return (
//     <Center>
//       <VStack>
//         <Text>ゲストログインしますか？</Text>
//         <form onSubmit={handleSubmit}>
//           <FormControl>{}</FormControl>
//         </form>
//         <Stack spacing={6} direction={["column", "row"]}>
//           <Button
//             bg={"red.400"}
//             color={"white"}
//             w="full"
//             _hover={{
//               bg: "red.500",
//             }}
//             onClick={() => {
//               setChoice(0)
//               // handleClose;
//               router.push("/HomePage/")
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             type={"submit"}
//             bg={"blue.400"}
//             color={"white"}
//             w="full"
//             _hover={{
//               bg: "blue.500",
//             }}
//             onClick={() => {
//               // setGuest;
//               // submitted;
//               // setEmail(`"test@test.com"`);
//               // setPassword(`"test1111"`);
//               // setUserName(`Guest`);
//               // signInWithEmailAndPassword(auth, email, password);
//               signInAnonymously(auth)
//                 .then(() => {
//                   // Signed in..
//                   setUserName(`Guest`)
//                   setChoice(0)
//                   onSign(true)
//                   router.push("/HomePage/")
//                   console.log("Sign-in successful.")
//                 })
//                 .catch((error) => {
//                   const errorCode = error.code
//                   const errorMessage = error.message
//                   // ...
//                 })
//             }}
//           >
//             Sign In
//           </Button>
//         </Stack>
//       </VStack>
//     </Center>
//   )
// }

export const EmailSignin = () => {
  const { toggleTextColor, toggleSubBgColor, toggleBorderColor } = ToggleTheme()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Error, setError] = useState("")

  const { isSign, onSign } = useContext(AppContext)
  type FormSign = {
    username: string
    email: string
    password: string
  }

  const {
    register,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormSign>({
    mode: "all",
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { choice, setChoice } = useContext(ChoiceSosialContext)
  const { userName, setUserName } = useContext(UserNameContext)

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const toggleNavHoverColor = useColorModeValue("teal.50", "teal.900")
  const navAccentColor = "teal.400"
  const navAccentHoverColor = "teal.300"
  const { subAccentColor } = ToggleTheme()
  const defaultData = {
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(defaultData)
  const router = useRouter()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleSignIn = async (e: any) => {
    e.preventDefault()
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (error) {
        toast({
          title: "ERROR!!",
          description: "ログインに失敗しました。\n再度お試しください",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: "SUCCESS!!",
          description: "ログインに成功しました！",
          status: "success",
          duration: 1500,
          isClosable: true,
        })
        router.push("/profilePage")
      }
    } catch (error) {
      console.log("Did not run signin protcol")
    }
  }

  return (
    <Center>
      <Box
        bg={toggleSubBgColor}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        minW={"50vw"}
        minH={"65vh"}
        display={"grid"}
        gridTemplateRows={"auto auto-fit auto"}
        gridTemplateColumns={"auto"}
      >
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%" mt="7.5%">
          ログイン
        </Heading>
        <VStack spacing={"8"}>
          <FormControl mt="2%">
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              メールアドレス
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="メールアドレスを入力"
              _placeholder={{ color: "gray.500" }}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                  message: "E-mailの書式ではありません。",
                },
              })}
              focusBorderColor={subAccentColor}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={!formData.email ? "" : formData.email}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
              パスワード
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="8桁以上のパスワードを入力"
                focusBorderColor={subAccentColor}
                _placeholder={{ color: "gray.500" }}
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/i,
                    message: "半角英数字8文字以上32文字以下のパスワードを入力",
                  },
                })}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                value={!formData.password ? "" : formData.password}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {!show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <Text color={"red.400"}>{message}</Text>}
              />
            </InputGroup>
          </FormControl>
          <Box />
        </VStack>
        <Stack spacing={10} m={"0 0 0 auto"}>
          <HStack
            // direction={{ base: "column", sm: "row" }}
            // align={"start"}
            justify={"space-between"}
          >
            {/* <Checkbox>ログインを維持する</Checkbox> */}
            <Link
              onClick={() => {
                router.replace("/resetPassword/")
              }}
            >
              パスワードを忘れた場合
            </Link>
            <Spacer />
            <Button
              w="7rem"
              variant="solid"
              colorScheme="red"
              onClick={(e) => {
                handleSignIn(e)
              }}
            >
              サインイン
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Center>
  )
}

export const GuestSignin = () => {
  const [email, setEmail] = useState("guest@guest.guest")
  const [password, setPassword] = useState("password")
  const [Error, setError] = useState("")

  const { isSign, onSign } = useContext(AppContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { choice, setChoice } = useContext(ChoiceSosialContext)
  const { userName, setUserName } = useContext(UserNameContext)
  const { subAccentColor } = ToggleTheme()
  const defaultData = {
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(defaultData)
  const router = useRouter()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleSignIn = async (e: any) => {
    e.preventDefault()
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (error) {
        toast({
          title: "ERROR!!",
          description: "ログインに失敗しました。\n再度お試しください",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: "SUCCESS!!",
          description: "ログインに成功しました！",
          status: "success",
          duration: 1500,
          isClosable: true,
        })
        router.push("/profilePage")
      }
    } catch (error) {
      console.log("Did not run signin protcol")
    }
  }

  return (
    <Center>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        minW={"30vw"}
        minH={"56vh"}
        display={"grid"}
        gridTemplateRows={"auto auto-fit auto"}
        gridTemplateColumns={"auto"}
      >
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%" mt="7.5%">
          ログイン
        </Heading>
        <VStack>
          <Text>ゲストでログインしますか？</Text>
          <Spacer />
          <HStack
            // direction={{ base: "column", sm: "row" }}
            // align={"start"}
            justify={"space-between"}
          >
            <Button
              w="7rem"
              variant="solid"
              colorScheme="red"
              onClick={(e) => {
                router.push("/")
              }}
            >
              いいえ
            </Button>
            <Spacer />
            <Button
              w="7rem"
              variant="solid"
              colorScheme="red"
              onClick={(e) => {
                handleSignIn(e)
              }}
            >
              はい
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}
