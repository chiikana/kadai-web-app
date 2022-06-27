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
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";

export const HomePage = () => {
  const router = useRouter();
  const dummyList = [];
  return (
    <>
      <Header />
      <Box
        bg={useColorModeValue("yellow.50", "gray.800")}
        minH={"100vh"}
        minW={"100vw"}
        // display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        <TableContainer
          border="1px solid #999999"
          // marginTop={8}
          maxHeight="calc(100vh - 60px)"
          overflowX="auto"
          overflowY="auto"
        >
          <Table variant="striped" colorScheme="blue" size="md">
            {/* <TableCaption>TABLE</TableCaption> */}
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
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </>
  );
};
export default HomePage;
