import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import Menu from "../Components/Menu";
import PhotoGrid from "../Components/PhotoGrid";

export default function Home() {
  const [topicname, setTopicName] = useState("film");
  console.log(topicname);
  return (
    <Box>
      <Head>
        <title>Lincoln Smart TV App</title>
        <meta name="description" content="Lincoln Smart TV App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*     <Flex>
        <Menu></Menu>
      </Flex> */}

      <Flex>
        <Menu setTopicName={setTopicName}></Menu>
        <PhotoGrid topicname={topicname}></PhotoGrid>
      </Flex>

    </Box>
  );
}
