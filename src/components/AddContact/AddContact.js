import { Button } from "@material-ui/core";
import React from "react";

function AddContact() {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="field">
          <label>Phone</label>
          <input type="text" name="phone" placeholder="Phode" />
        </div>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddContact;
