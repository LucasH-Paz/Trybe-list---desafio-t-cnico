import axios from 'axios';

export const fetchTasks = async (endpoint) => {
  const { data: { result } } = await axios.get(endpoint);
  return result;
};

export const updateTask = async (endpoint, payload) => {
  const result = await axios.put(endpoint, payload);
  return result;
};

export const deleteTask = async (endpoint) => {
  const { data: { result } } = await axios.delete(endpoint);
  return result;
};

export const newTask = async (endpoint, payload) => axios.post(endpoint, payload);
