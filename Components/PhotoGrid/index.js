import { Box, Grid, Img } from "@chakra-ui/react";
import useSWR from "swr";
import styles from "./photogrid.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

function PhotoGrid(props) {
  const { data, error } = useSWR(`/api/photo/${props.topicname}`, fetcher);

  if (error) return <Box className={styles.grid}>Failed to load</Box>;
  if (!data) return <Box className={styles.grid}>Loading ...</Box>;

  return (
    <Grid
      className={styles.grid}
      templateRows={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(2, 1fr)",
      }}
    >
      {data.topicPhotoList.map((item) => (
        <Box className={styles.image} key={item.id}>
          <Img
            width="300px"
            height="300px"
            src={item.urls.regular}
            alt={item.alt_description}
            objectFit="cover"
            layout="responsive"
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
    </Grid>
  );
}
export default PhotoGrid;
