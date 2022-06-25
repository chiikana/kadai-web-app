import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import { useRouter } from "next/router";

const StartPage = () => {
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
        <Text fontSize={"40vh"}>START</Text>
      </Box>
      {/* <HomePage></HomePage> */}
    </>
  );
};

export default StartPage;
