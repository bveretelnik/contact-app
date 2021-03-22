import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EditContact() {
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState("");
  const [contact] = useSelector((state) => state.fire.contact);

  const onChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            onChange={onChange}
            value=""
            type="text"
            name="name"
            ref={register({ required: false, minLength: 2, maxLength: 20 })}
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            onChange={(e) => setState(e.target.value)}
            value={contact.email}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            onChange={(e) => setState(e.target.value)}
            value={contact.phone}
            type="text"
            name="phone"
            placeholder="Phode"
          />
        </div>
        <Box component="div">
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            Go back
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default EditContact;
