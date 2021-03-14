import { SHOW_ALERT, HIDE_ALERT } from "./type";

const initialState = {
  visible: false,
};
export const alertReducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_ALERT:
      return { ...state, visible: true };
    case HIDE_ALERT:
      return { state, visible: false };
    default:
      return state;
  }
};
