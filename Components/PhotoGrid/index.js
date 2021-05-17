import { Box } from "@chakra-ui/react";
import styles from "./photogrid.module.css";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function PhotoGrid(props) {
  const { data, error } = useSWR(`/api/photo/${props.topicname}`, fetcher);

  if (error) return <Box className={styles.grid}>Failed to load</Box>;
  if (!data) return <Box className={styles.grid}>Loading ...</Box>;

  return (
    <Box className={styles.grid}>
      {data.topicPhotoList.map((item) => (
        <Box className={styles.image} key={item.id}>
          <Image
            width="300px"
            height="300px"
            src={item.urls.regular}
            alt={item.alt_description}
            objectFit="cover"
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
