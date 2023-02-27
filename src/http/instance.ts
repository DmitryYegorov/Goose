import axios from 'axios';
import { BACKEND_API } from 'react-native-dotenv';

const baseURL = 'https://4aea-86-57-158-36.eu.ngrok.io';
console.log({ baseURL });

export const instance = axios.create({ baseURL });
