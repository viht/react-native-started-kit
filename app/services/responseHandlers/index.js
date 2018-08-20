import { errorHandlerException } from './errorHandler';

export const registerHandler = (response, appStorage) => (
  response.use((res) => {
    // console.log('RESPONSE: ', res);

    console.log('registerHandler => appStorage: ', appStorage);

    const data = errorHandlerException(res);
    // console.log('DATA: ', data);
    return data;
  })
);

export default {
  registerHandler,
};
