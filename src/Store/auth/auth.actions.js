import axios from "axios";

export const LOGIN = "/auth/login";
export const ERROR = "/auth/error";
export const LOADING = "/auth/loading";
export const SIGNUP = "/auth/signup";
export const LOGOUT = "/auth/logout";

// feedback: fw18_0782 - Use URLs constant or env config because project includes different environments 
// create dynamic URLs based on environment config
export const loginUser = (toast, nav, creds) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.post('https://hellobonsaibackend.onrender.com/users/login', creds);
        dispatch({ type: LOGIN, payload: res.data });
        toast({
            title: 'Login Successful',
            description: "Good Job",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top",
        })
        nav('/user/Dashboard');
        console.log(res);
    }
    catch (e) {
        toast({
            title: 'UnIdentified',
            description: "Something went wrong",
            status: 'info',
            duration: 2000,
            isClosable: true,
            position: "top",
        })
        dispatch({ type: ERROR })
    }
}


export const signupUser = (toast, nav, creds) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.post('https://hellobonsaibackend.onrender.com/users/signup', creds);
        dispatch({ type: SIGNUP, payload: res.data });
        toast({
            title: 'SignUp Successful',
            description: "Account has been created",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top",
        })
        nav('/user/Dashboard');
        console.log(res.data);
    }
    catch (e) {
        toast({
            title: 'UnIdentified',
            description: "Something went wrong",
            status: 'info',
            duration: 2000,
            isClosable: true,
            position: "top",
        })
        dispatch({ type: ERROR })
    }
}

export const logoutUser = () => ({ type: LOGOUT, payload: {} })
