import { useContext, useRef } from "react";

import ContactsContext from "../../Store/contacts-context";
import Input from "../../UI/Input";
import classes from "./Header.module.scss";
import VFlogo from "../../Assets/vodafone_logo.svg";

const Header = () => {
  const contactsCtx = useContext(ContactsContext);
  const userInput = useRef();

  const searching = () => {
    for (const contact of contactsCtx.contacts) {
      let tempItem = {};
      const contName = contact.name.toLowerCase();
      if (contName.includes(userInput.current.value.toLowerCase())) {
        tempItem = {...contact, showing: true};
        contactsCtx.editContact(tempItem);
      } else {
        tempItem = {...contact, showing: false};
        contactsCtx.editContact(tempItem);
      }
    }
  };

  return (
    <header className={`row m-0 ${classes.header}`}>
      <div className="col-md-6">
        <img className={classes.logo} src={VFlogo} alt="vodafone_logo" />
      </div>
      <div className="col-md-6 mt-3">
        <Input
          ref={userInput}
          onChange={searching}
          input={{
            type: "text",
            name: "search",
            placeholder: "Search for contact",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
