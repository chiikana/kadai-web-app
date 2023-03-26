import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { ErrorMessage } from "@hookform/error-message"
import { useRouter } from "next/router"
import { MouseEvent, useRef, useState } from "react"
import { useForm } from "react-hook-form"

type FormData = {
  up_number: string
  up_name: string
  up_stock: string
  up_cost: string
  up_price: string
}

export const UpsertModal = ({
  isOpen,
  onClose,
  item,
  item_id,
  number,
  name,
  stock,
  cost,
  price,
  databaseId,
}: any) => {
  const router = useRouter()
  const {
    register,
    watch,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted, isSubmitting, touchedFields, submitCount },
  } = useForm<FormData>({
    mode: "all",
    defaultValues: {
      up_number: number,
      up_name: name,
      up_stock: stock,
      up_cost: cost,
      up_price: price,
    },
  })
  console.log("up_item_id=>", item_id)

  console.log(watch("up_name"))
  console.log(watch("up_stock"))
  console.log(watch("up_cost"))
  console.log(watch("up_price"))
  const toast = useToast()
  const { toggleBorderColor } = ToggleTheme()
  const [items, setItems] = useState<any>()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [currentTime, setCurrentTime] = useState("")

  const fetchCurrentTime = async () => {
    const res = await fetch("/api/currentTime")
    const data = await res.json()
    setCurrentTime(data.currentTime)
  }

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    fetchCurrentTime

    console.log(items)
    const now = new Date()
    const timestamp = now.toISOString()
    const { data, error: insertErr } = await supabase
      .from("items")
      .update({
        number: watch("up_number"),
        name: watch("up_name"),
        stock: watch("up_stock"),
        cost: watch("up_cost"),
        price: watch("up_price"),
        // update_at: currentTime,
      })
      .eq("item_id", item_id)

    if (insertErr) {
      toast({
        title: "エラー",
        description: `${JSON.stringify(insertErr)}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    reset()
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isCentered
        onCloseComplete={() => {
          reset()
          router.reload()
        }}
      >
        <ModalOverlay />
        <ModalContent minW={"40vw"} minH={"56vh"}>
          <ModalHeader>登録</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            w={"100%"}
            h={"100%"}
            // maxWidth={800}
            p={6}
            as="form"
            display={"grid"}
            gridTemplateRows={"auto auto-fit auto"}
            gridTemplateColumns={"auto"}
          >
            <VStack mt={"20px"} spacing={"5px"} w={"100%"}>
              <FormControl w={"100%"}>
                <FormLabel>id</FormLabel>
                <Input
                  borderColor={toggleBorderColor}
                  size={"lg"}
                  textAlign={"left"}
                  variant="outline"
                  placeholder="商品idを入力"
                  type="text"
                  {...register("up_number", {
                    required: true,
                    pattern: {
                      value: /^[1-9][0-9]*$/,
                      message: "数字を入力してください。",
                    },
                  })}
                ></Input>
                <ErrorMessage
                  errors={errors}
                  name="up_number"
                  render={({ message }) => <Text color={"red.400"}>{message}</Text>}
                />
              </FormControl>
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input
                  borderColor={toggleBorderColor}
                  size={"lg"}
                  textAlign={"left"}
                  variant="outline"
                  placeholder="商品名を入力"
                  type="text"
                  {...register("up_name", {
                    required: true,
                  })}
                ></Input>
                <ErrorMessage
                  errors={errors}
                  name="up_name"
                  render={({ message }) => <Text color={"red.400"}>{message}</Text>}
                />
              </FormControl>
              <FormControl>
                <FormLabel>stock</FormLabel>
                <InputGroup size={"lg"}>
                  <Input
                    borderColor={toggleBorderColor}
                    _after={{ content: `"個"` }}
                    textAlign={"left"}
                    variant="outline"
                    placeholder="在庫数を入力"
                    type="text"
                    {...register("up_stock", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                  <InputRightAddon borderColor={toggleBorderColor}>個</InputRightAddon>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="up_stock"
                  // eslint-disable-next-line react/jsx-no-undef
                  render={({ message }) => <Text color={"red.400"}>{message}</Text>}
                />
              </FormControl>
              <FormControl>
                <FormLabel>cost</FormLabel>
                <InputGroup size={"lg"}>
                  <Input
                    borderColor={toggleBorderColor}
                    size={"lg"}
                    textAlign={"left"}
                    variant="outline"
                    placeholder="製作費を入力"
                    type="text"
                    {...register("up_cost", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                  <InputRightAddon borderColor={toggleBorderColor}>円</InputRightAddon>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="up_cost"
                  render={({ message }) => <Text color={"red.400"}>{message}</Text>}
                />
              </FormControl>
              <FormControl>
                <FormLabel>price</FormLabel>
                <InputGroup size={"lg"}>
                  <Input
                    borderColor={toggleBorderColor}
                    size={"lg"}
                    textAlign={"left"}
                    variant="outline"
                    placeholder="販売金額を入力"
                    type="text"
                    {...register("up_price", {
                      required: true,
                      pattern: {
                        value: /^[1-9][0-9]*$/,
                        message: "数字を入力してください。",
                      },
                    })}
                  ></Input>
                  <InputRightAddon borderColor={toggleBorderColor}>円</InputRightAddon>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="up_price"
                  render={({ message }) => <Text color={"red.400"}>{message}</Text>}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"teal"}
              // type="submit"
              disabled={!isValid}
              isLoading={isSubmitting}
              onClick={(e) => {
                toast({
                  title: "送信完了しました。",
                  status: "success",
                  position: "bottom",
                  duration: 5000,
                  isClosable: true,
                })
                // const pushData = {
                //   _id: "guest",
                //   id: watch("id"),
                //   name: watch("name"),
                //   stock: watch("stock"),
                //   bought: watch("cost"),
                //   selling: watch("price"),
                // }
                // json.push(pushData)
                handleSubmit(e)
                onClose()
              }}
            >
              更新
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
