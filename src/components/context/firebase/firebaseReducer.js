import { ADD_CONTACT, FETCH_CONTACTS, REMOVE_CONTACT } from "../types";

const handlers = {
  [ADD_CONTACT]: (state, { payload }) => ({
    ...state,
    contacts: [...state.contacts, payload],
  }),
  [FETCH_CONTACTS]: (state, { payload }) => ({ ...state, contacts: payload }),
  [REMOVE_CONTACT]: (state, { payload }) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== payload),
  }),
  DEFAULT: (state) => state,
};
export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
