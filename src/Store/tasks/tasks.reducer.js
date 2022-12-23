import { TASKGET, TASK_LOAD } from "./tasks.actions";


const tasks = {
    allTasks:[],
    loadingTasks:false,
};
export function taskReducer(state=tasks,{type,payload}){
    switch (type) {
        case TASK_LOAD:{
            return {...state, loadingTasks:true}
        }
        case TASKGET: {
            return { ...state, allTasks:payload ,loadingTasks:false}
        }
        default: {
            return state;
        }
    }
}