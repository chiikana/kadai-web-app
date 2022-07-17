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

export const HomePage = () => {
  const router = useRouter();
  const [datas, setDatas] = useState([""]);
  const [ids, setIds] = useState("");
  const [names, setNames] = useState("");
  const [stocks, setStocks] = useState("");
  const [boughts, setBoughts] = useState("");
  const [sellings, setSellings] = useState("");
  const [size, setSize] = useState(0);

  // useEffect(() => {
  //   const road = async () => {
  //     const colRef = collection(db, "dummy_data");
  //     const querySnapshot = await getDocs(colRef);
  //     // setSize(querySnapshot.size);
  //     querySnapshot.docs.map((postDoc) => {
  //       console.log(postDoc.id, postDoc.data());
  //       // let jsxArray = [];

  //       // jsxArray.push(
  //       //   `<Tr>
  //       //     <Td>${postDoc.id}</Td>
  //       //     <Td>${postDoc.data().name}</Td>
  //       //     <Td _after={{ content: \`"個"\` }}>${postDoc.data().stock}</Td>
  //       //     <Td _after={{ content: \`"円"\` }}>${postDoc.data().bought}</Td>
  //       //     <Td _after={{ content: \`"円"\` }}>${postDoc.data().selling}</Td>
  //       //     </Tr>`
  //       // );
  //       const jsxTbl = `<Tr>
  //           <Td>${postDoc.id}</Td>
  //           <Td>${postDoc.data().name}</Td>
  //           <Td _after={{ content: \`"個"\` }}>${postDoc.data().stock}</Td>
  //           <Td _after={{ content: \`"円"\` }}>${postDoc.data().bought}</Td>
  //           <Td _after={{ content: \`"円"\` }}>${postDoc.data().selling}</Td>
  //           </Tr>`;

  //       setDatas([...datas, jsxTbl]);
  //     });
  //     // querySnapshot.forEach((doc) => {
  //     //   // doc.data() is never undefined for query doc snapshots
  //     //   console.log(doc.id, " => ", doc.data());
  //     //   setIds(doc.id);
  //     //   setNames(doc.data().name);
  //     //   setStocks(doc.data().stock);
  //     //   setBoughts(doc.data().bought);
  //     //   setSellings(doc.data().selling);
  //     //   return (
  //     //     <Tr>
  //     //       <Td>{doc.id}</Td>
  //     //       <Td>{doc.data().name}</Td>
  //     //       <Td _after={{ content: `"個"` }}>{doc.data().stock}</Td>
  //     //       <Td _after={{ content: `"円"` }}>{doc.data().bought}</Td>
  //     //       <Td _after={{ content: `"円"` }}>{doc.data().selling}</Td>
  //     //     </Tr>
  //     //   );
  //     // });
  //     // let data_id = 0;
  //     // const docRef = doc(colRef, `${data_id + 1}`);
  //     // const docSnap = await getDoc(docRef);
  //     // console.log(docSnap.data());
  //     // if (docSnap.exists()) {
  //     //   // Convert to City object
  //     //   const dmy = docSnap.data();
  //     //   // Use a City instance method
  //     //   console.log(dmy.toString());
  //     // } else {
  //     //   console.log("No such document!");
  //     // }
  //   };
  //   road();
  //   console.log("datas:", datas);
  // }, [datas]);

  // const tableBody = (
  // interface datasArray {
  //   value: string;
  //   index: number;
  // }
  // const tableBody = (datas: Array<datasArray>) => {
  //   datas.map((value, index) => {
  //     return value;
  //   });
  // };
  //   _id: string,
  //   _name: string,
  //   _stock: string,
  //   _bought: string,
  //   _selling: string
  // ) => {
  //   return (
  //     <Tr>
  //       <Td>{_id}</Td>
  //       <Td>{_name}</Td>
  //       <Td _after={{ content: `"個"` }}>{_stock}</Td>
  //       <Td _after={{ content: `"円"` }}>{_bought}</Td>
  //       <Td _after={{ content: `"円"` }}>{_selling}</Td>
  //     </Tr>
  //   );
  // };

  // const road = async () => {
  //   const colRef = collection(db, "dummy_data");
  //   const querySnapshot = await getDocs(colRef);
  //   // setSize(querySnapshot.size);
  //   querySnapshot.docs.map((postDoc) => {
  //     console.log(postDoc.id, postDoc.data());
  //     // let jsxArray = [];

  //     // jsxArray.push(
  //     //   `<Tr>
  //     //     <Td>${postDoc.id}</Td>
  //     //     <Td>${postDoc.data().name}</Td>
  //     //     <Td _after={{ content: \`"個"\` }}>${postDoc.data().stock}</Td>
  //     //     <Td _after={{ content: \`"円"\` }}>${postDoc.data().bought}</Td>
  //     //     <Td _after={{ content: \`"円"\` }}>${postDoc.data().selling}</Td>
  //     //     </Tr>`
  //     // );
  //     const jsxTbl = `<Tr>
  //         <Td>${postDoc.id}</Td>
  //         <Td>${postDoc.data().name}</Td>
  //         <Td _after={{ content: \`"個"\` }}>${postDoc.data().stock}</Td>
  //         <Td _after={{ content: \`"円"\` }}>${postDoc.data().bought}</Td>
  //         <Td _after={{ content: \`"円"\` }}>${postDoc.data().selling}</Td>
  //         </Tr>`;

  //     setDatas([...datas, jsxTbl]);
  //   });
  // };
  // road();
  // console.log("datas:", datas);
  const read = async () => {
    const colRef = collection(db, "dummy_data");
    const querySnapshot = await getDocs(colRef);
    // setSize(querySnapshot.size);
    querySnapshot.docs.map((postDoc) => {
      console.log(postDoc.id, "=>", postDoc.data());
      // let jsxArray = [];

      // jsxArray.push(
      //   `<Tr>
      //     <Td>${postDoc.id}</Td>
      //     <Td>${postDoc.data().name}</Td>
      //     <Td _after={{ content: \`"個"\` }}>${postDoc.data().stock}</Td>
      //     <Td _after={{ content: \`"円"\` }}>${postDoc.data().bought}</Td>
      //     <Td _after={{ content: \`"円"\` }}>${postDoc.data().selling}</Td>
      //     </Tr>`
      // );
      const jsxTbl = `
            <Td>${postDoc.id}</Td>
            <Td>${postDoc.data().name}</Td>
            <Td _after={{ content: \`"個"\` }}>${postDoc.data().stock}</Td>
            <Td _after={{ content: \`"円"\` }}>${postDoc.data().bought}</Td>
            <Td _after={{ content: \`"円"\` }}>${postDoc.data().selling}</Td>
            `;

      setDatas([...datas, jsxTbl]);
    });
  };

  // useEffect(() => {
  //   router.events.on("routeChangeComplete", handleChangeRoute);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleChangeRoute);
  //   };
  // });

  // function handleChangeRoute() {
  //   read();
  // }

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
              <Tbody>
                {datas.map((value, index) => {
                  console.log("index=>", index, "/ value=>", value);
                  return <Tr key={index}>{value}</Tr>;
                })}
              </Tbody>
              {/* <Tbody></Tbody> */}
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
export default HomePage;
