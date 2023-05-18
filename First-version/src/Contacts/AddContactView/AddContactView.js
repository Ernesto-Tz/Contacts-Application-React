import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactsContext from "../../Store/contacts-context";
import Modal from "../../UI/Modal";
import styles from "./AddContactView.module.scss";
import LabelInput from "../../UI/LabelInput";

const AddContactView = (props) => {
  const contCtx = useContext(ContactsContext);
  const [confirmModal, setConfirmModal] = useState(false);
  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();
  const initialState = {
    validName: true,
    validPhone: true,
    validEmail: true,
  };
  const [validInputs, setValidInputs] = useState(initialState);
  const navigate = useNavigate();


  const verifyInputs = (event) => {
    event.preventDefault();
    const phoneRGEX = /^[0-9]{10}$/;
    const phoneResult = phoneRGEX.test(phoneInput.current.value);
    setValidInputs((prevState) => {
      return initialState;
    });

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
    setConfirmModal(true);
  }

  const submitHandler = (event) => {
    const tempContact = {
      id: Math.random(),
      name: nameInput.current.value.trimStart(),
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      showing: true,
    };
    contCtx.addContact(tempContact);
    navigate(`/`);
  };
  
  const content = (
    <form>
      <LabelInput
        label="Name:"
        property={nameInput}
        placeHolder="Type name"
        isValid={validInputs.validName}
        errorMessage="Please enter a valid name"
      />
      <LabelInput
        label="Phone:"
        property={phoneInput}
        placeHolder="Type phone"
        isValid={validInputs.validPhone}
        errorMessage="Please enter a valid phone number"
      />
      <LabelInput
        label="Email:"
        property={emailInput}
        placeHolder="Type email"
        isValid={validInputs.validEmail}
        errorMessage="Please enter a valid email"
      />
      <div className={`mt-4 mb-3 ${styles.actions}`}>
        <button
          className={`btn btn-outline-primary mx-3`}
          onClick={() => navigate(`/`)}
        >
          Cancel
        </button>
        <button
          className={`btn btn-outline-secondary mx-3`}
          onClick={verifyInputs}
        >
          Save
        </button>
      </div>
    </form>
  );

  return (
    <>
    <div className={styles.container}>
      <div className={`text-center mt-3 mb-4`}>
        <span
          className={`${styles.title}`}
          style={{
            borderBottom: "3px solid red",
            display: "inline-block",
            margin: "0 auto",
          }}
        >
          Add Contact
        </span>
      </div>
      {content}
    </div>
    {confirmModal && (
      <Modal onClose={() => setConfirmModal(false)}>
        <h4>Are you sure you want to add this contact?</h4>
        <div className={`mt-4 mb-3`}>
          <button
            className={`btn btn-outline-primary mx-3`}
            onClick={() => setConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            className={`btn btn-outline-secondary mx-3`}
            onClick={submitHandler}
          >
            Save
          </button>
        </div>
      </Modal>
    )}
  </>
  );
};

export default AddContactView;