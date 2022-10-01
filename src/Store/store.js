import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer"
import { clientReducer } from "./clients/clients.reducer"
import { projectReducer } from "./projects/projects.reducer"
import { taskReducer } from "./tasks/tasks.reducer"




const rootReducer = combineReducers({
    auth: authReducer,
    client: clientReducer,
    project: projectReducer,
    task: taskReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))