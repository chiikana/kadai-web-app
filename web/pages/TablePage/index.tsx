import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../component/layout";

import "../../src/utils/firebase/init"; // Initialize FirebaseApp

import json from "../../component/dmyData_table.json";

export const TableViewPage = () => {
  const router = useRouter();

  let data = json;

  const tableBody = (dmyData: any) => {
    const output = dmyData.map((item: any, index: any) => {
      return (
        <Tr key={index}>
          <Td>{item.id}</Td>
          <Td>{item.name}</Td>
          <Td _after={{ content: `"個"` }}>{item.stock}</Td>
          <Td _after={{ content: `"円"` }}>{item.bought}</Td>
          <Td _after={{ content: `"円"` }}>{item.selling}</Td>
        </Tr>
      );
    });
    return output;
  };

  return (
    <>
      <Layout>
        <Box h={"100vh"} w={"100%"}>
          <Heading textAlign={"center"}>DummyData-Table</Heading>
          <TableContainer
            borderY={"1px solid #999999"}
            maxHeight="full"
            overflowX="auto"
            overflowY="auto"
          >
            <Table variant="striped" colorScheme="blue" size="md">
              <Thead
                borderBottom="1px solid #999999"
                position="sticky"
                left={0}
                top={0}
              >
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
  );
};
export default TableViewPage;
