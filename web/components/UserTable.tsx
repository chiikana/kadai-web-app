import { Table, TableContainer, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { TableBody } from "./TableBody"

export type UserTable = {
  databaseId: string
}
export const UserTable = (props: UserTable) => {
  const { databaseId } = props
  const router = useRouter()

  return (
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
          <TableBody databaseId={databaseId} />
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
  )
}
