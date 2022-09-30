import { CLIENT_FETCH } from "./clients.actions";


const client = {allClients:[]}
export function clientReducer(state = client, { type, payload }) {
    switch (type) {
        case CLIENT_FETCH: {
            return { ...state, allClients:payload }
        }
        default: {
            return state;
        }
    }
}