import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import { APP_ACTION, APP_LOGIN, APP, APP_KIOSK, APP_TICKET } from '../actionTypes';
import appMiddleware from './appMiddleware';

export default function* rootSaga() {
  yield all([
  ]);
}
