import { useContext, useRef, useState } from "react";

import ContactsContext from "../../Store/contacts-context";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import styles from "./AddContact.module.scss";

const ContactView = (props) => {
  const contCtx = useContext(ContactsContext);
  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();
  const initialState = {
    validName: true,
    validPhone: true,
    validEmail: true,
  };
  const [validInputs, setValidInputs] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault(initialState);
    setValidInputs((prevState) => {
      return initialState;
    });
    const phoneRGEX = /^[0-9]{10}$/;
    const phoneResult = phoneRGEX.test(phoneInput.current.value);
    if (nameInput.current.value.trim().length === 0) {
      setValidInputs((prevState) => {
        return { ...prevState, validName: false };
      });
    }

    if (phoneInput.current.value.trim().length === 0 || !phoneResult) {
      setValidInputs((prevState) => {
        return { ...prevState, validPhone: false };
      });
    }

    if (emailInput.current.value.trim().length === 0) {
      setValidInputs((prevState) => {
        return { ...prevState, validEmail: false };
      });
    }

    if (
      nameInput.current.value.trim().length === 0 ||
      phoneInput.current.value.trim().length === 0 ||
      !phoneResult ||
      emailInput.current.value.trim().length === 0
    ) {
      return;
    }

    const tempContact = {
      id: Math.random(),
      name: nameInput.current.value.trimStart(),
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      showing: true,
    };
    contCtx.addContact(tempContact);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <h3 className="text-center mt-3 mb-4">Add Contact</h3>
      <form onSubmit={submitHandler}>
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Name:</label>
          <Input ref={nameInput} input={{ placeholder: "Insert Name" }} />
        </div>
        {!validInputs.validName && (
          <p className={`${styles["invalid-input"]}`}>
            Please enter correct name
          </p>
        )}
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Phone:</label>
          <Input ref={phoneInput} input={{ placeholder: "Insert Phone" }} />
        </div>
        {!validInputs.validPhone && (
          <div className={`${styles["invalid-input"]}`}>
            <p>Please enter correct phone (10 digits)</p>
          </div>
        )}
        <div className={`mx-3 ${styles["contact-row"]}`}>
          <label className={styles.label}>Email:</label>
          <Input
            ref={emailInput}
            input={{ type: "email", placeholder: "Insert Email" }}
          />
        </div>
        {!validInputs.validEmail && (
          <p className={`${styles["invalid-input"]}`}>
            Please enter correct email
          </p>
        )}
        <div className={`mt-5 mb-3 ${styles.actions}`}>
          <button
            className="btn btn-outline-primary mx-3"
            onClick={props.onClose}
          >
            Cancel
          </button>
          <button className={`btn btn-outline-secondary mx-3`} type="submit">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ContactView;
