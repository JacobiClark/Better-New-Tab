import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Clock from "../components/Clock";
import { Box, Text } from "@chakra-ui/react";
import LinkCard from "../components/LinkCard";
import { FaSearch, FaStackOverflow } from "react-icons/fa";

export default function Home() {
  const websites = [
    {
      websiteName: "Google Search",
      url: "https://www.google.com",
      icon: <FaStackOverflow className={styles.icon} />,
    },
    /*{ websiteName: "Stack Overflow", url: "https://www.stackoverflow.com" },
    { websiteName: "GitHub", url: "https://www.github.com" },
    { websiteName: "Reddit", url: "https://www.reddit.com" },
    { websiteName: "Twitter", url: "https://www.twitter.com" },*/
  ];
  return (
    <Box m="2%">
      <Head>
        <title>Better New Tab</title>
        <meta
          name="description"
          content="Created to enhance the new tab experience"
        />
        <link rel="icon" href="/cube.ico" />
      </Head>
      <FaStackOverflow className={styles.icon} />
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
