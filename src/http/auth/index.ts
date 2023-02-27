import { instance } from '../instance';
import { CreateNewAccount } from './types';

export const createNewAccount = (data: CreateNewAccount) =>
  instance.post('/auth/register/email', data);
