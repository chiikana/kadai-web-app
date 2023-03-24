import {
  Box,
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
  const { data: databases, error: dbErr }: swrType = useSWR(`/api/databases/${routerId}`, fetcher)

  const DatabaseSelector = () => {
    useEffect(() => {
      console.log(databaseId)
    }, [databaseId])
    return (
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
    )
  }

  const TableBody = () => {
    const { data: objects, error: objErr }: swrType = useSWR(`/api/objects/${databaseId}`, fetcher)
    return (
      <>
        {objects &&
          objects.map((item: any, index: any) => {
            // if (index !== 0) {
            return (
              <Tr key={index}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td _after={{ content: `"個"` }}>{item.stock}</Td>
                <Td _after={{ content: `"円"` }}>{item.bought}</Td>
                <Td _after={{ content: `"円"` }}>{item.selling}</Td>
              </Tr>
            )
            // }
          })}
      </>
    )
  }

  return (
    <>
      <Layout>
        <Box w={"100%"}>
          <Heading textAlign={"center"}>
            <DatabaseSelector />
          </Heading>
          <TableContainer
            borderY={"1px solid #999999"}
            maxHeight="full"
            overflowX="auto"
            overflowY="auto"
          >
            <Table variant="striped" colorScheme="blue" size="md">
              <Thead borderBottom="1px solid #999999" position="sticky" left={0} top={0}>
                <Tr>
                  <Th>id</Th>
                  <Th>name</Th>
                  <Th>stock</Th>
                  <Th>cost</Th>
                  <Th>price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* {tableBody(data)} */}
                <TableBody />
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>id</Th>
                  <Th>name</Th>
                  <Th>stock</Th>
                  <Th>cost</Th>
                  <Th>price</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  )
}
export default TableViewPage
