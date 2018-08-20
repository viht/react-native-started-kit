import axios from 'axios';
import { registerIntercepters } from './intercepters';
import { API_URL } from '../../common/constants/url';

const restApi = axios.create({
  baseURL: API_URL,
  headers: {
    post: {
      'content-type': 'application/json',
    },
    delete: {
      'content-type': 'application/json',
    },
  },
});

registerIntercepters(restApi);

export default restApi;
