import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import slotsReducer from './slots/reducer';
import bookingReducer from './bookings/reducer';

export default combineReducers({
  auth: authReducer,
  slots: slotsReducer,
  bookings: bookingReducer,    
});