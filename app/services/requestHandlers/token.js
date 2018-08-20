import { USER_INFO } from '../../common/constants/store';

export const setTokenHeader = async (config, appStorage) => {
  // Get token from storage
  // set token to request's header before sending to REST api
  const token = await appStorage.get(USER_INFO);
  console.log('Check token', config);
  if (token) {
    const newConfig = {
      ...config,
      validateStatus(status) {
        return status >= 200 && status < 500;
      },
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token.accessToken}`,
      },
    };
    return newConfig;
  }
  return {
    ...config,
    validateStatus: status => status >= 200 && status < 500,
  };
};

export default {
  setTokenHeader,
};
