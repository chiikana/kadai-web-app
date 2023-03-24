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
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useDatabaseFromUserId } from "@/hooks/useDatabaseFromUser"
import { Database } from "@/types/database"
import { useProfileFromUserId } from "@/hooks/useProfileFromUserId"
import { fetcher } from "@/libs/utils/useSWR"
import useSWR from "swr"
import { swrType } from "@/types/swr"
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
          {/* {tableBody(data)} */}
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
