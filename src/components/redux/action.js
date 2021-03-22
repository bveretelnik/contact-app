import Axios from "axios";
import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  REMOVE_CONTACT,
  SHOW_ALERT,
  HIDE_ALERT,
  CATCH_CONTACT,
} from "./type";

const url = "https://contact-app-9b9ae-default-rtdb.firebaseio.com";

export const fetchContacts = () => {
  return async (dispatch) => {
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
};
export const addContact = async (name, email, phone) => {
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

    return (dispatch) => {
      dispatch({
        type: ADD_CONTACT,
        payload,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
export const removeContact = async (id) => {
  await Axios.delete(`${url}/contacts/${id}.json`);
  return (dispatch) => {
    dispatch({
      type: REMOVE_CONTACT,
      payload: id,
    });
  };
};

export const catchContact = (id) => {
  // const res = await Axios.get(`${url}/contacts.json`);
  return {
    type: CATCH_CONTACT,
    payload: id,
  };
};

export const show = () => {
  return {
    type: SHOW_ALERT,
  };
};
export const hide = () => {
  return {
    type: HIDE_ALERT,
  };
};
