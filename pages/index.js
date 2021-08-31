import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Clock from "../components/Clock";
import { Box, Text } from "@chakra-ui/react";
import LinkCard from "../components/LinkCard";
import { FaSearch, FaStackOverflow } from "react-icons/fa";
import { websites } from "../utils/websites";

export default function Home() {
  console.log(websites);
  return (
    <Box ml="2%" mr="2%">
      <Head>
        <title>Better New Tab</title>
        <meta
          name="description"
          content="Created to enhance the new tab experience"
        />
        <link rel="icon" href="/cube.ico" />
      </Head>
      <Clock />
      {websites.map((website) => (
        <LinkCard
          key={website.websiteName}
          websiteName={website.websiteName}
          url={website.url}
          icon={website.icon}
        />
      ))}
    </Box>
  );
}
