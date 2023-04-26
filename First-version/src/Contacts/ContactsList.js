import { useContext } from "react";

import ContactsContext from "../Store/contacts-context.js";
import ContactItem from "./ContactItem.js";
import classes from "./ContactsList.module.scss";

const ContactsList = (props) => {
  const contactsCtx = useContext(ContactsContext);

  const list = (
    <ul>
      {contactsCtx.contacts.map((item) => (
        <ContactItem
          key={item.id}
          id={item.id}
          contact={item}
          onClick={props.contactViewActive}
        />
      ))}
    </ul>
  );

  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.contacts} container`}>
        {contactsCtx.isLoading ? <p className="text-center">Loading ...</p> : list}
      </div>
    </div>
  );
};

export default ContactsList;
