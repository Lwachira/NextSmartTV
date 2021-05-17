import { Box, Image } from "@chakra-ui/react";
import styles from "./photogrid.module.css";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function PhotoGrid(props) {
  const { data, error } = useSWR(`/api/photo/${props.topicname}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Box className={styles.grid}>
      {data.topicPhotoList.map((item) => (
        <Box className={styles.image} key={item.id}>
          <Image
            boxSize="300px"
            objectFit="cover"
            src={item.urls.regular}
            alt={item.alt_description}
            _focus={{
              border: "6px solid",
              borderColor: "tomato",
              bg: "#A0AEC0",
            }}
            _hover={{
              border: "6px solid",
              borderColor: "tomato",
              bg: "#A0AEC0",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
export default PhotoGrid;
