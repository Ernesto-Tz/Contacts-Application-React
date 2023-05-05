import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import ContactsContext from "../Store/contacts-context.js";
import classes from "./ContactItem.module.scss";

const ContactItem = (props) => {
  const contCtx = useContext(ContactsContext);
  const navigate = useNavigate();

  const contactViewHandler = () => {
    contCtx.displayItem({ ...props.contact });
    navigate(`/contacts/${props.contact.id}`);
  };

  return (
    props.contact.showing && (
      <li className={`col-lg-4 col-md-6 ${classes.contact}`}>
        <Link className={classes["contact-name"]} onClick={contactViewHandler}>
          {props.contact.name}
        </Link>
        <div className={classes["contact-info"]}>
          <p>{props.contact.email}</p>
          <p>{props.contact.phone}</p>
        </div>
      </li>
    )
  );
};

export default ContactItem;
