import { TASKGET } from "./tasks.actions";


const tasks = {allTasks:[]};
export function taskReducer(state=tasks,{type,payload}){
    switch (type) {
        case TASKGET: {
            return { ...state, allTasks:payload }
        }
        default: {
            return state;
        }
    }
}