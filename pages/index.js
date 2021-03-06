import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";
import useSWR from "swr";
import Menu from "../Components/Menu";
import PhotoGrid from "../Components/PhotoGrid";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [topicname, setTopicName] = useState("film");
  const { data, error } = useSWR("/api/topics", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Box>
      <Head>
        <title>Lincoln Smart TV App</title>
        <meta name="description" content="Lincoln Smart TV App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={{ sm: "block", md: "flex", lg: "flex", xl: "flex" }}>
        <Menu setTopicName={setTopicName} data={data}></Menu>
        <PhotoGrid topicname={topicname}></PhotoGrid>
      </Box>
    </Box>
  );
}
