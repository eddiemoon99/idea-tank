import axios from 'axios';

const url = 'http://localhost:5000/ideas';

export const fetchIdeas = () => axios.get(url);
export const createIdea = (newIdea) => axios.post(url, newIdea);
export const updateIdea = (id, updatedIdea) =>
  axios.patch(`${url}/${id}`, updatedIdea);
export const deleteIdea = (id) => axios.delete(`${url}/${id}`);
export const upvoteIdea = (id) => axios.patch(`${url}/${id}/upvoteIdea`);
export const downvoteIdea = (id) => axios.patch(`${url}/${id}/downvoteIdea`);
