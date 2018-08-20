import { APP } from '../../store/actionTypes';

const initialData = () => ({
  // page: APP.TICKET_PAGE,//set page default
  action: '',
  isRequesting: false,
  success: false,
  isFailure: false,
  errorMessage: '',
});

const updateNewPage = newPage => ({
  page: newPage,
  isRequesting: false,
  success: false,
  isFailure: false,
  errorMessage: '',
});

const enableRequesting = type => ({
  action: type,
  isRequesting: true,
  success: false,
  isFailure: false,
  errorMessage: '',
});

const setRequestError = (message, action = '') => ({
  action,
  errorMessage: message,
  success: false,
  isFailure: true,
  isRequesting: false,
});

const setRequestSuccess = (action = '') => ({
  action,
  errorMessage: '',
  success: true,
  isFailure: false,
  isRequesting: false,
});

const appStateObject = {
  initialData,
  updateNewPage,
  enableRequesting,
  setRequestError,
  setRequestSuccess,
};

export default appStateObject;
