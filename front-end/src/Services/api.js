import axios from 'axios';

export const fetchTasks = async (endpoint) => {
  const { data: { result } } = await axios.get(endpoint);
  return result;
};

export const updateTask = async (endpoint, payload) => {
  const result = await axios.put(endpoint, payload);
  console.log(result);
};

export const deleteTask = async (endpoint) => {
  const { data: { result } } = await axios.delete(endpoint);
  console.log(result);
};

export const newTask = async (endpoint, payload) => {
  const result = await axios.post(endpoint, payload);
  console.log(result);
};
