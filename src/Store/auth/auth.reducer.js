import { ERROR, LOADING, LOGIN, LOGOUT, SIGNUP } from "./auth.actions";

const initial = {
    data: {},
    isAuth: false,
    error: false,
    loading: false
}

export function authReducer(state = initial, { type, payload }) {
    switch (type) {
        case LOGIN: {
            return { ...state, data: payload.token, isAuth: true, loading: false, error: false }
        }
        case LOADING: {
            return { ...state, loading: true }
        }
        case ERROR: {
            return { ...state, error: true }
        }
        case SIGNUP:{
            return { ...state, data: payload.token, isAuth: true, loading: false, error: false }
        }
        case LOGOUT:{
            return {...state,isAuth:false,data:payload}
        }
        default: {
            return state;
        }
    }
}