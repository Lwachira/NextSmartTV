import { Box, Button } from "@chakra-ui/react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Menu(props) {
  const { data, error } = useSWR("/api/topics", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Box bg="#A0AEC0" m={12} h="450px" w="30%">
      {data.topicList.map((item) => (
        <Button
          key={item.id}
          value={item.id}
          onClick={() => props.setTopicName(item.slug)}
          bg="#E2E8F0"
          border="0px solid"
          borderRadius="0px"
          variant="ghost"
          w="100%"
          _focus={{
            borderLeft: "6px solid",
            borderColor: "tomato",
            bg: "#A0AEC0",
          }}
          _hover={{
            borderLeft: "6px solid",
            borderColor: "tomato",
            bg: "#A0AEC0",
          }}
        >
          {item.title}
        </Button>
      ))}
    </Box>
  );
}
export default Menu;
