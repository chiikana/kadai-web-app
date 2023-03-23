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
import React, { useContext, useEffect, useRef, useState } from "react"
import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useRouter } from "next/router"

export const EmailSignin = () => {
  const { toggleTextColor, toggleSubBgColor, toggleBorderColor } = ToggleTheme()
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
  const handleSignin = async (e: any) => {
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
        router.replace("/homePage")
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
                placeholder="半角英数字をそれぞれ含む8桁以上32桁のパスワードを入力"
                focusBorderColor={subAccentColor}
                _placeholder={{ color: "gray.500" }}
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/i,
                    message: "半角英数字をそれぞれ含む8桁以上32桁のパスワードを入力",
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
                handleSignin(e)
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
  // const [Error, setError] = useState("")
  // const { isSign, onSign } = useContext(AppContext)
  // const { choice, setChoice } = useContext(ChoiceSosialContext)
  // const { userName, setUserName } = useContext(UserNameContext)
  const { subAccentColor, toggleSubBgColor } = ToggleTheme()
  const defaultData = {
    email: "guest@guest.guest",
    password: "SP7SpRcJLs3CbNw",
  }
  const [formData, setFormData] = useState(defaultData)
  const router = useRouter()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleSignin = async (e: any) => {
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
        router.replace("/homePage")
      }
    } catch (error) {
      console.log("Did not run signin protcol")
    }
  }

  useEffect(() => {
    // setFormData({ ...formData, email: "guest@guest.guest" })
    // setFormData({ ...formData, password: "SP7SpRcJLs3CbNw" })
    console.log(formData)
  }, [])

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
                router.replace("/")
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
                handleSignin(e)
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
