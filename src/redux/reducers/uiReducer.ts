import {
  SEND_CONTACTBYEMAIL,
  SENDING_CONTACTBYEMAIL,
  CLEAR_SEND_CONTACTBYEMAIL,
  LOADING_ALLPROJECTS,
  SUBSCRIBE_NEWSLETTER,
  SUBSCRIBING_NEWSLETTER,
  CLEAR_SUBSCRIBE_NEWSLETTER,
  ADMIN_LOGING_IN_STATUS,
  ADMIN_LOGING_IN,
  CLEAR_ADMIN_LOG_IN,
} from "../types";

const initialState = {
  //contact
  sendContactByEmail: null,
  sendingContactByEmail: null,
  //newsletter
  subscribeToNewsletter: null,
  subscribingToNewsletter: null,
  //projects
  loadingAllProjects: null,
  //admin
  adminLogingIn: null,
  adminLogingInStatus: null,
};
export default function uiReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    // contact reducer
    case SEND_CONTACTBYEMAIL:
      return {
        ...state,
        sendContactByEmail: action.payload,
      };
    case SENDING_CONTACTBYEMAIL:
      return {
        ...state,
        sendingContactByEmail: action.payload,
      };
    case CLEAR_SEND_CONTACTBYEMAIL:
      return {
        ...state,
        sendContactByEmail: null,
        sendingContactByEmail: null,
      };
    // newletter reducer
    case SUBSCRIBE_NEWSLETTER:
      return {
        ...state,
        subscribeToNewsletter: action.payload,
      };
    case SUBSCRIBING_NEWSLETTER:
      return {
        ...state,
        subscribingToNewsletter: action.payload,
      };
    case CLEAR_SUBSCRIBE_NEWSLETTER:
      return {
        ...state,
        subscribeToNewsletter: null,
        subscribingToNewsletter: null,
      };
    // projects
    case LOADING_ALLPROJECTS:
      return {
        ...state,
        loadingAllProjects: action.payload,
      };
    // admin
    case ADMIN_LOGING_IN:
      return {
        ...state,
        adminLogingIn: action.payload,
      };
    case ADMIN_LOGING_IN_STATUS:
      return {
        ...state,
        adminLogingInStatus: action.payload,
      };
    case CLEAR_ADMIN_LOG_IN:
      return {
        ...state,
        adminLogingIn: null,
        adminLogingInStatus: null,
      };

    default:
      return state;
  }
}
