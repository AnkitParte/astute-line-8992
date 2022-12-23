import { CLIENT_FETCH, CLIENT_LOAD } from "./clients.actions";


const client = {
    allClients:[],
    loadClient:false,
}
export function clientReducer(state = client, { type, payload }) {
    switch (type) {
        case CLIENT_LOAD:{
            return {...state,loadClient:true}
        }
        case CLIENT_FETCH: {
            return { ...state, allClients:payload,loadClient:false }
        }
        default: {
            return state;
        }
    }
}