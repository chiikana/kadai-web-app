import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Layout from "../../component/layout";
import React from "react";

export const JumpPage = (): JSX.Element => {
  const router = useRouter();
  const [timerCnt, setTimerCnt] = useState(5);

  useEffect(() => {
    let tid: NodeJS.Timeout;
    const onload = () => {
      tid = setInterval(() => {
        setTimerCnt(timerCnt - 1);
        if (timerCnt <= 1) {
          router.push("/HomePage/");
        }
      }, 1000);
      // tid = setTimeout(() => {
      //   router.push("/HomePage/");
      // }, 5000);
    };
    onload();
    return () => {
      clearTimeout(tid);
    };
  });
  return (
    <Layout>
      <Box
        minH={"100vh"}
        minW={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          // router.push("/HomePage/");
        }}
      >
        <VStack h={"100vh"} w={"100%"}>
          <Heading>Sosial Jump</Heading>
          <Text>
            開発段階のためソーシャルアカウントへのジャンプはしません。
          </Text>
          <Text>{timerCnt}秒後にHomeへ移動します</Text>
          <Link href={"/HomePage/"} passHref replace>
            <a>
              <Text fontSize={"2.5vw"}>ClickでHomeへ</Text>
            </a>
          </Link>
        </VStack>
      </Box>
    </Layout>
  );
};
export default JumpPage;
