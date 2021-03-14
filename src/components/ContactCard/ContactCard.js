import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalItem from "../ContactCard/Modal/Modal";
import ContactList from "./ContactList/ContactList";
import { fetchContacts } from "../redux/action";
function ContactCard() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.fire.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
    //eslint-disable-next-line
  }, [contacts]);

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
