import { useState } from "react";

import ContactsContext from "./contacts-context";
// You can try to get the data from an API e.g. from here https://randomuser.me/
import contacts from "../utils/contacts";

const ContactsProvider = (props) => {
  const [contactItems, setContactItems] = useState(contacts);
  const [displayedContact, setDisplayedContact] = useState({});

  const addItemHandler = (item) => {
    setContactItems((prevState) => [...prevState, item]);
  };

  const editItemHandler = (item) => {
    const updatedItem = {
      id: item.id,
      name: item.name,
      phone: item.phone,
      email: item.email,
      showing: item.showing,
    };
    setContactItems((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === item.id) {
          return updatedItem;
        }
        return obj;
      });
      return newState;
    });
  };

  const displayItemHandler = (item) => {
    setDisplayedContact({ ...item });
  };

  const deleteItemHandler = (id) => {
    let updatedContacts;
    updatedContacts = contactItems.filter((item) => item.id !== id);
    setContactItems((prevState) => [...updatedContacts]);
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts: contactItems,
        displayedContact: displayedContact,
        addContact: addItemHandler,
        editContact: editItemHandler,
        deleteContact: deleteItemHandler,
        displayItem: displayItemHandler,
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
