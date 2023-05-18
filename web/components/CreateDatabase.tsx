import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { ErrorMessage } from "@hookform/error-message"
import { useRouter } from "next/router"
import { MouseEvent, useRef } from "react"
import { useForm } from "react-hook-form"
import useAuthUser from "@/hooks/useAuthUser"

export const CreateDatabase = () => {
  const router = useRouter()
  const { userId } = useAuthUser()
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { toggleBorderColor, subAccentColor } = ToggleTheme()

  const handleCreate = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { data: res, error: insertErr } = await supabase.from("databases").insert([
      {
        name: watch("name"),
        user_id: userId,
      },
    ])

    if (insertErr) {
      toast({
        title: "エラー",
        description: `${JSON.stringify(insertErr)}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    onClose()
  }

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  type Form = {
    name: string
  }
  const {
    register,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Form>({
    mode: "all",
  })
  return (
    <>
      <Button
        w={"20rem"}
        h={"10rem"}
        colorScheme={"teal"}
        border="2px"
        borderColor={toggleBorderColor}
        fontSize={"4xl"}
        onClick={onOpen}
      >
        表を作成
      </Button>
      <>
        <Modal
          isCentered
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {}}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>登録</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Center p={8}>
                <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                  <FormControl>
                    <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
                      表の名前
                    </FormLabel>
                    <InputGroup size="md">
                      <Input
                        borderColor={toggleBorderColor}
                        pr="4.5rem"
                        placeholder=""
                        focusBorderColor={subAccentColor}
                        _placeholder={{ color: "gray.500" }}
                        {...register("name", {
                          required: true,
                          pattern: {
                            value: /^[^\\\/\|\(\)\[\]\{\}\^\$\.\*\+\?]+/,
                            message: "最初の文字に特殊文字を使用できません",
                          },
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => <Text color={"red.400"}>{message}</Text>}
                      />
                    </InputGroup>
                  </FormControl>
                </Stack>
              </Center>
            </ModalBody>
            <ModalFooter>
              <Stack direction={"row"} display={"flex"}>
                <Button
                  onClick={() => {
                    onClose()
                    reset()
                  }}
                  colorScheme="teal"
                  variant="solid"
                  minW="7rem"
                >
                  閉じる
                </Button>
                <Button
                  minW="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={(e) => {
                    handleCreate(e)
                  }}
                >
                  登録
                </Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}
