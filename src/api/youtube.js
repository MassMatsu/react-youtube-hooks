import axios from 'axios'

//const KEY = process.env.REACT_APP_YOUTUBE_APIKEY;
const key = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg'

export default axios.create({
  baseURL: ' https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: key
  }
});
