import { FETCH_UPCOMING_SLOTS_REQUEST, FETCH_UPCOMING_SLOTS_SUCCESS, FETCH_UPCOMING_SLOTS_FAILURE, FETCH_AVAILABLE_SLOTS_REQUEST, FETCH_AVAILABLE_SLOTS_SUCCESS, FETCH_AVAILABLE_SLOTS_FAILURE, FETCH_HISTORY_REQUEST, FETCH_HISTORY_SUCCESS, FETCH_HISTORY_FAILURE } from './actions';

const initialState = {
  isLoading: false,
  error: null,
  upComingSlotsData: null,
  availableSlots: {
    isLoading: false,
    data: null,
    error: null,
  },
  history: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const slotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_SLOTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_UPCOMING_SLOTS_SUCCESS:
      return { ...state, isLoading: false, upComingSlotsData: action.payload };
    case FETCH_UPCOMING_SLOTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case FETCH_AVAILABLE_SLOTS_REQUEST:
      return {
        ...state,
        availableSlots: {
          isLoading: true,
        },
      };
    case FETCH_AVAILABLE_SLOTS_SUCCESS:
      return {
        ...state,
        availableSlots: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_AVAILABLE_SLOTS_FAILURE:
      return {
        ...state,
        availableSlots: {
          isLoading: false,
          error: action.error,
        },
      };
    case FETCH_HISTORY_REQUEST:
      return {
        ...state,
        history:{
          isLoading: true,
          error: null,
        },
      };
    case FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        history: {
          isLoading: false,
          data: action.payload,
        },
      };
    case FETCH_HISTORY_FAILURE:
      return {
        ...state,
        history: {
          isLoading: false,
          error: action.error,
        },
      }
    default:
      return state;
  }
};

export default slotsReducer;
