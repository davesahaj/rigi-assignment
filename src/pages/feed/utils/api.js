import { ENDPOINTS } from '@/constants';
import { api } from '@/services';

export function getAllUsers() {
  return api({ url: ENDPOINTS.GET_USERS, type: 'GET' });
}

export function getAllPosts() {
  return api({ url: ENDPOINTS.GET_POSTS, type: 'GET' });
}
