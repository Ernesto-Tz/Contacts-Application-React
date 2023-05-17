import Input from "./Input";
import styles from "./LabelInput.module.scss";

function LabelInput(props) {
  return (
    <>
      <div className={`mx-3 ${styles["contact-row"]}`}>
        <label className={styles.label}>{props.label}</label>
        <Input ref={props.property} input={{ defaultValue: props.text }} />
      </div>
      <div className={`mx-3 ${styles["contact-row"]}`}>
        {!props.isValid && (
          <p className={`${styles["invalid-input"]}`}>{props.errorMessage}</p>
        )}
      </div>
    </>
  );
}

export default LabelInput;
