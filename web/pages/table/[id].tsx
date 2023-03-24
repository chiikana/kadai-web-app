import {
  Box,
  Center,
  Heading,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { Layout } from "@/components/Layout"

import useAuthUser from "@/hooks/useAuthUser"
import { useEffect, useState } from "react"
import { useDatabaseFromUserId } from "@/hooks/useDatabaseFromUser"
import { Database } from "@/types/database"
import { useProfileFromUserId } from "@/hooks/useProfileFromUserId"
import { fetcher } from "@/libs/utils/useSWR"
import useSWR from "swr"
import { swrType } from "@/types/swr"
import { UserTable } from "@/components/UserTable"

type tableProps = {
  databases: Database[]
}

export const TableViewPage = () => {
  const router = useRouter()
  const user = useAuthUser()
  // const database = useDatabaseFromUserId(user.userId)
  const userData = useProfileFromUserId(user.userId)
  const [databaseName, setDatabaseName] = useState<string>("")
  const [databaseId, setDatabaseId] = useState<string>("")

  const [routerId, setRouterId] = useState<string>("")
  useEffect(() => {
    if (router.isReady) {
      const routerId = router.query.id
      setRouterId(routerId as string)
    }
  }, [router])
  // useEffect(() => {
  //   setDatabaseName(database)
  // }, [database]

  useEffect(() => {
    if (router.isReady) {
      const routerId = router.query.id
      setRouterId(routerId as string)
    }
  }, [router])
  const { data: databases, error: dbErr }: swrType = useSWR(`/api/databases/${routerId}`, fetcher)
  useEffect(() => {
    console.log(databaseId)
  }, [databaseId])

  return (
    <>
      <Layout>
        <Box h={"calc(100% - 120px)"} minW={"100%"}>
          <Heading textAlign={"center"}>
            <Select
              onChange={(e) => {
                setDatabaseId(e.target.value)
              }}
            >
              {databases &&
                databases.map((database: Database) => (
                  <option value={database.id} key={database.id}>
                    {database.name}
                  </option>
                ))}
            </Select>
          </Heading>
          <Box minW={"100%"}>
            <UserTable databaseId={databaseId} />
          </Box>
        </Box>
      </Layout>
    </>
  )
}
export default TableViewPage
