import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Your API base URL

const api = axios.create({
  baseURL,
});

export const registerUser = async (formData) => {
  const { data } = await api.post('/auth', formData);
  return data;
};

// export const loginUser = async (formData) => {
//   const { data } = await api.post('/login', formData);
//   return data;
// };

export default api;
