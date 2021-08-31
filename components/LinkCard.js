import { useState, useEffect } from "react";
import { buildSearchQuery } from "../utils/helpers";
import Link from "next/link";
import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  Form,
} from "@chakra-ui/react";
import { FaSearch, FaStackOverflow } from "react-icons/fa";

const LinkCard = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    location.assign(buildSearchQuery(props.websiteName, searchInput));
  };

  return (
    <Flex alignItems="center" mt="5px">
      <Link href={props.url}>
        <a>{props.icon}</a>
      </Link>

      <InputGroup>
        <Input
          placeholder={"Search " + props.websiteName}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              location.assign(buildSearchQuery(props.websiteName, searchInput));
            }
          }}
          flexGrow="1"
          m="1%"
        />
      </InputGroup>

      <Button onClick={handleClick} mr="1%">
        <FaSearch />
      </Button>
    </Flex>
  );
};

export default LinkCard;
