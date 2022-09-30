import axios from "axios";

export const TASKPOST = "/tasks/post";
export const TASKGET = "/tasks/get";

//`https://hellobonsaibackend.onrender.com/tasks`
export const createTasks = (creds, token) => {
    let config = {
        method: 'post',
        url: `https://hellobonsaibackend.onrender.com/tasks`,
        headers: {
            'token': token,
            'Content-Type': 'application/json'
        },
        data: creds
    };

    return axios(config);

}

export const getTasks = (token) => async (dispatch) => {
    try {
        let config = {
            method: 'get',
            url: `https://hellobonsaibackend.onrender.com/tasks`,
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        };

        let res = await axios(config);
        //console.log(res)
        dispatch({type:TASKGET,payload:res.data});
        return(console.log("Tasks fetched"));
    }
    catch (e) {
        console.log(e);
    }


}

export const patchTasks = (id, data) => {
    let config = {
        method: 'patch',
        url: `https://hellobonsaibackend.onrender.com/tasks/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config);

}

export const deleteTasks = (id) => {
    let config = {
        method: 'delete',
        url: `https://hellobonsaibackend.onrender.com/tasks/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios(config);
}