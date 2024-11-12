/*eslint-disable*/
export const FETCH_UPCOMING_SLOTS_REQUEST = 'FETCH_UPCOMING_SLOTS_REQUEST';
export const FETCH_UPCOMING_SLOTS_SUCCESS = 'FETCH_UPCOMING_SLOTS_SUCCESS';
export const FETCH_UPCOMING_SLOTS_FAILURE = 'FETCH_UPCOMING_SLOTS_FAILURE';

export const FETCH_AVAILABLE_SLOTS_REQUEST = 'FETCH_AVAILABLE_SLOTS_REQUEST';
export const FETCH_AVAILABLE_SLOTS_SUCCESS = 'FETCH_AVAILABLE_SLOTS_SUCCESS';
export const FETCH_AVAILABLE_SLOTS_FAILURE = 'FETCH_AVAILABLE_SLOTS_FAILURE';

export const FETCH_HISTORY_REQUEST= 'FETCH_HISTORY_REQUEST';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE';

export const fetchSlotsRequest = () => ({
  type: FETCH_UPCOMING_SLOTS_REQUEST,
});

export const fetchSlotsSuccess = (slotsData) => ({
  type: FETCH_UPCOMING_SLOTS_SUCCESS,
  payload: slotsData,
});

export const fetchSlotsFailure = (error) => ({
  type: FETCH_UPCOMING_SLOTS_FAILURE,
  error,
});

export const fetchAvailableSlotsRequest = (doctorId) => ({
  type: FETCH_AVAILABLE_SLOTS_REQUEST,
  payload: doctorId,
});

export const fetchAvailableSlotsSuccess = (availableSlots) => ({
  type: FETCH_AVAILABLE_SLOTS_SUCCESS,
  payload: availableSlots
});

export const fetchAvailableSlotsFailure = (error) => ({
  type: FETCH_AVAILABLE_SLOTS_FAILURE,
  error
});

export const fetchHistoryRequest = ()=> ({
  type: FETCH_HISTORY_REQUEST,
});

export const fetchHistorySuccess = (historyData) => ({
  type: FETCH_HISTORY_SUCCESS,
  payload: historyData,
});

export const fetchHistoryFailure = (error) => ({
  type: FETCH_HISTORY_FAILURE,
  error,
})

// Use named exports instead of default export to prevent import issues
export default {
  FETCH_UPCOMING_SLOTS_REQUEST,
  FETCH_UPCOMING_SLOTS_SUCCESS,
  FETCH_UPCOMING_SLOTS_FAILURE,
  FETCH_AVAILABLE_SLOTS_REQUEST,
  FETCH_AVAILABLE_SLOTS_SUCCESS,
  FETCH_AVAILABLE_SLOTS_FAILURE,
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,

  fetchSlotsRequest,
  fetchSlotsSuccess,
  fetchSlotsFailure,
  fetchAvailableSlotsRequest,
  fetchAvailableSlotsSuccess,
  fetchAvailableSlotsFailure,
  fetchHistoryRequest,
  fetchHistorySuccess,
  fetchHistoryFailure,
};
