import axios from 'axios';
import { UserInterface } from '../types/User.Interface';

export const fetchUser = async (id: number): Promise<UserInterface> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
};
