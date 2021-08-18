import { useState, useEffect } from "react";
import "../App.css";

import { Story } from "./Story";

import { getStoryWithID } from "../APICalls/getApiStories";
import { storyComments } from "../APICalls/apiEndPoints";

export const StoryTemplate = ({ storyId, searchTerm }) => {
  const [story, setStory] = useState([]);
  const [domain, setDomain] = useState([]);

  useEffect(() => {
    getStoryWithID(storyId).then((storyd) => {
      setStory(storyd);
      // parse the domain so it looks better
      if (storyd && storyd.url != null) {
        let domain = new URL(storyd.url);
        domain = domain.hostname.replace("www.", "");
        setDomain(domain);
      }
    });
  }, []);
  //console.log(story.title.toLowerCase().includes("talib"));
  if (!searchTerm) {
    console.log("no search");
  }
  return <Story story={story} domain={domain} />;

  /*

  if (!searchTerm) {
    return <Story story={story} domain={domain} />;
  } else if (story && story.title.toLowerCase().includes(searchTerm)) {
    return <Story story={story} domain={domain} />;
  } else {
    return <p>Empty</p>;
  }
  */
};
