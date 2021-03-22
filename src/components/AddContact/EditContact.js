import { Box, Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EditContact() {
  const { register, handleSubmit } = useForm();
  const [contact] = useSelector((state) => state.fire.contact);

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            value={contact.name}
            type="text"
            name="name"
            ref={register({ required: false, minLength: 2, maxLength: 20 })}
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            value={contact.email}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            value={contact.phone}
            type="text"
            name="phone"
            placeholder="Phode"
          />
        </div>
        <Box component="div">
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(contact)}
          >
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
