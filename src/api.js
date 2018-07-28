import axios from 'axios';

export function fetchLatestStories() {
    return axios.get(` https://hacker-news.firebaseio.com/v0/topstories.json`);
}