import { Layout } from "@/components/Layout"
import useAuthUser from "@/hooks/useAuthUser"
import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import { Database } from "@/types/database"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Spacer,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { ErrorMessage } from "@hookform/error-message"
import { useRouter } from "next/router"
import { MouseEvent, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

type FormData = {
  number: string
  name: string
  stock: string
  cost: string
  price: string
}

export const FormPage = () => {
  const router = useRouter()
  const {
    register,
    watch,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted, isSubmitting, touchedFields, submitCount },
  } = useForm<FormData>({
    mode: "all",
    // mode: "onBlur",
    // reValidateMode: "onChange",
    // defaultValues: {
    //   id: "0",
    //   name: "",
    //   stock: "0",
    //   cost: "0",
    //   selling: "0",
    // },
  })
  // フォーム送信ボタンを押された時の処理
  const onsubmit = (data: FormData) => {
    console.log(data)
    reset() // フォームに入力した値をリセット
  }
  // console.log(watch("number"))
  console.log(watch("name"))
  console.log(watch("stock"))
  console.log(watch("cost"))
  console.log(watch("price"))
  const toast = useToast()
  const { user, userId } = useAuthUser()
  const { toggleBorderColor } = ToggleTheme()
  const [itemNumber, setItemNumber] = useState<number>()
  const [databaseId, setDatabaseId] = useState<any>("")
  const [databaseName, setDatabaseName] = useState<string>("")
  const [databases, setDatabases] = useState<any>([])
  const [items, setItems] = useState<any>()

  useEffect(() => {
    if (userId) getDatabases(userId)
  }, [userId])
  useEffect(() => {
    console.log("databases=>", databases)
    if (databases && databases.length > 0) {
      setDatabaseId(databases[0].database_id)
      setDatabaseName(databases[0].name)
    }
  }, [databases])
  useEffect(() => {
    console.log("databaseId=>", databaseId)
  }, [databaseId])
  const getDatabases = async (userId: string) => {
    let { data } = await supabase
      .from("databases")
      .select("database_id,name,user_id,created_at")
      .eq("user_id", userId)
    if (data) {
      setDatabases(data)
    }
  }

  useEffect(() => {
    if (databaseId) getItems(databaseId)
  }, [databaseId])
  useEffect(() => {
    console.log("items=>", items)
    items && setItemNumber(items.length)
  }, [items])

  const getItems = async (databaseId: string) => {
    let { data: itemsData } = await supabase.from("items").select("*").eq("database_id", databaseId)
    if (itemsData) {
      setItems(itemsData)
    }
  }
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    console.log(items)

    const { data: res, error: insertErr } = await supabase.from("items").insert([
      {
        database_id: databaseId,
        number: itemNumber,
        name: watch("name"),
        stock: watch("stock"),
        cost: watch("cost"),
        price: watch("price"),
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
    reset()
  }

  return (
    <Layout>
      <Box h={"calc(100% - 120px)"} minW={"100%"}>
        <Heading textAlign={"center"}>登録</Heading>
        <Select
          borderColor={toggleBorderColor}
          textAlign={"center"}
          onChange={(e: any) => {
            setDatabaseId(e.target.value)
            setDatabaseName(e.target.text)
          }}
        >
          {databases && databases.length > 0 ? (
            databases.map((database: Database) => {
              // setDatabaseName(database.name)
              return (
                <option value={database.database_id} key={database.database_id}>
                  {database.name}
                </option>
              )
            })
          ) : (
            <option>表がありません</option>
          )}
        </Select>
        <VStack mt={"20px"} spacing={"5px"} w={"100%"}>
          {databases && databases.length > 0 ? (
            <form>
              {/* <FormControl w={"100%"}>
              <FormLabel>id</FormLabel>
              <Input
                borderColor={toggleBorderColor}
                size={"lg"}
                textAlign={"left"}
                variant="outline"
                placeholder="商品idを入力"
                type="text"
                {...register("number", {
                  required: true,
                  pattern: {
                    value: /^[1-9][0-9]*$/,
                    message: "数字を入力してください。",
                  },
                })}
              ></Input>
              <ErrorMessage
                errors={errors}
                name="number"
                render={({ message }) => <Text color={"red.400"}>{message}</Text>}
              />
            </FormControl> */}
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input
                  borderColor={toggleBorderColor}
                  size={"lg"}
                  textAlign={"left"}
                  variant="outline"
                  placeholder="商品名を入力"
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                ></Input>
                <ErrorMessage
                  errors={errors}
                  name="name"
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
                    {...register("stock", {
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
                  name="stock"
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
                    {...register("cost", {
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
                  name="cost"
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
                    {...register("price", {
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
                  name="price"
                  render={({ message }) => <Text color={"red.400"}>{message}</Text>}
                />
              </FormControl>
              <HStack mt={"5"} mb={12}>
                <Spacer></Spacer>
                <Button
                  colorScheme={"teal"}
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
                    handleSubmit(e)
                  }}
                >
                  追加
                </Button>
              </HStack>
            </form>
          ) : (
            <Text>表がありません。表を作成してください。</Text>
          )}
        </VStack>
      </Box>
    </Layout>
  )
}
export default FormPage
