import { useState } from "react";
import Modal from "../../UI/Modal";
import styles from "./ContactView.module.scss";

const LabelText = (props) => {
  return (
    <div className={`mx-3 ${styles["contact-row"]}`}>
      <label className={styles.label}>{props.label}</label>
      <div className={styles.name}>{props.text}</div>
    </div>
  );
};

function ContactCard(props) {
  const [deleteModalIsShown, setDeleteModalIsShown] = useState(false);

  const content = (
    <>
      <LabelText label="Name:" text={props.name} />
      <LabelText label="Phone:" text={props.phone} />
      <LabelText label="Email:" text={props.email} />
      <div className={`mt-4 mb-3 ${styles.actions}`}>
        <button
          className={`btn btn-outline-primary mx-3`}
          onClick={() => setDeleteModalIsShown(true)}
        >
          Delete
        </button>
        <button
          className={`btn btn-outline-secondary mx-3`}
          onClick={props.onEdit}
        >
          Edit
        </button>
      </div>
    </>
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
          Contact Information
        </span>
      </div>
      {content}
    </div>
    { deleteModalIsShown &&
      <Modal onClose={() => setDeleteModalIsShown(false)}>
        <h4>Are you sure you want to delete this contact?</h4>
        <div className={`mt-5 mb-2 text-center`}>
          <button
            className={`btn btn-outline-primary mx-3`}
            onClick={props.onDelete}
          >
            Delete
          </button>
          <button
            className={`btn btn-outline-secondary mx-3`}
            onClick={() => setDeleteModalIsShown(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    }
  </>
  );
}

export default ContactCard;
