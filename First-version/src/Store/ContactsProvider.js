import { useState, useCallback, useEffect } from "react";

import ContactsContext from "./contacts-context";
// You can try to get the data from an API e.g. from here https://randomuser.me/
import contacts from "../utils/contacts";



const ContactsProvider = (props) => {
  const [contactItems, setContactItems] = useState([]);
  const [displayedContact, setDisplayedContact] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContactsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/?results=15&&nat=gb,us,es,fr&inc=id,name,email,phone,picture&noinfo');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      // console.log(data.results);
      const loadedContacts = data.results.map(contact => {
        return {
          id: contact.id.value,
          name: `${contact.name.first} ${contact.name.last}`,
          phone: contact.phone,
          email: contact.email,
          photo: contact.picture,
          showing: true
        };
      });

      setContactItems(loadedContacts);
    } catch (error) {
      setError(error.message);
      setContactItems(contacts);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchContactsHandler();
  }, [fetchContactsHandler]);


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
        isLoading: isLoading,
        errorMessage: error
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
