import { SET_APPCHECKTOKEN } from "../types";

const initialState = {
  appCheckToken: undefined,
};

export default function reducers(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case SET_APPCHECKTOKEN:
      return {
        ...state,
        appCheckToken: action.payload,
      };

    default:
      return state;
  }
}
