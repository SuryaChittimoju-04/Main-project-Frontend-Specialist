/*eslint-disable*/
export const FETCH_SPECIALIZATIONS_REQUEST = 'FETCH_SPECIALIZATIONS_REQUEST';
export const FETCH_SPECIALIZATIONS_SUCCESS = 'FETCH_SPECIALIZATIONS_SUCCESS';
export const FETCH_SPECIALIZATIONS_FAILURE = 'FETCH_SPECIALIZATIONS_FAILURE';

export const FETCH_DOCTORS = 'FETCH_DOCTORS';
export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
export const FETCH_DOCTORS_FAILURE = 'FETCH_DOCTORS_FAILURE';

export const BOOK_SLOT = 'BOOK_SLOT';
export const BOOK_SLOT_SUCCESS = 'BOOK_SLOT_SUCCESS';
export const BOOK_SLOT_FAILURE = 'BOOK_SLOT_FAILURE';

export const fetchSpecializations = () => ({
    type: FETCH_SPECIALIZATIONS_REQUEST,
});

export const fetchSpecializationsSuccess = (specializations) => ({
    type: FETCH_SPECIALIZATIONS_SUCCESS,
    payload: specializations,
});

export const fetchSpecializationsFailure = (error) => ({
    type: FETCH_SPECIALIZATIONS_FAILURE,
    error,
});

export const fetchDoctors = (specialization)=> ({
    type: FETCH_DOCTORS,
    payload: specialization,
});

export const fetchDoctorsSuccess = (doctors) => ({
    type: FETCH_DOCTORS_SUCCESS,
    payload: doctors,
});

export const fetchDoctorsFailure = (error)=> ({
    type: FETCH_DOCTORS_FAILURE,
    error,
});

export const bookSlot = (bookingData) => ({
    type: BOOK_SLOT,
    payload: bookingData
});

export const bookSlotSuccess = (slots)=>({
    type: BOOK_SLOT_SUCCESS,
    payload: slots,
});

export const bookSlotFailure = (error)=> ({
    type: BOOK_SLOT_FAILURE,
    error,
});

export default {
    fetchSpecializations,
    fetchSpecializationsSuccess,
    fetchSpecializationsFailure,
    FETCH_SPECIALIZATIONS_REQUEST,
    FETCH_SPECIALIZATIONS_SUCCESS,
    FETCH_SPECIALIZATIONS_FAILURE,

    fetchDoctors,
    fetchDoctorsSuccess,
    fetchDoctorsFailure,
    FETCH_DOCTORS,
    FETCH_DOCTORS_SUCCESS,
    FETCH_DOCTORS_FAILURE,

    bookSlot,
    bookSlotSuccess,
    bookSlotFailure,
    BOOK_SLOT,
    BOOK_SLOT_SUCCESS,
    BOOK_SLOT_FAILURE
}