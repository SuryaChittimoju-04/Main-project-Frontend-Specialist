// src/store/auth/authSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure, SIGNUP_REQUEST, signupFailure, signupSuccess } from './actions';
import { apiLogin, apiSignUp } from '../../lib/urls';

function* loginSaga({ apiClient }, { payload }) {
  try {
    const userData = yield call([apiClient, apiClient.makeRequest], apiLogin, 'POST', {
      email: payload.email,
      password: payload.password,
      hospitalId: payload.hospitalId
    });
    const response = userData.data;
    if (response.statusCode === 200) {
      const res = { "statusCode": response.statusCode, "data": response.data };
      yield put(loginSuccess(res));
      window.localStorage.setItem("userName", response.data.name);
      window.localStorage.setItem("doctorId",response.data.id);
    } else {
      yield put(loginFailure(response.message));
    }
  } catch (error) {
    console.error("Login Error:", error); // Log error details
    yield put(loginFailure(error.message));
  }
}

function* signupRequestSaga({ apiClient }, { payload }) {
  // function age(dateOfBirth) {
  //   const dob = new Date(dateOfBirth);
  //   const today = new Date();

  //   let age = today.getFullYear() - dob.getFullYear();
  //   const monthDifference = today.getMonth() - dob.getMonth();
  //   const dayDifference = today.getDate() - dob.getDate();

  //   // Adjust if the birth date hasn't occurred yet this year
  //   if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
  //     age--;
  //   }

  //   return age;
  // }

  try {
    const response = yield call([apiClient, apiClient.makeRequest], apiSignUp, 'POST', {
      hospitalId: payload.hospitalId,
      name: payload.name,
      password: payload.password,
      email: payload.email,
      phoneNumber: payload.phone,
      gender: payload.gender,
      specialization: payload.specialization,
      isAffiliated: payload.isAffiliated,
      labs: [],
    });
    const responseData = response.data;
    if (responseData.statusCode === 200) {
      const res = { "statusCode": response.statusCode, "data": response.data };
      yield put(signupSuccess(res));
      window.localStorage.setItem("userName", response.data.name);
      window.localStorage.setItem("doctorId",response.data.id);
    } else {
      yield put(signupFailure(response.message));
    }
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

function* authSaga(apiClient) {
  yield takeEvery(LOGIN_REQUEST, loginSaga, apiClient);
  yield takeEvery(SIGNUP_REQUEST, signupRequestSaga, apiClient);
}

export default authSaga;