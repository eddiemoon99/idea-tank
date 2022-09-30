import axios from 'axios';

// create axios instance
const API = axios.create({ baseURL: 'https://idea-tank.herokuapp.com/' });

// middleware send auth user to backend
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});
// routes
// ideas
export const fetchIdeas = () => API.get('/ideas');
export const createIdea = (newIdea) => API.post('/ideas', newIdea);
export const updateIdea = (id, updatedIdea) =>
  API.patch(`/ideas/${id}`, updatedIdea);
export const deleteIdea = (id) => API.delete(`/ideas/${id}`);
export const upvoteIdea = (id) => API.patch(`/ideas/${id}/upvoteIdea`);
export const downvoteIdea = (id) => API.patch(`/ideas/${id}/downvoteIdea`);

// auth
export const signIn = (inputs) => API.post('/user/signIn', inputs);
export const signUp = (inputs) => API.post('/user/signUp', inputs);
