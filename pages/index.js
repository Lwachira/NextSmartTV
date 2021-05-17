import Head from "next/head";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
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

      <Box display={{ sm: "block", md: "flex" }}>
        <Menu setTopicName={setTopicName}></Menu>
        <PhotoGrid topicname={topicname}></PhotoGrid>
      </Box>
    </Box>
  );
}
