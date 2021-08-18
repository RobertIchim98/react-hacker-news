import { newStoriesURL, storyWithID } from "./apiEndPoints";
import axios from "axios";

export const getNewStoryIds = () => {
    return axios
        .get(newStoriesURL)
        .then((res) => {
            const results = res.data;
            //console.log(results);
            return results;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getStoryWithID = (storyid) => {
    return axios
        .get(storyWithID + storyid + ".json")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};