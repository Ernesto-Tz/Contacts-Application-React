import { useContext } from "react";

import ContactsContext from "../../Store/contacts-context";
import Modal from "../../UI/Modal";
import styles from "./ContactView.module.css";

const ContactView = (props) => {
  const contCtx = useContext(ContactsContext);

  const deleteHandler = () => {
    contCtx.deleteContact(contCtx.displayedContact.id);
    props.onClose();
  }

  return (
    <Modal onClose={props.onClose}>
      <h3 className="text-center mt-3 mb-4">Contact Information</h3>
      <div className={`mx-3 ${styles["contact-row"]}`}>
        <label className={styles.label}>Name:</label>
        <div className={styles.name}>{contCtx.displayedContact.name}</div>
      </div>
      <div className={`mx-3 ${styles["contact-row"]}`}>
        <label className={styles.label}>Phone:</label>
        <div className={styles["text-red"]}>
          {contCtx.displayedContact.phone}
        </div>
      </div>
      <div className={`mx-3 ${styles["contact-row"]}`}>
        <label className={styles.label}>Email:</label>
        <div className={styles["text-red"]}>
          {contCtx.displayedContact.email}
        </div>
      </div>
      <div className={`mt-5 mb-3 ${styles.actions}`}>
        <button className={`${styles.delete}`} onClick={deleteHandler}>Delete</button>
        <button className={`${styles.edit}`} onClick={props.onEditContact}>
          Edit
        </button>
      </div>
    </Modal>
  );
};

export default ContactView;
