import { Layout } from "@/components/Layout"
import { Box, Heading, Select } from "@chakra-ui/react"
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
  const [databaseId, setDatabaseId] = useState<any>()
  const [databases, setDatabases] = useState<any>()

  useEffect(() => {
    if (userId) getDatabases(userId)
  }, [userId])
  useEffect(() => {
    console.log("databases=>", databases)
    databases && setDatabaseId(databases[0].database_id)
    databases && setDatabaseName(databases[0].name)
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
            {databases ? (
              databases.map((database: Database) => {
                return (
                  <option value={database.database_id} key={database.database_id}>
                    {database.name}
                  </option>
                )
              })
            ) : (
              <option>項目がありません</option>
            )}
          </Select>
          <Box minW={"100%"}>
            <UserTable databaseId={databaseId} />
          </Box>
        </Box>
      </Layout>
    </>
  )
}
export default TableViewPage
