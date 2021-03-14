import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addContact, show, hide } from "../redux/action";
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";
import { Email } from "@material-ui/icons";

function AddContact() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [contact, setContact] = useState(initialState);
  const { name, email, phone } = contact;
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const AddContactToList = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      return console.log("form not valid");
    }
    addContact(name, email, phone);
    setContact(initialState);
    dispatch(show());
    setInterval(() => {
      dispatch(hide());
    }, 2000);
  };
  return (
    <div className="ui main">
      {!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) && <DescriptionAlerts type="error" title="Danger" text="No" />}
      {alert.visible && (
        <DescriptionAlerts type="success" title="Success" text="" />
      )}
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            value={phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            type="text"
            name="phone"
            placeholder="Phode"
          />
        </div>
        <Button onClick={AddContactToList} variant="contained" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
}
const mapDispatchToProps = {
  addContact,
  show,
  hide,
};

export default connect(null, mapDispatchToProps)(AddContact);
