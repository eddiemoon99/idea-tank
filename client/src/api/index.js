import axios from 'axios';

// create axios instance
const API = axios.create({ baseURL: 'http://localhost:5000' });

// routes
export const fetchIdeas = () => API.get('/ideas');
export const createIdea = (newIdea) => API.post('/ideas', newIdea);
export const updateIdea = (id, updatedIdea) =>
  API.patch(`/ideas/${id}`, updatedIdea);
export const deleteIdea = (id) => API.delete(`/ideas/${id}`);
export const upvoteIdea = (id) => API.patch(`/ideas/${id}/upvoteIdea`);
export const downvoteIdea = (id) => API.patch(`/ideas/${id}/downvoteIdea`);

export const signIn = (inputs) => API.post('/user/signIn', inputs);
export const signUp = (inputs) => API.post('/users/signUp', inputs);
