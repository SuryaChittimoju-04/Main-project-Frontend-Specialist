/*eslint-disable*/
// src/store/auth/authActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const signupRequest = (data) => ({
  type: SIGNUP_REQUEST,
  payload: data,
});

export const signupSuccess = (userData) => ({
  type: SIGNUP_SUCCESS,
  payload: userData,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export default {
  loginRequest,
  loginSuccess,
  loginFailure,

  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,

  signupRequest,
  signupSuccess,
  signupFailure,

  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
}