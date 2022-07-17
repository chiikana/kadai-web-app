import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  useColorMode,
  useColorModeValue,
  Flex,
  Table,
  TableCaption,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Tfoot,
  TableContainer,
  Center,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../component/layout";

import { getFirestore, Firestore, getDocs, getDoc } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";

import "../../src/utils/firebase/init"; // Initialize FirebaseApp
import { useEffect, useLayoutEffect, useState } from "react";
import { db } from "../../src/utils/firebase/init";

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
          <TableContainer
            border="1px solid #999999"
            // marginTop={8}
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
                  <Th>bought</Th>
                  <Th>seling</Th>
                </Tr>
              </Thead>
              {/* <Tbody>{tableBody(ids, names, stocks, boughts, sellings)}</Tbody> */}
              {/* <Tbody>
                {datas.map((value, index) => {
                  console.log("index=>", index, "/ value=>", value);
                  return <Tr key={index}>{value}</Tr>;
                })}
              </Tbody> */}
              <Tbody>{tableBody(data)}</Tbody>
              <Tfoot>
                <Tr>
                  <Th>id</Th>
                  <Th>name</Th>
                  <Th>stock</Th>
                  <Th>bought</Th>
                  <Th>seling</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
      <Center>
        <Button onClick={() => {}}>Reload</Button>
      </Center>
    </>
  );
};
export default TableViewPage;
