import { ENDPOINTS } from '@/constants';
import { api } from '@/services';

export function getPost(id) {
  return api({ url: ENDPOINTS.GET_POST.replace('$id', id), type: 'GET' });
}
