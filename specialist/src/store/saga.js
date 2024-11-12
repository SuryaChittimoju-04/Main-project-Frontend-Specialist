import { fork } from 'redux-saga/effects';
import api from "../services/apiClient";
import authSaga from './auth/saga';
import slotsSaga from './slots/saga';
import bookingSaga from './bookings/saga';

const apiEndpoint = process.env.BACKEND_BASE_URL;
export const apiClient = api.create(apiEndpoint);

const handler = {
  apiClient,
};

export default function* rootSaga() {
  yield fork(authSaga, handler);
  yield fork(slotsSaga, handler);
  yield fork(bookingSaga, handler);
}

export { handler };
