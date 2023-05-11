import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ContactsContext from "../../Store/contacts-context";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactView = (props) => {
  const contCtx = useContext(ContactsContext);
  const [editingContact, setEditingContact] = useState(false);
  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();
  const navigate = useNavigate();

  const deleteHandler = () => {
    contCtx.deleteContact(contCtx.displayedContact.id);
    // setEditingContact(false);
    navigate(`/`);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const tempContact = {
      id: contCtx.displayedContact.id,
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      showing: true,
    };
    contCtx.editContact(tempContact);
    navigate(`/`);
  };

  return (
    <>
      {!editingContact ? (
        <ContactCard
          name={contCtx.displayedContact.name}
          phone={contCtx.displayedContact.phone}
          email={contCtx.displayedContact.email}
          onDelete={deleteHandler}
          onEdit={() => setEditingContact(true)}
        />
      ) : (
        <ContactForm
          name={contCtx.displayedContact.name}
          phone={contCtx.displayedContact.phone}
          email={contCtx.displayedContact.email}
          nameInput={nameInput}
          phoneInput={phoneInput}
          emailInput={emailInput}
          onSubmitEdit={submitHandler}
          onCancel={() => setEditingContact(false)}
        />
      )}
    </>
  );
};

export default ContactView;
