import axios from 'axios';
import moment from 'moment';

export function fetchLatestStories() {
    return axios
    .get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    .then(response => response.data.slice(0, 10));
}

export function fetchStoriesById(ids) {
    return Promise
        .all(ids.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)))
        .then(responses => responses.map(response => { 
            return Object.assign({}, response.data, {
                timeFromNow: moment(response.data.time).fromNow(),
                hostName: getHostName(response.data.url),
                isLoadingComments: true,
                comments: [] 
            })})
        );
}

export function fetchCommentsByStory(story) {
    return Promise
        .all(story.kids.map(kid => axios.get(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`)))
        .then(responses => responses.map(response => { 
            return Object.assign({}, response.data, {});
        })
        );
}

function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}