import jwt_decode from "jwt-decode";
import { jsApi } from "./axios";
import store from "../redux/store";
import { logoutAdminUser } from "../redux/actions/userActions";
import { SET_ADMIN_AUTHENTICATED } from "../redux/types";

interface FirebaseToken {
  name: string;
  exp: number;
  user_id: string;
}

const token = localStorage.FirebaseAdminToken;

export function AdminAuthentication() {
  if (token) {
    const decodedToken = jwt_decode<FirebaseToken>(token);
    const value = decodedToken.exp * 1000 < Date.now();
    console.log("value => ", value);
    if (value) {
      logoutAdminUser();
      window.location.href = "/admin-login";
    } else {
      store.dispatch({
        type: SET_ADMIN_AUTHENTICATED,
        payload: {
          user_id: decodedToken.user_id,
        },
      });
      jsApi.defaults.headers.common["Authorization"] = token;
    }
  } else {
    window.location.href = "/admin-login";
  }
}

// export function AdminAuthentication(): boolean {
//   switch (localStorage.FBIdAdminToken) {
//     case null || undefined:
//       return false;
//     case true:
//       return true;
//     default:
//       return false;
//   }
// }
