import { Box, Code, Heading, Link, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const onload = () => {
      setTimeout(() => {
        router.push("/HomePage/");
      }, 2000);
    };
    onload();
  });
  return (
    <>
      <Box
        minH={"100vh"}
        minW={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          router.push("/HomePage/");
        }}
      >
        <VStack>
          <Heading fontSize={"20vh"}>在庫管理アプリ</Heading>
          <Text fontSize={"20vh"}>Click to START</Text>
        </VStack>
      </Box>
      {/* <HomePage></HomePage> */}
    </>
  );
};

export default Home;
