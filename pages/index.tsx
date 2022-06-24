import { Box, Code, Heading, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Box
        minH={"100vh"}
        minW={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          router.push("/HomePage/");
        }}
      >
        <Text
          // textAlign={"center"}
          // verticalAlign={"middle"}
          fontSize={"40vh"}
        >
          START
        </Text>
      </Box>
      {/* <HomePage></HomePage> */}
    </>
  );
};

export default Home;
