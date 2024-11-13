const BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:5000/api/v1/HCS";
export const apiLogin = `${BASE_URL}/specialist/login`;
export const apiSignUp = `${BASE_URL}/specialist/register/doctor`;
export const apiFetchSpecializations = `${BASE_URL}/specialist/specializations`;
export const apiFetchAvailableSlots =(doctorId)=> `${BASE_URL}/slot/available?doctorId=${doctorId}`;
export const apiFetchDoctors =(specialization)=> `${BASE_URL}/specialist/doctors?specialization=${specialization}`;
export const apiFetchSlots = `${BASE_URL}/slot/upcoming`;
export const apiBookSlot = `${BASE_URL}/slot/book`;
export const apiHistoryList = `${BASE_URL}/slot/doc/history`;