import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { fireReducer } from "./fireReducer";

export const rootReducer = combineReducers({
  fire: fireReducer,
  alert: alertReducer,
});
