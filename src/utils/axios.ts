import axios from "axios";
import store from "../redux/store";
import { getAppCheckToken } from "./firebase_initialize";
import { SET_APPCHECKTOKEN } from '../redux/types';

const { REACT_APP_AXIOS_DEV_URL, REACT_APP_AXIOS_PROD_URL } = process.env;


//init appCheckToken
if (process.env.NODE_ENV === "production") {
   getAppCheckToken
    .then((token) => {
      jsApi.defaults.headers.common['Authorization'] = token.token;
      store.dispatch({ type: SET_APPCHECKTOKEN, payload: token.token });
    })
    .catch((error) => {
      store.dispatch({ type: SET_APPCHECKTOKEN, payload: undefined });
    });
}

console.log(
  "store.getState().reducers.appCheckToken ==> ",
  store.getState().reducers.appCheckToken
);

const jsApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? REACT_APP_AXIOS_PROD_URL
      : REACT_APP_AXIOS_DEV_URL,
  headers: {
    "Content-type": "application/json",
    //"X-Firebase-AppCheck": store.getState().reducers.appCheckToken,
  },
});

export { jsApi };
