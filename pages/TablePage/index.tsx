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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";

export const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Box
        bg={useColorModeValue("yellow.50", "gray.800")}
        minH={"100vh"}
        minW={"100vh"}
        // display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        <Table variant="striped" colorScheme="blue" size="md" border={"1px"}>
          <TableCaption>TABLE</TableCaption>
          <Thead>
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
      </Box>
      <Footer />
    </>
  );
};
export default HomePage;
