import { PROJECT_GET, PROJECT_LOAD } from "./projects.actions";


const projects = {
    allProjects:[],
    projectLoader:false,
};
export function projectReducer(state=projects,{type,payload}){
    switch (type) {
        case PROJECT_LOAD:{
            return {...state,projectLoader:true}
        }
        case PROJECT_GET: {
            return { ...state, allProjects:payload,projectLoader:false }
        }
        default: {
            return state;
        }
    }
}