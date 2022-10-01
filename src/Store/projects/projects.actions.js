import axios from "axios";

export const PROJECT_POST = "/project/post";
export const PROJECT_GET = "/project/get";

//`https://hellobonsaibackend.onrender.com/projects`
export const createProject = (creds, token) => {
    let config = {
        method: 'post',
        url: `https://hellobonsaibackend.onrender.com/projects`,
        headers: {
            'token': token,
            'Content-Type': 'application/json'
        },
        data: creds
    };

    return axios(config).then(res=>res);

}

export const getProjects = (token) => async (dispatch) => {
    try {
        let config = {
            method: 'get',
            url: `https://hellobonsaibackend.onrender.com/projects`,
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        };

        let res = await axios(config);
        //console.log(res)
        dispatch({type:PROJECT_GET,payload:res.data});
        return(console.log("projects fetched"));
    }
    catch (e) {
        console.log(e);
    }


}

export const patchProject = (id, data) => {
    let config = {
        method: 'patch',
        url: `https://hellobonsaibackend.onrender.com/projects/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config).then(res=>res);

}

export const deleteProjects = (id) => {
    let config = {
        method: 'delete',
        url: `https://hellobonsaibackend.onrender.com/projects/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios(config).then(res=>res);
}