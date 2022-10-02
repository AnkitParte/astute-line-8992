import { ERROR, LOADING, LOGIN, LOGOUT, SIGNUP } from "./auth.actions";

// let x = {
//     "_id": "63369025bce96dec2c38efa3",
//     "email": "admin@gmail.com",
//     "name": "Admin",
//     "password": "oneoneone",
//     "country": "India",
//     "currency": "INR",
//     "__v": 0
// }
let prereq = JSON.parse(localStorage.getItem("user")) || {};
let isAuth = (prereq._id)?true:false;

const initial = {
    data: prereq,
    isAuth: isAuth,
    error: false,
    loading: false
}

export function authReducer(state = initial, { type, payload }) {
    switch (type) {
        case LOGIN: {
            window.localStorage.setItem("user",JSON.stringify(payload.token));
            return { ...state, data: payload.token, isAuth: true, loading: false, error: false }
        }
        case LOADING: {
            return { ...state, loading: true }
        }
        case ERROR: {
            return { ...state, error: true }
        }
        case SIGNUP: {
            return { ...state, data: payload.token, isAuth: true, loading: false, error: false }
        }
        case LOGOUT: {
            window.localStorage.removeItem("user");
            return { ...state, isAuth: false, data: payload }
        }
        default: {
            return state;
        }
    }
}