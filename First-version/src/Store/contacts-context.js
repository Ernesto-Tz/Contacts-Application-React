import React from "react";

const ContactsContext = React.createContext({
  contacts: [],
  displayedContact: {},
  addContact: (item) => {},
  editContact: (id) => {},
  deleteContact: (id) => {},
  displayItem: (item) => {}
});


export default ContactsContext;