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
      <HomePage></HomePage>
    </>
  );
};

export default Home;
