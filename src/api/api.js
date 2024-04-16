/*=============================================
=              Global APIs                   =
=============================================*/

import { ENDPOINTS } from '@/constants';
import { api } from '@/services';
import { createUrlParameters } from '@/utils';

export function getSearchResults(query, page, limit = 10) {
  return api({
    url: createUrlParameters(ENDPOINTS.GET_POSTS, { query, page, limit }),
    type: 'GET'
  });
}
