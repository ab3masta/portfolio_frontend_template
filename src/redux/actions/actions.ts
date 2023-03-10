import {
  SET_APPCHECKTOKEN,
  SEND_CONTACTBYEMAIL,
  SENDING_CONTACTBYEMAIL,
  SUBSCRIBE_NEWSLETTER,
  SUBSCRIBING_NEWSLETTER,
} from "../types";
import { getAppCheckToken } from "../../utils/firebase_initialize";
import emailjs from "@emailjs/browser";
import { jsApi } from "../../utils/axios";

// get Firebase AppCheck Token
export const appCheckToken = () => (dispatch: any) => {
  console.log("appcheck method called");
  getAppCheckToken
    .then((token) => {
      dispatch({ type: SET_APPCHECKTOKEN, payload: token.token });
    })
    .catch((error) => {
      console.log("get appcheckToken error => ", error);
      dispatch({ type: SET_APPCHECKTOKEN, payload: "undefined" });
    });
};

// send ContactBy Email
export const sendContactByEmail =
  (contact: Record<string, unknown>) =>
  (dispatch: any): Promise<any> => {
    dispatch({ type: SENDING_CONTACTBYEMAIL, payload: true });
    // send email
    return emailjs
      .send("service_tx0u0rl", "template_iwo3a7g", contact, "JWZppAMWvxJal64mD")
      .then(
        (result) => {
          dispatch({ type: SENDING_CONTACTBYEMAIL, payload: false });
          dispatch({ type: SEND_CONTACTBYEMAIL, payload: true });
        },
        (error) => {
          dispatch({ type: SEND_CONTACTBYEMAIL, payload: false });
        }
      );
  };

// subscribe to newsletter
export const subscribeToNewsletter =
  (data: Record<string, unknown>) =>
  (dispatch: any): Promise<any> => {
    dispatch({ type: SUBSCRIBING_NEWSLETTER, payload: true });
    // send email
    jsApi.post("/subscribe-to-newsletter", data);
    return emailjs
      .send("service_tx0u0rl", "template_wk8cqyn", data, "JWZppAMWvxJal64mD")
      .then(
        (result) => {
          dispatch({ type: SUBSCRIBING_NEWSLETTER, payload: false });
          dispatch({ type: SUBSCRIBE_NEWSLETTER, payload: true });
        },
        (error) => {
          dispatch({ type: SUBSCRIBE_NEWSLETTER, payload: false });
        }
      );
  };
