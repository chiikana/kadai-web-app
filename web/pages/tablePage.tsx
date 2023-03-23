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

import json from "../components/guestData_table.json"
import useAuthUser from "@/hooks/useAuthUser"
import { useEffect, useState } from "react"
import { useDatabaseFromUserId } from "@/hooks/useDatabaseFromUser"
import { Database } from "@/types/database"
import { useProfileFromUserId } from "@/hooks/useProfileFromUserId"

export const TableViewPage = () => {
  const router = useRouter()
  const user = useAuthUser()
  // const database = useDatabaseFromUserId(user.userId)
  const userData = useProfileFromUserId(user.userId)
  const [databaseName, setDatabaseName] = useState<string>("")
  // useEffect(() => {
  //   setDatabaseName(database)
  // }, [database])

  const DatabaseSelector = () => {
    return (
      <Select>
        {userData.userProfile &&
          userData.userProfile.map((item, index) => {
            ;<option>{item.name}</option>
          })}
      </Select>
    )
  }

  const tableBody = () => {
    const output = databaseName.map((item: any, index: any) => {
      if (index !== 0) {
        return (
          <Tr key={index}>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
            <Td _after={{ content: `"個"` }}>{item.stock}</Td>
            <Td _after={{ content: `"円"` }}>{item.bought}</Td>
            <Td _after={{ content: `"円"` }}>{item.selling}</Td>
          </Tr>
        )
      }
    })
    return output
  }

  return (
    <>
      <Layout>
        <Box w={"100%"}>
          <Heading textAlign={"center"}>GuestData-Table</Heading>
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
              <Tbody>{tableBody(data)}</Tbody>
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
