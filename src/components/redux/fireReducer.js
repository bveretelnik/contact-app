import { ADD_CONTACT, FETCH_CONTACTS, REMOVE_CONTACT } from "./type";

const initialState = {
  contacts: [],
};
export const fireReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return { state, contacts: [...state.contacts, payload] };
    case FETCH_CONTACTS:
      return { ...state, contacts: payload };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    default:
      return state;
  }
};
