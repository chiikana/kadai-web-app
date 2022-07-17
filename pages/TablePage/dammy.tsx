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
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";
import Layout from "../../component/layout";
import { db } from "../../src/utils/firebase/init";

// const DummyDataMethod = async () => {
//   class Dmy {
//     name: string;
//     stack: number;
//     bought: number;
//     selling: number;
//     constructor(name: string, stack: number, bought: number, selling: number) {
//       this.name = name;
//       this.stack = stack;
//       this.bought = bought;
//       this.selling = selling;
//     }
//     toString() {
//       return (
//         this.name + ", " + this.stack + ", " + this.bought + ", " + this.selling
//       );
//     }
//   }

//   // Firestore data converter
//   const dmyConverter = {
//     toFirestore: (dmy: {
//       name: string;
//       stack: number;
//       bought: number;
//       selling: number;
//     }) => {
//       return {
//         name: dmy.name,
//         stack: dmy.stack,
//         bought: dmy.bought,
//         selling: dmy.selling,
//       };
//     },
//     fromFirestore: (snapshot: { data: (arg0: any) => any }, options: any) => {
//       const data = snapshot.data(options);
//       return new Dmy(data.name, data.stack, data.bought, data.selling);
//     },
//   };

//   const ref = doc(db, "dummy_data").withConverter(dmyConverter);
//   const docSnap = await getDoc(ref);
//   if (docSnap.exists()) {
//     // Convert to City object
//     const dmy = docSnap.data();
//     // Use a City instance method
//     console.log(dmy.toString());
//   } else {
//     console.log("No such document!");
//   }
// };

export const HomePage = () => {
  useLayoutEffect(() => {
    const road = async () => {
      let data_id = 0;
      const colRef = collection(db, "dummy_data");
      const docRef = doc(colRef, `${data_id + 1}`);
      const docSnap = await getDoc(docRef);
      const querySnapshot = await getDocs(colRef);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(docSnap.data());
        return (
          <Tr>
            <Td>{doc.id}</Td>
            <Td>{doc.data().name}</Td>
            <Td _after={{ content: `"個"` }}>{doc.data().stock}</Td>
            <Td _after={{ content: `"円"` }}>{doc.data().bought}</Td>
            <Td _after={{ content: `"円"` }}>{doc.data().selling}</Td>
          </Tr>
        );
      });
    };
    road();
  }, []);

  useEffect(() => {
    // DummyDataMethod;
    // const dmyDataRef = collection(db, "dummy_data");
    // getDocs(dmyDataRef).then((querySnapshot) => {
    //   querySnapshot.docs.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //     // return (
    //     //   <Tr key={doc.data()}>
    //     //     <Td>{value.id}</Td>
    //     //     <Td>{value.name}</Td>
    //     //     <Td _after={{ content: `"個"` }}>{value.stock}</Td>
    //     //     <Td _after={{ content: `"円"` }}>{value.bought}</Td>
    //     //     <Td _after={{ content: `"円"` }}>{value.selling}</Td>
    //     //   </Tr>
    //     // );
    //   });
    // });
  }, []);
  const dummyData = [
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
        <Box h={"100vh"} w={"100%"}>
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
