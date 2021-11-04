import axios from 'axios';

const fetchTasks = async (endpoint) => {
  const { data: { result } } = await axios.get(endpoint);
  return result;
};

export default fetchTasks;
