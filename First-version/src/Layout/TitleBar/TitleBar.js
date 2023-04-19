import { useEffect, useState, useContext } from "react";
import styles from "./TitleBar.module.scss";
import ContactsContext from "../../Store/contacts-context";

const TitleBar = () => {
  const [lettersArray, setLettersArray] = useState([]);
  const contactsCtx = useContext(ContactsContext);

  useEffect(() => {
    // let tempArr = [];
    // for (const contact of contactsCtx.contacts) {
    //   if (!tempArr.includes(contact.name[0].toUpperCase())) {
    //     const newVal = contact.name[0].toUpperCase();
    //     tempArr.push(newVal);
    //   }
    // }
    // tempArr.sort();

    // This is a faster and a more elegant way to do this
    const tempArr = contactsCtx.contacts
      .map((contact) => contact.name.charAt(0))
      .sort();

    setLettersArray((prevState) => {
      return [...new Set(tempArr)];
    });
  }, [contactsCtx.contacts]);

  const filterHandler = (event) => {
    for (const contact of contactsCtx.contacts) {
      let tempItem = { ...contact, showing: false };
      contactsCtx.editContact(tempItem);
      if (event.target.textContent === contact.name[0].toUpperCase()) {
        contactsCtx.editContact({ ...tempItem, showing: true });
      }
    }
  };

  const clearFilter = () => {
    for (const contact of contactsCtx.contacts) {
      let tempItem = { ...contact, showing: true };
      contactsCtx.editContact(tempItem);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`text-center`}>
          <span
            className={styles.title}
            style={{
              borderBottom: "3px solid red",
              display: "inline-block",
              margin: "0 auto",
            }}
            onClick={clearFilter}
          >
            Contacts
          </span>
        </div>
        <div className={`${styles["filter-table"]}`}>
          {lettersArray.map((item, index) => (
            <div
              className={styles["filter-element"]}
              key={index}
              onClick={filterHandler}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
