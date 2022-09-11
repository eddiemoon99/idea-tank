import axios from 'axios';

const url = 'http://localhost:5000/memories';

export const fetchMemories = () => {
  axios.get(url);
};
