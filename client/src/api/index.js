import axios from 'axios';

const url = 'http://localhost:5000/memories';

export const fetchMemories = () => axios.get(url);
export const createMemory = (newMemory) => axios.post(url, newMemory);
export const updateMemory = (id, updatedMemory) =>
  axios.patch(`${url}/${id}`, updatedMemory);
export const deleteMemory = (id) => axios.delete(`${url}/${id}`);
export const likeMemory = (id) => axios.patch(`${url}/${id}/likeMemory`);
