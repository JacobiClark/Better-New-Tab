import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

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
} from "@chakra-ui/react";
import { FaSearch, FaStackOverflow } from "react-icons/fa";

const LinkCard = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    location.assign("http://www.mozilla.org");
  };
  return (
    <Flex borderWidth="1px" borderRadius="lg" alignItems="center">
      {props.icon}
      <Box>{props.websiteName}</Box>
      <InputGroup>
        <Input
          placeholder={"Search " + props.websiteName}
          onChange={handleChange}
          onSubmit={() => console.log("hi")}
          flexGrow="1"
          m="2%"
        />
        <Link href={props.url} passHref={true}>
          <a>
            <InputRightElement m="2%">
              <Button onClick={handleClick}>
                <FaSearch />
              </Button>
            </InputRightElement>
          </a>
        </Link>
      </InputGroup>
    </Flex>
  );
};

export default LinkCard;
