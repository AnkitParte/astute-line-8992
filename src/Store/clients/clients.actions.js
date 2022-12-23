import axios from "axios";

export const CLIENT_FETCH = "/clients/fetch";
export const CLIENT_LOAD = "/clients/data/loads"

//"https://hellobonsaibackend.onrender.com/clients"
export const createClient = (creds, token) => {
    let config = {
        method: 'post',
        url: "https://hellobonsaibackend.onrender.com/clients",
        headers: {
            'token': token,
            'Content-Type': 'application/json'
        },
        data: creds
    };

    return axios(config).then(res=>res);

}

export const getClients = (token) => async (dispatch) => {
    dispatch({type:CLIENT_LOAD});
    try {
        let config = {
            method: 'get',
            url: "https://hellobonsaibackend.onrender.com/clients",
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        };

        let res = await axios(config);
        //console.log(res)
        dispatch({ type: CLIENT_FETCH, payload: res.data });
        return
    }
    catch(e){
        console.log(e);
    }
}

export const patchClients = (id, data) => {
    let config = {
        method: 'patch',
        url: `https://hellobonsaibackend.onrender.com/clients/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config).then(res=>res);
}

export const deleteClients = (id) => {
    let config = {
        method: 'delete',
        url: `https://hellobonsaibackend.onrender.com/clients/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios(config).then(res=>res);
}
