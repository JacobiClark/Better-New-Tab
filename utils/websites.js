import {
  FaGithub,
  FaGoogle,
  FaHackerNews,
  FaMedium,
  FaReddit,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

export const websites = [
  {
    websiteName: "Google",
    url: "https://www.google.com",
    icon: <FaGoogle style={{ height: "40px", width: "40px", margin: "1%" }} />,
  },
  {
    websiteName: "Stack Overflow",
    url: "https://www.stackoverflow.com",
    icon: (
      <FaStackOverflow
        style={{ height: "40px", width: "40px", margin: "1%" }}
      />
    ),
  },
  {
    websiteName: "GitHub",
    url: "https://www.github.com",
    icon: <FaGithub style={{ height: "40px", width: "40px", margin: "1%" }} />,
  },
  {
    websiteName: "Reddit",
    url: "https://www.reddit.com",
    icon: <FaReddit style={{ height: "40px", width: "40px", margin: "1%" }} />,
  },
  {
    websiteName: "Twitter",
    url: "https://www.twitter.com",
    icon: <FaTwitter style={{ height: "40px", width: "40px", margin: "1%" }} />,
  },
  {
    websiteName: "Medium",
    url: "https://www.medium.com",
    icon: <FaMedium style={{ height: "40px", width: "40px", margin: "1%" }} />,
  },
  {
    websiteName: "Hacker News",
    url: "https://www.hackernews.com",
    icon: (
      <FaHackerNews style={{ height: "40px", width: "40px", margin: "1%" }} />
    ),
  },
];
