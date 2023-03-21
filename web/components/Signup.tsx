import {
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
import { ErrorMessage } from "@hookform/error-message"
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AppContext, ChoiceSosialContext, UserNameContext } from "../pages/_app"

import { app } from "../src/libs/utils/firebase/init"
// import { useAuthContext } from "../src/context/AuthContext";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useRouter } from "next/router"

export const EmailProvider = () => {
  // const { user } = useAuthContext();
  const auth = getAuth(app)
  // const isLoggedIn = !!user;
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
    // router.push("/")
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const handleClose = async () => {
    await router.push("/")
  }

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

  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { choice, setChoice } = useContext(ChoiceSosialContext)
  const { userName, setUserName } = useContext(UserNameContext)
  const [Error, setError] = useState("")

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const toggleNavHoverColor = useColorModeValue("teal.50", "teal.900")
  const navAccentColor = "teal.400"
  const navAccentHoverColor = "teal.300"
  return (
    <Center>
      <VStack overflowX="auto" overflowY="auto">
        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email Adress</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                  message: "E-mailの書式ではありません。",
                },
              })}
              onChange={handleChangeEmail}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <Text color={"red.400"}>{message}</Text>}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: "gray.500" }}
              type="password"
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/i,
                  message: "半角英数字8文字以上32文字以下のパスワードを入力",
                },
              })}
              onChange={handleChangePassword}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <Text color={"red.400"}>{message}</Text>}
            />
          </FormControl>
        </form>

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
            onClick={() => {
              onClose
              setChoice(0)
              reset({ username: "", email: "", password: "" })
              // handleClose;
              router.push("/")
            }}
          >
            Cancel
          </Button>
          <Button
            type={"submit"}
            isLoading={isSubmitting}
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => {
              const auth = getAuth()
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user
                  setUserName(email.split("@")[0])
                  onSign(true)
                  setChoice(0)
                  reset({ username: "", email: "", password: "" })
                  handleClose
                  router.push("/HomePage/")
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code
                  const errorMessage = error.message
                  console.log(errorCode)
                  console.log(errorMessage)
                  setError(errorMessage)
                  // ..
                })
            }}
            disabled={!isValid}
          >
            登録
          </Button>
        </Stack>
        <Text>{Error}</Text>
      </VStack>
    </Center>
  )
}
