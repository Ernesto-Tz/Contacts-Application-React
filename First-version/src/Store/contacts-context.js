import React from "react";

const ContactsContext = React.createContext({
  contacts: [],
  displayedContact: {},
  addContact: (item) => {},
  editContact: (id) => {},
  deleteContact: (id) => {},
  displayItem: (item) => {},
  isLoading: null,
  errorMessage: null
});


export default ContactsContext;