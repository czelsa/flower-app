import axios from 'axios';

// TODO moved to secrets file
const API_URL = 'http://localhost:8000';
const POSTS_URL = `${API_URL}/api/posts/`;

export const getPosts = () => (
  axios.get(POSTS_URL).then(({ data }) => data)
);
