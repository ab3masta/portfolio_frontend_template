import { GET_ALL_PROJECTS, LOADING_ALLPROJECTS } from "../types";
import { jsApi } from "../../utils/axios";

// get projects
export const getAllProjects =
  () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({ type: LOADING_ALLPROJECTS, payload: true });
    jsApi
      .get("/get-projects")
      .then((res) => {
        dispatch({ type: LOADING_ALLPROJECTS, payload: false });
        dispatch({
          type: GET_ALL_PROJECTS,
          payload: res.data["responseData"].dataList,
        });
      })
      .catch((error) => {
        dispatch({ type: LOADING_ALLPROJECTS, payload: false });
        dispatch({
          type: GET_ALL_PROJECTS,
          payload: [],
        });
      });
  };
