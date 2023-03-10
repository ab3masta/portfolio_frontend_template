import {
  ADMIN_LOGED_IN,
  ADMIN_LOGING_IN,
  ADMIN_LOGING_IN_STATUS,
  SET_ADMIN_UNAUTHENTICATED,
} from "../types";
import { jsApi } from "../../utils/axios";
import { History } from "history";

export const adminLogIn =
  (data: any, history: History) =>
  (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({ type: ADMIN_LOGING_IN, payload: true });
    console.log("adminlogin data =>", data);
    jsApi
      .post("/admin-login", data)
      .then((res) => {
        setAuthorizationHeader(res.data["responseData"].userCredentials.token);
        dispatch({ type: ADMIN_LOGING_IN, payload: false });
        dispatch({ type: ADMIN_LOGING_IN_STATUS, payload: true });
        dispatch({
          type: ADMIN_LOGED_IN,
          payload: {
            user_id: res.data["responseData"].uid,
          }
        });
        history.push("/admin");
      })
      .catch((error) => {
        dispatch({ type: ADMIN_LOGING_IN_STATUS, payload: false });
        dispatch({ type: ADMIN_LOGING_IN, payload: false });
      });
  };

export const logoutAdminUser =
  () => (dispatch: (arg0: { type: any; payload: any }) => void) => {
    localStorage.removeItem("FirebaseAdminToken");
    delete jsApi.defaults.headers.common["Authorization"];
    dispatch({ type: SET_ADMIN_UNAUTHENTICATED, payload: undefined });
  };
const setAuthorizationHeader = (token: any) => {
  const FirebaseAdminToken = `Bearer ${token}`;
  localStorage.setItem("FirebaseAdminToken", FirebaseAdminToken);
  jsApi.defaults.headers.common["Authorization"] = FirebaseAdminToken;
};
