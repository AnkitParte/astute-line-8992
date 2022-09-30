import { PROJECT_GET } from "./projects.actions";


const projects = {allProjects:[]};
export function projectReducer(state=projects,{type,payload}){
    switch (type) {
        case PROJECT_GET: {
            return { ...state, allProjects:payload }
        }
        default: {
            return state;
        }
    }
}