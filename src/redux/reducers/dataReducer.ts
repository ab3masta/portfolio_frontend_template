import {
  
  GET_ALL_PROJECTS,
} from "../types";

const initialState = {
  allProjects: [],
};
export default function dataReducer(
  state = initialState,
  action: { type: any; payload: {} }
) {
  switch (action.type) {

    
    case GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: action.payload,
      };

    default:
      return state;
  }
}
