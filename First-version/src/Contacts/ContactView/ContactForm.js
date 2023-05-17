import { useState } from "react";
import Modal from "../../UI/Modal";
import styles from "./ContactView.module.scss";
import LabelInput from "../../UI/LabelInput";

function ContactForm(props) {
  const [confirmModal, setConfirmModal] = useState(false);
  const [validInputs, setValidInputs] = useState(true);

  const verifyInputs = (event) => {
    event.preventDefault();
    const tempContact = {
      name: props.nameInput.current.value,
      email: props.emailInput.current.value,
      phone: props.phoneInput.current.value,
    };

    if (
      tempContact.name.trim().length === 0 ||
      tempContact.phone.trim().length === 0 ||
      tempContact.email.trim().length === 0
    ) {
      setValidInputs(false);
      return;
    }
    setConfirmModal(true);
  };

  const content = (
    <form>
      <LabelInput
        label="Name:"
        property={props.nameInput}
        text={props.name}
        isValid={validInputs}
        errorMessage="Please enter a valid name"
      />
      <LabelInput
        label="Phone:"
        property={props.phoneInput}
        text={props.phone}
        isValid={validInputs}
        errorMessage="Please enter a valid phone number"
      />
      <LabelInput
        label="Email:"
        property={props.emailInput}
        text={props.email}
        isValid={validInputs}
        errorMessage="Please enter a valid email"
      />
      <div className={`mt-4 mb-3 ${styles.actions}`}>
        <button
          className={`btn btn-outline-primary mx-3`}
          onClick={props.onCancel}
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
            Edit Information
          </span>
        </div>
        {content}
      </div>
      {confirmModal && (
        <Modal onClose={() => setConfirmModal(false)}>
          <h4>Are you sure you want to edit this contact?</h4>
          <div className={`mt-4 mb-3`}>
            <button
              className={`btn btn-outline-primary mx-3`}
              onClick={() => setConfirmModal(false)}
            >
              Cancel
            </button>
            <button
              className={`btn btn-outline-secondary mx-3`}
              onClick={props.onSubmitEdit}
            >
              Save
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ContactForm;
