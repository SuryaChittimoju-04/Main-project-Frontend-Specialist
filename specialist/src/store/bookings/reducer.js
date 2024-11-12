import { FETCH_SPECIALIZATIONS_REQUEST, FETCH_SPECIALIZATIONS_FAILURE, FETCH_SPECIALIZATIONS_SUCCESS, FETCH_DOCTORS, FETCH_DOCTORS_SUCCESS, FETCH_DOCTORS_FAILURE, BOOK_SLOT, BOOK_SLOT_SUCCESS, BOOK_SLOT_FAILURE } from "./actions";

const initialState = {
    specializations: {
        isLoading: false,
        data: null,
        error: null,
    },
    doctors: {
        isLoading: false,
        data: null,
        error: null,
    },
    slots: {
        isLoading: false,
        data: null,
        error: null
    }
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SPECIALIZATIONS_REQUEST:
            return {
                ...state,
                specializations: {
                    isLoading: true,
                    error: null,
                },
            };
        case FETCH_SPECIALIZATIONS_SUCCESS:
            return {
                ...state,
                specializations: {
                    isLoading: false,
                    data: action.payload,
                },
            };
        case FETCH_SPECIALIZATIONS_FAILURE:
            return {
                ...state,
                specializations: {
                    isLoading: false,
                    error: action.error,
                },
            };
        case FETCH_DOCTORS:
            return {
                ...state,
                doctors:{
                    isLoading: true,
                    error: null,
                },
            };
        case FETCH_DOCTORS_SUCCESS:
            return {
                ...state,
                doctors:{
                    isLoading: false,
                    data: action.payload,
                },
            };
        case FETCH_DOCTORS_FAILURE:
            return {
                ...state,
                doctors:{
                    isLoading: false,
                    error: action.error,
                },
            };
        case BOOK_SLOT:
            return {
                ...state,
                slots:{
                    isLoading: true,
                    error: null,
                },
            };
        case BOOK_SLOT_SUCCESS:
            return {
                ...state,
                slots:{
                    isLoading: false,
                    data: action.payload,
                },
            };
        case BOOK_SLOT_FAILURE:
            return {
                ...state,
                slots:{
                    isLoading:false,
                    error: action.error,
                },
            };
        default:
            return state;
    }
}

export default bookingReducer;