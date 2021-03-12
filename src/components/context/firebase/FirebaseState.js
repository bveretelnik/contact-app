import Axios from "axios";
import { useReducer } from "react";
import { ADD_CONTACT, FETCH_CONTACTS, REMOVE_CONTACT } from "../types";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";

const url = "https://contact-app-9b9ae-default-rtdb.firebaseio.com";

export default function FirebaseState({ children }) {
  const initialState = {
    contacts: [],
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const fetchContacts = async () => {
    const res = await Axios.get(`${url}/contacts.json`);
    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({
      type: FETCH_CONTACTS,
      payload,
    });
  };

  const addContact = async (name, email, phone) => {
    const contact = {
      name,
      email,
      phone,
    };
    try {
      const res = await Axios.post(`${url}/contacts.json`, contact);
      const payload = {
        ...contact,
        id: res.data.name,
      };
      dispatch({
        type: ADD_CONTACT,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeContact = async (id) => {
    await Axios.delete(`${url}/contacts/${id}.json`);
    dispatch({
      type: REMOVE_CONTACT,
      payload: id,
    });
  };
  return (
    <FirebaseContext.Provider
      value={{
        fetchContacts,
        addContact,
        removeContact,
        contacts: state.contacts,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
