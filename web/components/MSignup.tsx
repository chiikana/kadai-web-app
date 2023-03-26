import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Progress,
  Stack,
  Switch,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

import { supabase } from "@/libs/utils/supabaseClient"

import { ToggleTheme } from "@/libs/utils/themes"
import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"

type formData = {
  email: string
  password: string
  username: string
  date_of_birth: string
}

type Form1 = {
  formData: formData
  setFormData: Dispatch<SetStateAction<formData>>
}

const Form1 = (props: Form1) => {
  const { formData, setFormData } = props
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const { subAccentColor, toggleBorderColor } = ToggleTheme()

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
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        新規登録
      </Heading>
      <FormControl mr="5%">
        <FormLabel htmlFor="last-name" fontWeight={"normal"}>
          ユーザーネーム
        </FormLabel>
        <Input
          borderColor={toggleBorderColor}
          id="username"
          placeholder="ユーザーネーム"
          focusBorderColor={subAccentColor}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          value={!formData.username ? "" : formData.username}
        />
      </FormControl>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="date of birth" fontWeight={"normal"}>
            生年月日
          </FormLabel>
          <Input
            id="date_of_birth"
            type="date"
            max={"9999-12-31"}
            focusBorderColor={subAccentColor}
            onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
            value={!formData.date_of_birth ? "" : formData.date_of_birth}
          />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          メールアドレス
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="メールアドレスを入力"
          focusBorderColor={subAccentColor}
          _placeholder={{ color: "gray.500" }}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
              message: "E-mailの書式ではありません。",
            },
          })}
          onChange={(e) => props.setFormData({ ...props.formData, email: e.target.value })}
          value={!props.formData.email ? "" : props.formData.email}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <Text color={"red.400"}>{message}</Text>}
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
            placeholder="半角英数字をそれぞれ含む8桁以上32桁以下のパスワード"
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
        </InputGroup>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <Text color={"red.400"}>{message}</Text>}
        />
      </FormControl>
    </>
  )
}

type Form2 = {
  Agree: boolean
  handleAgree: Dispatch<SetStateAction<boolean>>
}

const Form2 = (props: Form2) => {
  const { Agree, handleAgree } = props
  const {
    toggleTextColor,

    subAccentColor,
  } = ToggleTheme()
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        利用規約
      </Heading>
      <Textarea isReadOnly resize="none" value={"利用規約"} rows={10}></Textarea>
      <HStack justify="right">
        <Text color={toggleTextColor}>利用規約に同意します。</Text>
        <Switch
          id="email-alerts"
          borderColor={subAccentColor}
          onChange={() => {
            handleAgree(!Agree)
          }}
          isChecked={Agree}
        />
      </HStack>
    </>
  )
}

export const EmailSignup = () => {
  const { toggleSubBgColor } = ToggleTheme()
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(50)

  const defaultData: formData = {
    email: "",
    password: "",
    username: "",
    date_of_birth: "",
  }
  const [formData, setFormData] = useState<formData>(defaultData)
  const [Agree, handleAgree] = useState(false)
  const router = useRouter()

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleSignUp = async (e: any) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
            date_of_birth: formData.date_of_birth,
          },
        },
      })
      if (error) {
        toast({
          title: "ERROR!!",
          description: "アカウント作成に失敗しました。\n再度お試しください",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: "SUCCESS!!",
          description: "アカウントが作成されました！",
          status: "success",
          duration: 1500,
          isClosable: true,
        })
        router.replace("/homePage")
      }
    } catch (error) {
      // alert(error.error_description || error.message)
    }
  }

  const handleSignOut = async (e: any) => {
    e.preventDefault()
    supabase.auth.signOut()
  }

  return (
    <Center>
      <Box
        bg={toggleSubBgColor}
        borderWidth="1px"
        rounded="lg"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        minW={"50vw"}
        minH={"65vh"}
        display={"grid"}
        gridTemplateRows={"auto 1fr auto"}
        gridTemplateColumns={"auto"}
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        <>
          {step === 1 ? (
            <Form1 setFormData={setFormData} formData={formData} />
          ) : (
            <Form2 handleAgree={handleAgree} Agree={Agree} />
          )}
        </>
        <ButtonGroup mt="5%" minW="100%">
          <Stack direction={"column"}>
            <Link
              onClick={() => {
                router.push("/signin")
              }}
              // href={"/SignIn/"}
            >
              すでに登録している人はこちら
            </Link>
            <Flex minW="100%" gap={"7%"}>
              <Flex gap={"5%"}>
                <Button
                  onClick={(e) => {
                    setStep(step - 1)
                    setProgress(progress - 50)
                  }}
                  isDisabled={step === 1}
                  colorScheme="teal"
                  variant="solid"
                  minW="7rem"
                >
                  戻る
                </Button>
                {step === 2 ? (
                  <Button
                    disabled={!Agree}
                    minW="7rem"
                    colorScheme="red"
                    variant="solid"
                    onClick={(e) => {
                      handleSignUp(e)
                    }}
                  >
                    登録
                  </Button>
                ) : (
                  <Button
                    minW="7rem"
                    isDisabled={step === 2}
                    onClick={() => {
                      setStep(step + 1)
                      if (step === 3) {
                        setProgress(100)
                      } else {
                        setProgress(progress + 50)
                      }
                    }}
                    colorScheme="teal"
                    variant="outline"
                  >
                    次へ
                  </Button>
                )}
              </Flex>
            </Flex>
          </Stack>
        </ButtonGroup>
      </Box>
    </Center>
  )
}
