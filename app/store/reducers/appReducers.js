import appState from '../../common/objects/appStateObject';
import { APP_ACTION, APP, APP_LOGIN, APP_TICKET, APP_KIOSK } from '../actionTypes';

function handleApplication(state = appState.initialData(), action) {
  switch (action.type) {
    // Update State Network
    case APP_ACTION.NETWORK_CHANGED:
      return {
        ...state,
        ...appState.updateNetwork(action.isConnected),
      };
    // Update current Page of the app
    case APP.SPLASH_SCREEN:
    case APP.KIOSK_PAGE:
    case APP.SETTING_PAGE:
    case APP.TICKET_PAGE:
    case APP.LOGIN_PAGE:
      return {
        ...state,
        ...appState.updateNewPage(action.type),
      };
    // Update state for call any request
    case APP_ACTION.REQUEST_LOG_OFF:
    case APP_ACTION.REQUEST_GET_TERMINAL_TYPES:
    case APP_ACTION.REQUEST_GET_COMPANIES:
    case APP_TICKET.REQUEST_ADD_OR_REMOVE_PRODUCT_TO_CART:
    case APP_TICKET.REQUEST_REMOVE_TICKET_OR_DEPENDENT_PRODUCT_TO_CART:
    case APP_ACTION.REQUEST_REMOVE_CART:
    case APP_KIOSK.REQUEST_GET_KIOSK_INFO:
    case APP_KIOSK.REQUEST_GET_KIOSK_PRODUCT_BY_CATEGORY:
    case APP_KIOSK.REQUEST_ADD_KIOSK_PRODUCT_TO_CART:
    case APP_KIOSK.REQUEST_REMOVE_KIOSK_PRODUCT_TO_CART:
      return {
        ...state,
        ...appState.enableRequesting(action.type),
      };
    // Update state for call request successfully
    case APP_LOGIN.REQUEST_LOGIN_SUCCESS:
    case APP_ACTION.REQUEST_GET_TERMINAL_TYPES_SUCCESS:
    case APP_ACTION.REQUEST_GET_COMPANIES_SUCCESS:
    case APP_ACTION.REQUEST_UPDATE_SETTING_SUCCESS:
    case APP_TICKET.REQUEST_ADD_OR_REMOVE_PRODUCT_TO_CART_SUCCESS:
    case APP_TICKET.REQUEST_REMOVE_TICKET_OR_DEPENDENT_PRODUCT_TO_CART_SUCCESS:
    case APP_ACTION.REQUEST_REMOVE_CART_SUCCESS:
    case APP_KIOSK.REQUEST_GET_KIOSK_INFO_SUCCESS:
    case APP_KIOSK.REQUEST_GET_KIOSK_PRODUCT_BY_CATEGORY_SUCCESS:
    case APP_KIOSK.REQUEST_UPDATE_KIOSK_PRODUCT_SUCCESS:
      return {
        ...state,
        ...appState.setRequestSuccess(action.type),
      };

    // Update state for call request failed
    case APP_ACTION.REQUEST_FAIL:
    case APP_LOGIN.REQUEST_LOGIN_FAILURE:
    case APP_ACTION.REQUEST_LOG_OFF_FAILURE:
    case APP_ACTION.REQUEST_GET_COMPANIES_FAILURE:
    case APP_ACTION.REQUEST_GET_TERMINAL_TYPES_FAILURE:
    case APP_ACTION.REQUEST_UPDATE_SETTING_FAILURE:
    case APP_TICKET.REQUEST_ADD_OR_REMOVE_PRODUCT_TO_CART_FAILURE:
    case APP_TICKET.REQUEST_REMOVE_TICKET_OR_DEPENDENT_PRODUCT_TO_CART_FAILURE:
    case APP_ACTION.REQUEST_REMOVE_CART_FAILURE:
    case APP_KIOSK.REQUEST_GET_KIOSK_INFO_FAILURE:
    case APP_KIOSK.REQUEST_GET_KIOSK_PRODUCT_BY_CATEGORY_FAILURE:
    case APP_KIOSK.REQUEST_UPDATE_KIOSK_PRODUCT_FAILURE:
      return {
        ...state,
        ...appState.setRequestError(action.errorMessage, action.type),
      };

    case APP_ACTION.UPDATE_ISFAILURE:
      return {
        ...state,
        ...appState.updateIsFailure(action.status, action.message),
      };
    default:
      return state;
  }
}

export default handleApplication;
