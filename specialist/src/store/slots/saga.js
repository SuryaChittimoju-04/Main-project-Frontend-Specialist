import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_UPCOMING_SLOTS_REQUEST, fetchSlotsSuccess, fetchSlotsFailure, FETCH_AVAILABLE_SLOTS_REQUEST, fetchAvailableSlotsSuccess, fetchAvailableSlotsFailure, FETCH_HISTORY_REQUEST, fetchHistoryFailure, fetchHistorySuccess } from './actions';
import { apiFetchAvailableSlots, apiFetchSlots, apiHistoryList } from '../../lib/urls';

// Define fetchSlotsSaga as a generator function with apiClient passed as an argument
function* fetchSlotsSaga({ apiClient }) {
  try {
    // Make the API call using the apiClient
    const response = yield call([apiClient, apiClient.makeRequest], apiFetchSlots);

    if (response.ok) {  // Check if the response is successful
      yield put(fetchSlotsSuccess(response.data));
    } else {
      throw new Error(response.problem || 'Failed to fetch slots data');
    }
  } catch (error) {
    console.error("Error occurred while fetching slots:", error.message);
    yield put(fetchSlotsFailure(error.message));
  }
}

function* fetchAvailableSlots({apiClient},{payload}){
  try{
    const response = yield call([apiClient, apiClient.makeRequest], apiFetchAvailableSlots(payload));
    if(response.ok){
      yield put(fetchAvailableSlotsSuccess(response.data));
    }else{
      throw new Error(response.problem || 'Failed to fetch slots data');
    }
  } catch (error){
    console.error("Error occurred while fetching slots:", error.message);
    yield put(fetchAvailableSlotsFailure(error.message));
  }
}

function* fetchHistorySaga({apiClient}){
  try{
    const response = yield call([apiClient, apiClient.makeRequest], apiHistoryList);
    if(response.ok){
      yield put(fetchHistorySuccess(response.data));
    }else{
      throw new Error(response.problem || 'Failed to fetch history');
    }
  }catch(error){
    console.log("Error occured while fetching history of slots:", error.message);
    yield put(fetchHistoryFailure(error.message));
  }
}

// Define the main saga to watch for FETCH_SLOTS_REQUEST actions
function* slotsSaga(apiClient) {
  // Pass apiClient as a third parameter in takeEvery
  yield takeEvery(FETCH_UPCOMING_SLOTS_REQUEST, fetchSlotsSaga, apiClient);
  yield takeEvery(FETCH_AVAILABLE_SLOTS_REQUEST, fetchAvailableSlots, apiClient);
  yield takeEvery(FETCH_HISTORY_REQUEST, fetchHistorySaga, apiClient);
}

export default slotsSaga;
