import React from "react";

import ModalItem from "../ContactCard/Modal/Modal";
import ContactList from "./ContactList/ContactList";

function ContactCard({ contacts }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && <ModalItem open={open} handleClose={handleClose} />}
      {contacts.map((contact, i) => (
        <ContactList contact={contact} handleOpen={handleOpen} key={i} />
      ))}
    </>
  );
}

export default ContactCard;
