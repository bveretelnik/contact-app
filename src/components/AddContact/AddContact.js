import { Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";

function AddContact() {
  const { addContact } = useContext(FirebaseContext);
  const { show, hide, alert } = useContext(AlertContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const AddContact = (e) => {
    e.preventDefault();
    addContact(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
    show();
    setInterval(() => {
      hide();
    }, 2000);
  };
  return (
    <div className="ui main">
      {alert.visible && <DescriptionAlerts />}
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            name="phone"
            placeholder="Phode"
          />
        </div>
        <Button onClick={AddContact} variant="contained" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddContact;
