import {
  ADMIN_LOGED_IN,
  SET_ADMIN_UNAUTHENTICATED,
  SET_ADMIN_AUTHENTICATED,
} from "../types";
const initialState = {
  //admin
  adminLogedInData: {
    user_id: null,
  },
  adminAuthenticated: false,
};

export default function userReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    // admin
    case SET_ADMIN_AUTHENTICATED:
      return {
        ...state,
        adminAuthenticated: true,
        adminLogedInData: action.payload,
      };
    case ADMIN_LOGED_IN:
      return {
        ...state,
        adminLogedInData: action.payload,
        adminAuthenticated: true,
      };
    case SET_ADMIN_UNAUTHENTICATED:
      return {
        ...state,
        adminLogedInData: null,
        adminAuthenticated: false,
      };
    default:
      return state;
  }
}
