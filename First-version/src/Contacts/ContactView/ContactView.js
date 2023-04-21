import { useContext, useRef, useState } from "react";

import ContactsContext from "../../Store/contacts-context";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import styles from "./ContactView.module.scss";

const ContactView = (props) => {
  const contCtx = useContext(ContactsContext);
  const [validInputs, setValidInputs] = useState(true);
  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();

  const deleteHandler = () => {
    contCtx.deleteContact(contCtx.displayedContact.id);
    props.onClose();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const tempContact = {
      id: contCtx.displayedContact.id,
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      showing: true,
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
      {props.action === "VIEW" && (
        <h3 className="text-center mt-3 mb-4">Contact Information</h3>
      )}
      {props.action === "EDIT" && (
        <h3 className="text-center mt-3 mb-4">Edit Information</h3>
      )}
      <form onSubmit={submitHandler}>
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Name:</label>
          {props.action === "VIEW" && (
            <div className={styles.name}>{contCtx.displayedContact.name}</div>
          )}
          {props.action === "EDIT" && (
            <Input
              ref={nameInput}
              input={{ defaultValue: contCtx.displayedContact.name }}
            />
          )}
        </div>
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Phone:</label>
          {props.action === "VIEW" && (
            <div className={styles["text-red"]}>
              {contCtx.displayedContact.phone}
            </div>
          )}
          {props.action === "EDIT" && (
            <Input
              ref={phoneInput}
              input={{ defaultValue: contCtx.displayedContact.phone }}
            />
          )}
        </div>
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Email:</label>
          {props.action === "VIEW" && (
            <div className={styles["text-red"]}>
              {contCtx.displayedContact.email}
            </div>
          )}
          {props.action === "EDIT" && (
            <Input
              ref={emailInput}
              input={{ defaultValue: contCtx.displayedContact.email }}
            />
          )}
        </div>
        {props.action === "VIEW" && (
          <div className={`mt-4 mb-3 ${styles.actions}`}>
            <button className={`btn btn-outline-primary mx-3`} onClick={deleteHandler}>
              Delete
            </button>
            <button className={`btn btn-outline-secondary mx-3`} onClick={props.onEditContact}>
              Edit
            </button>
          </div>
        )}
        {props.action === "EDIT" && (
          <div className={`mt-4 mb-3 ${styles.actions}`}>
            <button className={`btn btn-outline-primary mx-3`} onClick={props.onClose}>
              Cancel
            </button>
            <button className={`btn btn-outline-secondary mx-3`} type="submit">
              Save
            </button>
          </div>
        )}
        {!validInputs && (
          <p className={styles["text-red"]}>Please enter correct Inputs</p>
        )}
      </form>
    </Modal>
  );
};

export default ContactView;
