import { useState, useEffect } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

const Clock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toTimeString().split(" ")[0].substr(0, 5));
    });
  }, []);

  return (
    <Box>
      <Center>
        <Text fontSize="3xl">{time}</Text>
      </Center>
    </Box>
  );
};

export default Clock;
