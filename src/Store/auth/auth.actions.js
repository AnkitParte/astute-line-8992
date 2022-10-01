import axios from "axios";

export const LOGIN = "/auth/login";
export const ERROR = "/auth/error";
export const LOADING = "/auth/loading";
export const SIGNUP = "/auth/signup";
export const LOGOUT = "/auth/logout"; 


export const loginUser = (creds) => async (dispatch) => {
    dispatch({ type: LOADING });
    try{
        let res = await axios.post('https://hellobonsaibackend.onrender.com/users/login',creds);
        dispatch({type:LOGIN,payload:res.data});
        console.log(res);
    }
    catch(e){
        dispatch({type: ERROR})
    }
}


export const signupUser = (creds) => async (dispatch) => {
    dispatch({ type: LOADING });
    try{
        let res = await axios.post('https://hellobonsaibackend.onrender.com/users/signup',creds);
        dispatch({type:SIGNUP,payload:res.data});
        console.log(res.data);
    }
    catch(e){
        dispatch({type: ERROR})
    }
}

export const logoutUser = ()=>({type:LOGOUT,payload:{}})