import { useEffect, useState, useContext } from "react";
import styles from "./TitleBar.module.css";
import ContactsContext from "../../Store/contacts-context";

const TitleBar = () => {
  const [lettersArray, setLettersArray] = useState([]);
  const contactsCtx = useContext(ContactsContext);

  useEffect(() => {
    let tempArr = [];
    for (const contact of contactsCtx.contacts) {
      if (!tempArr.includes(contact.name[0].toUpperCase())) {
        const newVal = contact.name[0].toUpperCase();
        tempArr.push(newVal);
      }
    }
    tempArr.sort();
    setLettersArray((prevState) => {
      return [...tempArr];
    });
  }, [contactsCtx.contacts]);

  const filterHandler = (event) => {
    for (const contact of contactsCtx.contacts) {
      let tempItem = {...contact, showing: false};
      contactsCtx.editContact(tempItem);
      if (event.target.textContent === contact.name[0].toUpperCase()) {
        contactsCtx.editContact({ ...tempItem, showing: true });
      }
    }
  };

  const clearFilter = () => {
    for (const contact of contactsCtx.contacts) {
      let tempItem = {...contact, showing: true};
      contactsCtx.editContact(tempItem);
    }
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`text-center`}>
        <span className={styles.title} onClick={clearFilter}>Contacts</span>
      </div>
      <div className={`${styles["underline-contacts"]}`} />
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
  );
};

export default TitleBar;
