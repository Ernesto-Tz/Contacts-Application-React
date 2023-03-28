import { useContext } from "react";

import ContactsContext from "../Store/contacts-context.js";
import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  const contCtx = useContext(ContactsContext);

  const contactViewHandler = () => {
    contCtx.displayItem({ ...props.contact });
    props.onClick();
  };

  return (
    props.contact.showing && (
      <li className={`col-lg-4 col-md-6 ${classes.contact}`}>
        <div className={classes["contact-name"]} onClick={contactViewHandler}>
          {props.contact.name}
        </div>
        <div className={classes["contact-info"]}>
          <p>{props.contact.email}</p>
          <p>{props.contact.phone}</p>
        </div>
      </li>
    )
  );
};

export default ContactItem;
