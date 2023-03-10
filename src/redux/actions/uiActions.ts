import {
  CLEAR_SEND_CONTACTBYEMAIL,
  CLEAR_SUBSCRIBE_NEWSLETTER,CLEAR_ADMIN_LOG_IN
} from "../types";

// clear send contact by email
export const clearSendContactByEmail =
  () => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: CLEAR_SEND_CONTACTBYEMAIL });
  };

// clear subscribe to newsletter
export const clearSubscribeToNewsLetter =
  () => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: CLEAR_SUBSCRIBE_NEWSLETTER });
  };

// clear subscribe to newsletter
export const clearAdminLogin =
  () => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: CLEAR_ADMIN_LOG_IN });
  };
