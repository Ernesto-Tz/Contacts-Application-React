import { useContext, useRef, useState } from "react";

import ContactsContext from "../../Store/contacts-context";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import styles from "./EditContact.module.css";

const ContactView = (props) => {
  const contCtx = useContext(ContactsContext);
  const [validInputs, setValidInputs] = useState(true);
  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const tempContact = {
      id: contCtx.displayedContact.id,
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      showing: true
    };

    if (
      tempContact.name.trim().length === 0 ||
      tempContact.phone.trim().length === 0 ||
      tempContact.email.trim().length === 0
    ) {
      setValidInputs(false);
      return;
    }

    contCtx.editContact(tempContact);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <h3 className="text-center mt-3 mb-4">Edit Contact</h3>
      <form onSubmit={submitHandler}>
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Name:</label>
          <Input
            ref={nameInput}
            input={{ defaultValue: contCtx.displayedContact.name }}
          />
        </div>
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Phone:</label>
          <Input
            ref={phoneInput}
            input={{ defaultValue: contCtx.displayedContact.phone }}
          />
        </div>
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Email:</label>
          <Input
            ref={emailInput}
            input={{ defaultValue: contCtx.displayedContact.email }}
          />
          {/* <input className={styles.input} value={contCtx.displayedContact.email}/> */}
        </div>
        <div className={`mt-5 mb-3 ${styles.actions}`}>
          <button className={`${styles.cancel}`} onClick={props.onClose}>
            Cancel
          </button>
          <button className={`${styles.save}`} type="submit">
            Save
          </button>
        </div>
        {!validInputs && <p className="text-danger">Please enter correct Inputs</p>}
      </form>
    </Modal>
  );
};

export default ContactView;
