export const buildSearchQuery = (websiteName, searchQuery) => {
  console.log(websiteName);
  if (websiteName.toLowerCase() == "google") {
    return (
      "https://www.google.com/search?q=" + searchQuery.split(" ").join("+")
    );
  }
  if (websiteName.toLowerCase() == "twitter") {
    return "https://twitter.com/search?q=" + searchQuery.split(" ").join("%20");
  }
  if (websiteName.toLowerCase() == "stack overflow") {
    return (
      "https://stackoverflow.com/search?q=" + searchQuery.split(" ").join("+")
    );
  }
  if (websiteName.toLowerCase() == "github") {
    return "https://github.com/search?q=" + searchQuery.split(" ").join("+");
  }
  if (websiteName.toLowerCase() == "reddit") {
    return (
      "https://www.reddit.com/search/?q=" + searchQuery.split(" ").join("%20")
    );
  }
  if (websiteName.toLowerCase() == "medium") {
    return "https://medium.com/search?q=" + searchQuery.split(" ").join("%20");
  }
  if (websiteName.toLowerCase() == "hacker news") {
    return "https://hn.algolia.com/?q=" + searchQuery.split(" ").join("+");
  }
  return "https://google.com";
};
