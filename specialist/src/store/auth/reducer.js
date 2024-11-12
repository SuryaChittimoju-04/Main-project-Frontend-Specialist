// src/store/auth/authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actions';

const initialState = {
  isLoading: false,
  userData: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload,
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      }
    default:
      return state;
  }
};

export default authReducer;
