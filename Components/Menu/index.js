import { Box, Button } from "@chakra-ui/react";

function Menu(props) {
  return (
    <Box
      bg="#A0AEC0"
      m={{ sm: 1, md: 2, lg: 2 }}
      h={{ sm: "201px", md: "701px", lg: "701px" }}
      w={{ sm: "273.5px" }}
    >
      {props.data.topicList.map((item) => (
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
