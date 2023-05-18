import { Layout } from "@/components/Layout"
import { Box, Heading, Select, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router"

import { UserTable } from "@/components/UserTable"
import useAuthUser from "@/hooks/useAuthUser"
import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import { Database } from "@/types/database"
import { useEffect, useState } from "react"

export const TableViewPage = () => {
  const router = useRouter()
  const { user, userId } = useAuthUser()
  const { toggleBorderColor } = ToggleTheme()
  const [databaseName, setDatabaseName] = useState<string>("")
  const [databaseId, setDatabaseId] = useState<string>("")
  const [databases, setDatabases] = useState<any>([])

  useEffect(() => {
    console.log(databases)
  }, [databases])

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

  return (
    <>
      <Layout>
        <Box h={"calc(100% - 120px)"} minW={"100%"}>
          <Heading textAlign={"center"}>データベース</Heading>
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
          <Box minW={"100%"}>
            {databases && databases.length > 0 ? (
              <UserTable databaseId={databaseId} />
            ) : (
              <VStack mt={"20px"} spacing={"5px"} w={"100%"}>
                <Text>表がありません。表を作成してください。</Text>
              </VStack>
            )}
          </Box>
        </Box>
      </Layout>
    </>
  )
}
export default TableViewPage
