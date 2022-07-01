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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../component/layout";

export const HomePage = () => {
  const router = useRouter();
  let listValue = 5;
  let listCount = 5;
  const dummyThList = [
    ["id", "name", "stock", "bought price", "selling price"],
  ];
  const dummyTbList = [
    ["1", "リンゴ", "100", "200", "300"],
    ["2", "バナナ", "150", "250", "350"],
    ["3", "キウイ", "200", "300", "400"],
    ["4", "ナシ", "250", "350", "450"],
    ["5", "パイナップル", "300", "300", "500"],
  ];
  let dummyData = [
    {
      id: 1,
      name: "リンゴ",
      stock: 100,
      bought: 200,
      selling: 300,
    },
    {
      id: 2,
      name: "バナナ",
      stock: 100,
      bought: 200,
      selling: 300,
    },
    {
      id: 3,
      name: "キウイ",
      stock: 100,
      bought: 200,
      selling: 300,
    },
    {
      id: 4,
      name: "ナシ",
      stock: 100,
      bought: 200,
      selling: 300,
    },
    {
      id: 5,
      name: "パイナップル",
      stock: 100,
      bought: 200,
      selling: 300,
    },
  ];

  const tableBody = () => {
    const output = dummyData.map((value, index) => {
      return (
        <Tr key={index + 1}>
          <Td>{value.id}</Td>
          <Td>{value.name}</Td>
          <Td _after={{ content: `"個"` }}>{value.stock}</Td>
          <Td _after={{ content: `"円"` }}>{value.bought}</Td>
          <Td _after={{ content: `"円"` }}>{value.selling}</Td>
        </Tr>
      );
    });
    return output;
  };
  return (
    <>
      <Layout>
        <Box>
          <TableContainer
            border="1px solid #999999"
            // marginTop={8}
            maxHeight="full"
            overflowX="auto"
            overflowY="auto"
          >
            {/* <Table variant="striped" colorScheme="blue" size="md">
            <Thead
              borderBottom="1px solid #999999"
              left={0}
              position="sticky"
              top={0}
              zIndex={100}
            >
              <Tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th>stock</Th>
                <Th>bought price</Th>
                <Th>selling price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* <Tr>
              <Td></Td>
              <Td></Td>
              <Td _after={{ content: `"個"` }}></Td>
              <Td _before={{ content: `"¥"` }}></Td>
              <Td _before={{ content: `"¥"` }}></Td>
            </Tr> */}
            {/* <Tr>
                <Td>1</Td>
                <Td>リンゴ</Td>
                <Td _after={{ content: `"個"` }}>100</Td>
                <Td _before={{ content: `"¥"` }}>200</Td>
                <Td _before={{ content: `"¥"` }}>300</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>リンゴ</Td>
                <Td _after={{ content: `"個"` }}>100</Td>
                <Td _before={{ content: `"¥"` }}>200</Td>
                <Td _before={{ content: `"¥"` }}>300</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>リンゴ</Td>
                <Td _after={{ content: `"個"` }}>100</Td>
                <Td _before={{ content: `"¥"` }}>200</Td>
                <Td _before={{ content: `"¥"` }}>300</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>リンゴ</Td>
                <Td _after={{ content: `"個"` }}>100</Td>
                <Td _before={{ content: `"¥"` }}>200</Td>
                <Td _before={{ content: `"¥"` }}>300</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th>stock</Th>
                <Th>bought price</Th>
                <Th>selling price</Th>
              </Tr>
            </Tfoot>
          </Table> */}
            <Table variant="striped" colorScheme="blue" size="md">
              <Thead
                borderBottom="1px solid #999999"
                left={0}
                position="sticky"
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
              <Tbody>{tableBody()}</Tbody>
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
    </>
  );
};
export default HomePage;
