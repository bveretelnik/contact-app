import React, { useEffect, useContext } from "react";
import ModalItem from "../ContactCard/Modal/Modal";
import ContactList from "./ContactList/ContactList";
import { FirebaseContext } from "../context/firebase/firebaseContext";

function ContactCard() {
  const { fetchContacts, contacts } = useContext(FirebaseContext);
  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line
  }, []);
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
